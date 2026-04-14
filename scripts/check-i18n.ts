import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import { LOCALES, Locale } from '../lib/types';
import { globalTranslations } from '../lib/translations';
import { homeTranslations } from '../app/[lang]/translations';
import { aboutTranslations } from '../app/[lang]/about/translations';
import { messagesTranslations } from '../app/[lang]/messages/translations';
import { whyTranslations } from '../app/[lang]/why/translations';
import { donateTranslations } from '../app/[lang]/donate/translations';
import { TEAM_DATA } from '../lib/team';

const LOCALE_SET = new Set<string>(LOCALES);

const EXEMPT_SAME_ACROSS_LOCALES = 'they-are-really-same-in-these-languages';

/** Long identical copy across all locales is usually a paste mistake; short strings (names, UI tokens) are allowed. */
const MIN_IDENTICAL_LOCALE_STRING_CHARS = 44;

const TRANSLATION_SOURCE_PATHS = [
  path.join('lib', 'translations.tsx'),
  path.join('app', '[lang]', 'translations.tsx'),
  path.join('app', '[lang]', 'about', 'translations.tsx'),
  path.join('app', '[lang]', 'messages', 'translations.tsx'),
  path.join('app', '[lang]', 'why', 'translations.tsx'),
  path.join('app', '[lang]', 'asks', 'translations.tsx'),
  path.join('app', '[lang]', 'donate', 'translations.tsx'),
];

function commentOnLineHasExempt(line: string): boolean {
  const i = line.indexOf('//');
  if (i < 0) return false;
  return line.slice(i).includes(EXEMPT_SAME_ACROSS_LOCALES);
}

function hasExemptionMarkerAbove(source: string, index: number, linesAbove: number): boolean {
  let pos = index > 0 ? index - 1 : 0;
  for (let n = 0; n < linesAbove; n++) {
    const lineStart = source.lastIndexOf('\n', pos) + 1;
    const lineEnd = source.indexOf('\n', lineStart);
    const line = source.slice(lineStart, lineEnd === -1 ? source.length : lineEnd);
    if (commentOnLineHasExempt(line)) return true;
    pos = lineStart - 2;
    if (lineStart <= 0) break;
  }
  return false;
}

function hasExemptionInPreamble(source: string, blockOpenPos: number, beforePos: number): boolean {
  if (beforePos <= blockOpenPos) return false;
  return source.slice(blockOpenPos, beforePos).includes(EXEMPT_SAME_ACROSS_LOCALES);
}

function localeKeyFromComputedProperty(propName: ts.PropertyName, sf: ts.SourceFile): string | null {
  if (!ts.isComputedPropertyName(propName)) return null;
  const e = propName.expression;
  if (!ts.isPropertyAccessExpression(e)) return null;
  if (e.expression.getText(sf) !== 'Locale') return null;
  const member = e.name.text;
  const v = (Locale as unknown as Record<string, string>)[member];
  return typeof v === 'string' && LOCALE_SET.has(v) ? v : null;
}

function unwrapExpression(node: ts.Expression): ts.Expression {
  let n: ts.Expression = node;
  while (ts.isAsExpression(n) || ts.isParenthesizedExpression(n)) {
    n = ts.isAsExpression(n) ? n.expression : n.expression;
  }
  return n;
}

function unwrapStringLiteral(node: ts.Expression): string | null {
  const u = unwrapExpression(node);
  if (ts.isStringLiteral(u) || ts.isNoSubstitutionTemplateLiteral(u)) return u.text;
  return null;
}

function unwrapCallExpression(node: ts.Expression): ts.CallExpression | null {
  const u = unwrapExpression(node);
  return ts.isCallExpression(u) ? u : null;
}

function isLocaleStringLeafObject(node: ts.ObjectLiteralExpression, sf: ts.SourceFile): boolean {
  const seen = new Set<string>();
  for (const prop of node.properties) {
    if (!ts.isPropertyAssignment(prop)) return false;
    const lk = localeKeyFromComputedProperty(prop.name, sf);
    if (!lk) return false;
    if (unwrapStringLiteral(prop.initializer) === null) return false;
    seen.add(lk);
  }
  return seen.size === LOCALES.length;
}

function getLocaleStringsFromLeaf(node: ts.ObjectLiteralExpression, sf: ts.SourceFile): string[] {
  const out: string[] = [];
  for (const loc of LOCALES) {
    for (const prop of node.properties) {
      if (!ts.isPropertyAssignment(prop)) continue;
      const lk = localeKeyFromComputedProperty(prop.name, sf);
      if (lk !== loc) continue;
      const t = unwrapStringLiteral(prop.initializer);
      if (t !== null) out.push(t);
    }
  }
  return out;
}

function objectLiteralContainingProperty(prop: ts.PropertyAssignment): ts.ObjectLiteralExpression | null {
  return ts.isObjectLiteralExpression(prop.parent) ? prop.parent : null;
}

function scanTranslationSourceFile(absPath: string): string[] {
  const rel = path.relative(process.cwd(), absPath);
  const source = fs.readFileSync(absPath, 'utf8');
  const sf = ts.createSourceFile(rel, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const errs: string[] = [];

  const visit = (node: ts.Node): void => {
    if (ts.isObjectLiteralExpression(node) && isLocaleStringLeafObject(node, sf)) {
      const values = getLocaleStringsFromLeaf(node, sf);
      if (values.length !== LOCALES.length) return;
      const trimmed = values.map((s) => s.trim());
      const unique = new Set(trimmed);
      const first = trimmed[0] ?? '';
      if (unique.size === 1 && first.length > 0) {
        if (first.length < MIN_IDENTICAL_LOCALE_STRING_CHARS) {
          ts.forEachChild(node, visit);
          return;
        }
        const leafStart = node.getStart(sf);
        const propParent = node.parent;
        const preambleStart =
          ts.isPropertyAssignment(propParent) && ts.isObjectLiteralExpression(propParent.parent)
            ? propParent.parent.getStart(sf)
            : leafStart;
        const ok =
          hasExemptionMarkerAbove(source, leafStart, 5) ||
          hasExemptionInPreamble(source, preambleStart, leafStart);
        if (!ok) {
          const { line } = sf.getLineAndCharacterOfPosition(leafStart);
          errs.push(
            `${rel}:${line + 1}: all locales share the same ${first.length}-char string; add // ${EXEMPT_SAME_ACROSS_LOCALES} above or in object preamble`,
          );
        }
      }
    }

    if (ts.isPropertyAssignment(node)) {
      const call = unwrapCallExpression(node.initializer);
      if (!call) {
        ts.forEachChild(node, visit);
        return;
      }
      const callee = call.expression;
      const name = ts.isIdentifier(callee) ? callee.text : null;
      if (name !== 'en' && name !== 'allLocales') {
        ts.forEachChild(node, visit);
        return;
      }
      const args = call.arguments;
      const a0 = args[0];
      if (args.length !== 1 || a0 === undefined || (!ts.isStringLiteral(a0) && !ts.isNoSubstitutionTemplateLiteral(a0))) {
        ts.forEachChild(node, visit);
        return;
      }
      const obj = objectLiteralContainingProperty(node);
      const propStart = node.getStart(sf);
      const preambleOk = obj !== null && hasExemptionInPreamble(source, obj.getStart(sf), propStart);
      const lineOk = hasExemptionMarkerAbove(source, propStart, 5);
      if (!preambleOk && !lineOk) {
        const { line } = sf.getLineAndCharacterOfPosition(propStart);
        errs.push(
          `${rel}:${line + 1}: ${name}() duplicates all locales; add // ${EXEMPT_SAME_ACROSS_LOCALES} on the line above, same line, or after the opening brace of the surrounding object`,
        );
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sf);
  return errs;
}

const TRANSLATION_ROOTS: { name: string; root: unknown }[] = [
  { name: 'globalTranslations', root: globalTranslations },
  { name: 'homeTranslations', root: homeTranslations },
  { name: 'aboutTranslations', root: aboutTranslations },
  { name: 'messagesTranslations', root: messagesTranslations },
  { name: 'whyTranslations', root: whyTranslations },
  { name: 'donateTranslations', root: donateTranslations },
];

function isTranslationLeaf(obj: object): boolean {
  const keys = Object.keys(obj);
  if (keys.length === 0) return false;
  return keys.every((k) => LOCALE_SET.has(k));
}

function walkTranslations(bundleName: string, obj: unknown, p: string): string[] {
  const out: string[] = [];
  if (obj === null || typeof obj !== 'object') return out;
  if (Array.isArray(obj)) return out;
  if (isTranslationLeaf(obj)) {
    for (const loc of LOCALES) {
      const v = (obj as Record<string, unknown>)[loc];
      if (typeof v !== 'string') {
        out.push(`${bundleName}${p}: missing or non-string ${loc}`);
      }
    }
    return out;
  }
  for (const [k, v] of Object.entries(obj)) {
    out.push(...walkTranslations(bundleName, v, `${p}.${k}`));
  }
  return out;
}

function shouldSkipFile(source: string): boolean {
  const head = source.slice(0, 800);
  return /\bi18n-skip-file\b/.test(head);
}

function prevLineHasAllow(source: string, pos: number): boolean {
  const before = source.slice(0, pos);
  const lines = before.split('\n');
  if (lines.length < 2) return false;
  const prev = lines[lines.length - 2] ?? '';
  return prev.includes('i18n-allow');
}

function collectTsxFiles(dir: string, acc: string[]): void {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === '.next') continue;
      collectTsxFiles(full, acc);
    } else if (ent.isFile() && ent.name.endsWith('.tsx')) {
      acc.push(full);
    }
  }
}

function scanJsxFile(filePath: string): string[] {
  const rel = path.relative(process.cwd(), filePath);
  if (rel.includes('translations.tsx')) return [];
  const source = fs.readFileSync(filePath, 'utf8');
  if (shouldSkipFile(source)) return [];

  const errs: string[] = [];
  const sf = ts.createSourceFile(rel, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  const visit = (node: ts.Node): void => {
    if (ts.isJsxText(node)) {
      const t = node.getText(sf).replace(/\s+/g, ' ').trim();
      if (t.length === 0) return;
      if (!/[a-zA-Z]/.test(t)) return;
      if (prevLineHasAllow(source, node.getStart(sf))) return;
      const { line } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
      errs.push(`${rel}:${line + 1}: JSX text ${JSON.stringify(t.slice(0, 120))}`);
    }
    if (ts.isJsxAttribute(node) && node.initializer) {
      const name = node.name.getText(sf);
      if (!['alt', 'aria-label', 'placeholder', 'title'].includes(name)) {
        ts.forEachChild(node, visit);
        return;
      }
      let text: string | undefined;
      if (ts.isStringLiteral(node.initializer) || ts.isNoSubstitutionTemplateLiteral(node.initializer)) {
        text = node.initializer.text;
      } else if (ts.isJsxExpression(node.initializer) && node.initializer.expression && ts.isStringLiteralLike(node.initializer.expression)) {
        text = node.initializer.expression.text;
      }
      if (text && /[a-zA-Z]{3,}/.test(text) && !prevLineHasAllow(source, node.getStart(sf))) {
        const { line } = sf.getLineAndCharacterOfPosition(node.getStart(sf));
        errs.push(`${rel}:${line + 1}: ${name}=${JSON.stringify(text.slice(0, 120))}`);
      }
    }
    ts.forEachChild(node, visit);
  };

  visit(sf);
  return errs;
}

function main(): void {
  const tErrs: string[] = [];
  for (const { name, root } of TRANSLATION_ROOTS) {
    tErrs.push(...walkTranslations(name, root, ''));
  }

  const sectionKeys = new Set(Object.keys(aboutTranslations.teamSections));
  for (const g of TEAM_DATA.cities) {
    if (!sectionKeys.has(g.city)) {
      tErrs.push(`aboutTranslations.teamSections: missing key for TEAM_DATA city "${g.city}"`);
    }
  }

  const jsxFiles: string[] = [];
  collectTsxFiles(path.join(process.cwd(), 'app'), jsxFiles);
  collectTsxFiles(path.join(process.cwd(), 'components'), jsxFiles);
  const jsxErrs = jsxFiles.flatMap(scanJsxFile);

  const dupErrs: string[] = [];
  for (const rel of TRANSLATION_SOURCE_PATHS) {
    const abs = path.join(process.cwd(), rel);
    if (fs.existsSync(abs)) dupErrs.push(...scanTranslationSourceFile(abs));
  }

  const policyErrs: string[] = [];
  const asksPagePath = path.join(process.cwd(), 'app', '[lang]', 'asks', 'page.tsx');
  const asksTranslationsPath = path.join(process.cwd(), 'app', '[lang]', 'asks', 'translations.tsx');
  const asksPage = fs.readFileSync(asksPagePath, 'utf8');
  const asksTranslationsSrc = fs.readFileSync(asksTranslationsPath, 'utf8');
  if (asksPage.includes('asksContentEn')) {
    policyErrs.push('app/[lang]/asks/page.tsx: remove asksContentEn; use getAsksForLocale(locale) / asksByLocale');
  }
  if (asksTranslationsSrc.includes('asksContentEn')) {
    policyErrs.push('app/[lang]/asks/translations.tsx: remove asksContentEn; use asksByLocale per Locale');
  }

  if (tErrs.length) {
    console.error('Translation completeness:\n' + tErrs.join('\n'));
  }
  if (jsxErrs.length) {
    console.error('Inline JSX copy / attributes:\n' + jsxErrs.join('\n'));
  }
  if (dupErrs.length) {
    console.error('Same text across locales (or en/allLocales without exemption):\n' + dupErrs.join('\n'));
  }
  if (policyErrs.length) {
    console.error('Translation policy:\n' + policyErrs.join('\n'));
  }

  if (tErrs.length || jsxErrs.length || dupErrs.length || policyErrs.length) {
    process.exit(1);
  }
}

main();

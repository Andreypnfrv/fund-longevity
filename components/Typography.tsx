import type { ReactNode, CSSProperties } from 'react';
import React from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function H1({ children, className = '', style }: TypographyProps): React.ReactElement {
  return (
    <h1
      className={`font-baskerville text-4xl md:text-5xl lg:text-6xl font-bold ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className = '', style }: TypographyProps): React.ReactElement {
  return (
    <h2
      className={`font-baskerville text-3xl md:text-4xl lg:text-5xl font-bold ${className}`}
      style={style}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className = '', style }: TypographyProps): React.ReactElement {
  return (
    <h3
      className={`font-baskerville text-2xl md:text-3xl lg:text-4xl font-bold ${className}`}
      style={style}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className = '', style }: TypographyProps): React.ReactElement {
  return (
    <h4 className={`font-inter text-xl md:text-2xl lg:text-3xl font-semibold ${className}`} style={style}>
      {children}
    </h4>
  );
}

export function H5({ children, className = '', style }: TypographyProps): React.ReactElement {
  return (
    <h5 className={`font-inter text-lg md:text-xl lg:text-2xl font-semibold ${className}`} style={style}>
      {children}
    </h5>
  );
}

export function H6({ children, className = '', style }: TypographyProps): React.ReactElement {
  return (
    <h6 className={`font-inter text-base md:text-lg lg:text-xl font-semibold ${className}`} style={style}>
      {children}
    </h6>
  );
}

export function P({ children, className = '', style }: TypographyProps): React.ReactElement {
  return (
    <p className={`font-inter text-base leading-relaxed ${className}`} style={style}>
      {children}
    </p>
  );
}


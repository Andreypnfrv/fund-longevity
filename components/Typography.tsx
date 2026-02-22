import type { ReactNode, CSSProperties } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    display?: boolean;
}

export function H1({ children, className = '', style }: TypographyProps): React.ReactElement {
    return (
        <h1
            className={cn(
                `text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold`,
                className
            )}
            style={style}
        >
            {children}
        </h1>
    );
}

export function H2({ children, className = '', style }: TypographyProps): React.ReactElement {
    return (
        <h2
            className={cn(`text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4`, className)}
            style={{ marginBottom: '1rem', ...style }}
        >
            {children}
        </h2>
    );
}

export function H3({ children, className = '', style }: TypographyProps): React.ReactElement {
    return (
        <h3
            className={cn(`text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-snug`, className)}
            style={{ ...style }}
        >
            {children}
        </h3>
    );
}

export function H4({ children, className = '', style }: TypographyProps): React.ReactElement {
    return (
        <h4 className={`text-xl md:text-2xl lg:text-3xl xl:text-4xl ${className}`} style={style}>
            {children}
        </h4>
    );
}

export function H5({ children, className = '', style }: TypographyProps): React.ReactElement {
    return (
        <h5 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold ${className}`} style={style}>
            {children}
        </h5>
    );
}

export function H6({ children, className = '', style }: TypographyProps): React.ReactElement {
    return (
        <h6 className={`text-base md:text-lg lg:text-xl xl:text-2xl font-semibold ${className}`} style={style}>
            {children}
        </h6>
    );
}

export function P({ children, className = '', style }: TypographyProps): React.ReactElement {
    return (
        <p 
            className={cn('text-base md:text-lg leading-relaxed mb-4', className)} 
            style={{ marginBottom: '1rem', ...style }}
        >
            {children}
        </p>
    );
}


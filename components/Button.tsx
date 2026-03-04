import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { Size, Fill, buttonSizes } from '@/lib/theme';

const fillClasses: Record<Fill, string> = {
  [Fill.Main]: 'bg-black text-white hover:bg-gray-800',
  [Fill.Secondary]: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  [Fill.Outline]: 'border-2 border-black text-black hover:bg-gray-50',
  [Fill.Ghost]: 'bg-transparent text-gray-700 hover:text-black transition-colors duration-200 ease-in-out',
  [Fill.Blue]: 'bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]/90 hover:shadow-lg transition-all duration-200',
  [Fill.Violet]: 'bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]/90 hover:shadow-lg transition-all duration-200',
  [Fill.Green]: 'bg-[#1e3a5f] text-white hover:bg-[#1e3a5f]/90 hover:shadow-lg transition-all duration-200',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fill?: Fill;
  size?: Size;
  className?: string;
  rightIcon?: string;
}

export function Button({
  children,
  fill = Fill.Main,
  size = Size.MD,
  className = '',
  rightIcon,
  style,
  ...props
}: ButtonProps): React.ReactElement {
  const sizeConfig = buttonSizes[size];
  
  const isColorFill = fill === Fill.Blue || fill === Fill.Violet || fill === Fill.Green;
  
  const baseStyle = {
    paddingLeft: sizeConfig.paddingX,
    paddingRight: sizeConfig.paddingX,
    paddingTop: sizeConfig.paddingY,
    paddingBottom: sizeConfig.paddingY,
    height: sizeConfig.height,
    fontSize: sizeConfig.fontSize,
    ...(isColorFill && {
      boxShadow: '0 4px 6px rgba(30, 58, 95, 0.3)',
    }),
  };
  
  return (
    <button
      className={cn(
        'rounded-lg font-semibold transition-all duration-200 ease-in-out flex items-center justify-center cursor-pointer gap-2',
        isColorFill ? 'hover:scale-105' : '',
        fillClasses[fill],
        className
      )}
      style={{
        ...baseStyle,
        ...(style || {}),
      }}
      {...props}
    >
      {children}
      {rightIcon && <Icon icon={rightIcon} width={sizeConfig.fontSize} height={sizeConfig.fontSize} />}
    </button>
  );
}


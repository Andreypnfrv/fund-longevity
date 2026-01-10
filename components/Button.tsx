import React, { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';
import { Size, Fill, buttonSizes } from '@/lib/theme';

const fillClasses: Record<Fill, string> = {
  [Fill.Main]: 'bg-blue-600 text-white hover:bg-blue-700',
  [Fill.Secondary]: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  [Fill.Outline]: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  [Fill.Ghost]: 'bg-transparent text-gray-700 hover:text-blue-600 transition-colors duration-200 ease-in-out',
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
  ...props
}: ButtonProps): React.ReactElement {
  const sizeConfig = buttonSizes[size];
  
  return (
    <button
      className={cn('rounded-md font-medium transition-all duration-200 ease-in-out flex items-center justify-center cursor-pointer gap-2', fillClasses[fill], className)}
      style={{
        paddingLeft: sizeConfig.paddingX,
        paddingRight: sizeConfig.paddingX,
        paddingTop: sizeConfig.paddingY,
        paddingBottom: sizeConfig.paddingY,
        height: sizeConfig.height,
        fontSize: sizeConfig.fontSize,
      }}
      {...props}
    >
      {children}
      {rightIcon && <Icon icon={rightIcon} width={sizeConfig.fontSize} height={sizeConfig.fontSize} />}
    </button>
  );
}


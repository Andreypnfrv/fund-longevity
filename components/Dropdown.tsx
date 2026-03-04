'use client';

import React, { type ReactNode, useState } from 'react';
import { Popover } from './Popover';

interface DropdownItem {
  label: ReactNode;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  contentClassName?: string;
  triggerWrapperClassName?: string;
}

export function Dropdown({
  trigger,
  items,
  placement = 'bottom-start',
  contentClassName = '',
  triggerWrapperClassName = '',
}: DropdownProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item: DropdownItem): void => {
    item.onClick();
    setIsOpen(false);
  };

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <div className={triggerWrapperClassName} onClick={() => setIsOpen(!isOpen)}>
          {trigger}
        </div>
      }
      placement={placement}
      className={contentClassName}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px] overflow-hidden">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleItemClick(item)}
            className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
              item.isActive ? 'bg-[#1e3a5f]/10' : ''
            } ${item.className || ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </Popover>
  );
}


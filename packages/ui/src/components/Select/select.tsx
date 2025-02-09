'use client';

import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface JoinSelectProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string; // name 추가
  mainColor?: string;
  hoverColor?: string;
  className?: string;
}

export default function Select({
  options,
  defaultValue,
  onChange,
  name,
  mainColor = 'yellow-300',
  hoverColor = 'yellow-100',
  className = '',
}: JoinSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === defaultValue) || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="custom-select-label"
        className={`relative w-full bg-white border border-gray-300 shadow-sm pl-3 pr-10 py-2 text-left cursor-default 
          focus:outline-none focus:ring-1 focus:ring-${mainColor} focus:border-${mainColor} sm:text-sm rounded-xl ${className}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        <span className="block truncate text-lg">
          {selectedOption ? selectedOption.label : '선택하세요'}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          tabIndex={-1}
          role="listbox"
          aria-labelledby="custom-select-label"
          aria-activedescendant={
            selectedOption ? selectedOption.value : undefined
          }
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`${
                selectedOption?.value === option.value
                  ? `text-white bg-${mainColor}`
                  : 'text-gray-900'
              } cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-${hoverColor} hover:bg-[#DFEBFF] hover:text-gray-900`}
              id={option.value}
              role="option"
              aria-selected={selectedOption?.value === option.value}
              onClick={() => handleSelect(option)}
            >
              <span
                className={`block truncate text-lg ${
                  selectedOption?.value === option.value
                    ? 'font-semibold'
                    : 'font-normal'
                }`}
              >
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
      {name && selectedOption && (
        <input type="hidden" name={name} value={selectedOption.value} />
      )}
    </div>
  );
}

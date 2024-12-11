import { RadioButtonProps } from '@repo/ui/types/components/RadioButtonType.ts';
import React from 'react';

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  name,
  selectedValue,
  onChange,
  classname = '',
}) => {
  const selectedColor = '#F8D448';
  const defaultColor = '#e5e7eb';

  return (
    <fieldset className={`flex gap-2 ${classname}`}>
      {options.map((option, index) => (
        <label
          key={index}
          className="inline-flex items-center justify-center px-2 py-1.5  rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50 max-w-[154px]"
          onClick={() => onChange(option.value)}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden text-sm"
          />
          <div className="flex items-center gap-2">
            <div
              className="w-3.5 h-3.5 rounded"
              style={{
                backgroundColor:
                  selectedValue === option.value ? selectedColor : defaultColor,
              }}
            />
            <span className="text-[#898989] font-semibold text-lg">
              {option.label}
            </span>
          </div>
        </label>
      ))}
    </fieldset>
  );
};

export default RadioButton;

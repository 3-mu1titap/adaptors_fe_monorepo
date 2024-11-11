import React from 'react';

interface Option {
  label: string;
  value: string | number;
}

interface CheckboxButtonProps {
  options: Option[];
  name: string;
  selectedValues: (string | number)[];
  onChange: (values: (string | number)[]) => void;
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({
  options,
  name,
  selectedValues,
  onChange,
}) => {
  const selectedColor = '#F8D448';
  const defaultColor = '#e5e7eb';

  // Checkbox 상태 변경 처리 (최대 5개만 선택되도록 제한)
  const handleCheckboxChange = (value: string | number) => {
    let newSelectedValues;

    if (selectedValues.includes(value)) {
      // 이미 선택된 항목을 해제
      newSelectedValues = selectedValues.filter((v) => v !== value);
    } else {
      // 새로운 항목을 추가 (최대 5개 제한)
      if (selectedValues.length < 5) {
        newSelectedValues = [...selectedValues, value];
      } else {
        newSelectedValues = [...selectedValues];
      }
    }

    onChange(newSelectedValues); // 상태 업데이트
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-5">
      {options.map((option, index) => (
        <label
          key={index}
          className="flex items-center justify-center p-2 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
            className="hidden text-sm"
          />
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{
                backgroundColor: selectedValues.includes(option.value)
                  ? selectedColor
                  : defaultColor,
              }}
            />
            <span className="text-[#898989] font-semibold text-md">
              {option.label}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default CheckboxButton;

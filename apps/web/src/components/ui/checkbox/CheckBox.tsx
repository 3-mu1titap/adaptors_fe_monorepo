import React from 'react';
import { Tag } from '../../../actions/profile/hashtagData';

interface CheckboxButtonProps {
  options: Tag[];
  name: string;
  selectedValues: number[];
  onChange: (values: number[]) => void;
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({
  options,
  name,
  selectedValues,
  onChange,
}) => {
  const selectedColor = '#F8D448';
  const defaultColor = '#e5e7eb';

  const handleCheckboxChange = (value: number) => {
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
    <div className="flex flex-wrap gap-4">
      {options?.map((option) => (
        <label
          key={option?.hashtagId} // hashtagId를 key로 사용
          className="flex items-center justify-start p-2 rounded-xl border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <input
            type="checkbox"
            name={name}
            value={option.hashtagId} // value를 hashtagId로 설정
            checked={selectedValues.includes(option.hashtagId)} // selectedValues 배열에서 해당 값이 있는지 확인
            onChange={() => handleCheckboxChange(option.hashtagId)} // checkbox 클릭 시 처리
            className="hidden text-sm"
          />
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{
                backgroundColor: selectedValues.includes(option.hashtagId)
                  ? selectedColor
                  : defaultColor,
              }}
            />
            <span className="text-[#898989] font-semibold text-md">
              {option.name} {/* name을 label로 표시 */}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default CheckboxButton;

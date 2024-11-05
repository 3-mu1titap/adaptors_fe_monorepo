import { useState } from 'react';
import { SignInInputType } from '../../types/auth/authType';

export default function JoinInput({
  signInInput,
}: {
  signInInput: SignInInputType & {
    disabled?: boolean;
    required?: boolean;
    verify?: string;
    onClickVerifyButton?: () => void;
  };
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <span className="w-full items-center">
      <label className="mt-5 mb-2">{signInInput.text}</label>
      <div className="flex gap-3 items-center">
        <div
          className={`border-[1px] ${isFocused ? ' border-black' : ''} px-3 py-1 w-[100%] my-2 relative`}
        >
          <input
            type={signInInput.name}
            required={signInInput.required !== false}
            autoComplete="off"
            value={signInInput.value}
            name={signInInput.name}
            onChange={(e) => signInInput.setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={signInInput.disabled || false}
            className="focus:outline-none w-full pr-5 min-h-[35px]"
          />
          {signInInput.value && (
            <button
              type="button"
              onClick={signInInput.clearValue}
              className="absolute right-3 h-full top-0"
              tabIndex={-1}
            >
              &times;
            </button>
          )}
        </div>
        {signInInput.verify && (
          <button
            onClick={signInInput.onClickVerifyButton}
            className="min-w-[100px] border-[1px] border-[#F6D84C] px-1 py-2 bg-[#F6D84C] text-[#373A3A]"
          >
            {signInInput.verify}
          </button>
        )}
      </div>
    </span>
  );
}

import { useState } from 'react';
import { SignInInputType } from '../../types/auth/authType';

export default function JoinInput({
  signInInput,
}: {
  signInInput: SignInInputType & { disabled?: boolean; required?: boolean };
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <span className="relative w-full mb-4 items-center">
      <label className="my-2">{signInInput.text}</label>
      <div
        className={`border-[1px] ${isFocused ? ' border-black' : ''} px-3 py-1 w-full my-2 relative`}
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
    </span>
  );
}

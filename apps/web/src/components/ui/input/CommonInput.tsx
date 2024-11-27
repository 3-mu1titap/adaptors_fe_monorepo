import * as React from 'react';
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`
          w-full px-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:text-md
          ${className}
        `}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
export { Input };

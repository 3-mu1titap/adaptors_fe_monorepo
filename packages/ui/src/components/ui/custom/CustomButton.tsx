import React from 'react';
import { Button } from '../button';

function CustomButton({
  text,
  className,
  icon,
  onClick,
}: {
  text: string;
  className?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}) {
  return (
    <Button className={`${className}`} onClick={onClick}>
      {icon ? icon : null} {text}
    </Button>
  );
}

export default CustomButton;

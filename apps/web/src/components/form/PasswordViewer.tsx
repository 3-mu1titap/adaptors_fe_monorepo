import { Eye, EyeOff } from 'lucide-react';
export default function PasswordViewer({
  isTrue,
  onClick,
}: {
  isTrue: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-black"
      onClick={onClick}
    >
      {isTrue ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </button>
  );
}

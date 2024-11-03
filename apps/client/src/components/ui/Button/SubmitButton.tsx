interface LoginButtonProps {
  title: string;
  // handleButton: () => void;
}

export default function SubmitButton({ title }: LoginButtonProps) {
  return (
    <button
      type="submit"
      className="w-full my-6 bg-zinc-700 h-14 text-white rounded-lg font-bold"
    >
      {title}
    </button>
  );
}

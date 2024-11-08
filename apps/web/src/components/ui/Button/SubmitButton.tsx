interface LoginButtonProps {
  title: string;
  // handleButton: () => void;
}

export default function SubmitButton({ title }: LoginButtonProps) {
  return (
    <button
      type="submit"
      className="px-8 py-1 bg-zinc-700 text-adaptorsYellow rounded-lg font-bold"
    >
      {title}
    </button>
  );
}

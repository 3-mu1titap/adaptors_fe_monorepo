export default function ErrorToast({
  errorMessage,
  errorName,
}: {
  errorMessage: string;
  errorName: string;
}) {
  return (
    <p
      className={`absolute bg-rose-400 py-1 px-2 rounded-md z-20 text-white text-sm opacity-70 w-fit top-[-30%] left-[-5px] ${
        errorMessage ? 'visible' : 'invisible'
      }`}
    >
      {errorMessage}
      <span
        className={`absolute w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-rose-400 top-full left-3`}
      ></span>
    </p>
  );
}

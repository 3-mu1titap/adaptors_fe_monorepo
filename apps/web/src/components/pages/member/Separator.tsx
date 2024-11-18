export default function Separator() {
  return (
    <div className="relative flex items-center justify-center text-sm">
      <hr className="absolute left-0  top-0 border-t border-gray-300 w-[45%]" />
      <span className="relative top-[-7px] px-2 text-gray-500">or</span>
      <hr className="absolute right-0 top-0 border-t border-gray-300 w-[45%]" />
    </div>
  );
}

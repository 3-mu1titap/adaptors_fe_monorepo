export default function Separator() {
  return (
    <div className="relative flex items-center justify-center text-sm">
      <hr className="absolute inset-0 border-t border-gray-300" />
      <span className="relative top-[-7px] px-2 bg-white text-gray-500">
        or
      </span>
    </div>
  );
}

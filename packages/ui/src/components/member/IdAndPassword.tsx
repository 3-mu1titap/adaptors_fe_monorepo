import Link from 'next/link';
function IdAndPassword() {
  return (
    <div className="flex justify-between items-center py-2 px-1">
      <Link
        href="https://www.adaptors.site/findId"
        className="text-md text-gray-600 hover:underline"
      >
        아이디 찾기
      </Link>
      <Link
        href="https://www.adaptors.site/findPassword"
        className="text-md text-gray-600 hover:underline"
      >
        패스워드가 기억이 나지 않나요?
      </Link>
    </div>
  );
}
export default IdAndPassword;

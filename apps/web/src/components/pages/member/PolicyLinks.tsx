import Link from 'next/link';

export default function PolicyLinks() {
  return (
    <div className=" text-sm text-[#898989]">
      <Link href="/privacy" className="hover:underline text-[#666666]">
        개인정보 처리방침
      </Link>
      {' and '}
      <Link href="/terms" className="hover:underline text-[#666666]">
        서비스 이용약관
      </Link>
    </div>
  );
}

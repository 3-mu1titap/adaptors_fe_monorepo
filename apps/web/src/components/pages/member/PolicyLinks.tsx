import Link from 'next/link';

export default function PolicyLinks() {
  return (
    <div className="text-center text-sm text-gray-600">
      <Link href="/privacy" className="hover:underline">
        개인정보 처리방침
      </Link>
      {' and '}
      <Link href="/terms" className="hover:underline">
        서비스 이용약관
      </Link>
    </div>
  );
}

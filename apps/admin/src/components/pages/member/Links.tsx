import Link from 'next/link';

export default function Links({ currentPage }: { currentPage: string }) {
  const links = [
    { href: '/join', label: '회원가입' },
    { href: '/findId', label: '아이디 찾기' },
    { href: '/findPassword', label: '비밀번호 찾기' },
    { href: '/login', label: '로그인' },
  ];

  return (
    <div className="flex mt-5 justify-center">
      {links.map(
        (link, index) =>
          currentPage !== link.href && (
            <span key={link.href}>
              <Link href={link.href}>{link.label}</Link>
              {index <= links.length - 2 && <span className="mx-3">|</span>}
            </span>
          )
      )}
    </div>
  );
}

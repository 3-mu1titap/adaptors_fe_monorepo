import Link from 'next/link';

export default function Links({ currentPage }: { currentPage: string }) {
  const links = [
    { href: '/join', label: 'Join' },
    { href: '/findId', label: 'Find Id' },
    { href: '/findPassword', label: 'Find Password' },
    { href: '/login', label: 'Login' },
  ];

  return (
    <div className="flex mt-5 justify-end">
      {links.map(
        (link, index) =>
          currentPage !== link.href && (
            <span key={link.href}>
              <Link href={link.href} className="text-sm">
                {link.label}
              </Link>
              {index <= links.length - 2 && (
                <span className="mx-3 text-xs">|</span>
              )}
            </span>
          )
      )}
    </div>
  );
}

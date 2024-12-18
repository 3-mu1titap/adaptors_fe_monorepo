'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error('An unexpected error occurred:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1>500 - 서버 에러가 발생했습니다.</h1>
          <p>문제가 지속되면 관리자에게 문의해주세요.</p>
          <button
            onClick={() => router.push('/login')}
            style={{ marginTop: '20px' }}
          >
            홈으로
          </button>
        </div>
      </body>
    </html>
  );
}

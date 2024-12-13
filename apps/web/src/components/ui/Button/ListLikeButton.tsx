'use client';

import { getIsLiked } from '@repo/web/actions/Like/like';
import { useSession } from '@repo/web/app/context/SessionContext';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ListLikeButton({
  mentoringUuid,
  className = '',
}: {
  mentoringUuid: string;
  className?: string;
}) {
  const [isLiked, setIsLiked] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchIsLike = async () => {
      const data = await getIsLiked(mentoringUuid);
      setIsLiked(data);
    };
    fetchIsLike();
  }, [mentoringUuid]);

  const handleLikeButton = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (!session.isAuth) {
      router.push('/login'); // 로그인 페이지로 이동
      return;
    }
  };
  return (
    <Heart
      onClick={handleLikeButton}
      color="#C4C4C4"
      fill={isLiked ? 'red' : 'none'}
      className={`z-20 cursor-pointer transition-transform duration-200 ${
        isLiked ? 'scale-110' : 'scale-100'
      } ${className}`}
      stroke={!isLiked ? 'currentColor' : 'none'}
      width={16}
      height={16}
    />
  );
}

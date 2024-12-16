'use client';
import { createContext, useContext } from 'react';

interface SessionContextType {
  isAuth: boolean;
  role: string | null;
  profileImageUrl: string;
}

const initialSessionContext: SessionContextType = {
  isAuth: false,
  role: 'mentee',
  profileImageUrl:
    'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734245082473-Frame-3.png',
};
export const SessionContext = createContext<SessionContextType>(
  initialSessionContext
);

export const useSession = () => useContext(SessionContext);

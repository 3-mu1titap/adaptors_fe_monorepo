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
    'https://adaptors-bucket.s3.ap-northeast-2.amazonaws.com/mentoring/1734245033484-Frame-1.png',
};
export const SessionContext = createContext<SessionContextType>(
  initialSessionContext
);

export const useSession = () => useContext(SessionContext);

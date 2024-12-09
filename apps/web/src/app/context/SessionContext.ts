'use client';
import { createContext, useContext } from 'react';

interface SessionContextType {
  isAuth: boolean;
  role: string;
}
const initialSessionContext: SessionContextType = {
  isAuth: false,
  role: 'mentee',
};
export const SessionContext = createContext<SessionContextType>(
  initialSessionContext
);

export const useSession = () => useContext(SessionContext);

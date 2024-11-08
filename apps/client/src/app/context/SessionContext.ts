'use client';
import { createContext, useContext } from 'react';

interface SessionContextType {
  isAuth: boolean;
  role: string | null;
}

export const SessionContext = createContext<SessionContextType | null>(null);

export const useSession = () => useContext(SessionContext);

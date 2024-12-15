'use client';

import { SessionContext } from '../context/SessionContext';

export const AuthContextProvider = ({
  isAuth,
  children,
  role,
  profileImageUrl,
}: {
  isAuth: boolean;
  children: React.ReactNode;
  role: string;
  profileImageUrl: string;
}) => {
  return (
    <SessionContext.Provider value={{ isAuth, role, profileImageUrl }}>
      {children}
    </SessionContext.Provider>
  );
};

export default AuthContextProvider;

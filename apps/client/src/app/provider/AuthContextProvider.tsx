'use client';

import { SessionContext } from '../context/SessionContext';

export const AuthContextProvider = ({
  isAuth,
  children,
  role,
}: {
  isAuth: boolean;
  children: React.ReactNode;
  role: string;
}) => {
  return (
    <SessionContext.Provider value={{ isAuth, role }}>
      {children}
    </SessionContext.Provider>
  );
};

export default AuthContextProvider;

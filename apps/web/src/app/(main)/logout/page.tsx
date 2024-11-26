'use client';
import { signOut } from 'next-auth/react';

export default function Page() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };

  return <button onClick={handleLogout}>Logout</button>;
}

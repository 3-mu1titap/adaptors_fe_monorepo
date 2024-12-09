'use client';
import { DropdownMenuItem } from '@repo/ui/components/ui/dropdown';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export default function HeaderLogoutButton() {
  return (
    <>
      <DropdownMenuItem onClick={() => signOut()}>
        <LogOut />
        <span>logout</span>
      </DropdownMenuItem>
    </>
  );
}

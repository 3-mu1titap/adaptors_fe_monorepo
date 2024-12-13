'use client';

import { Button } from '@repo/ui/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@repo/ui/components/ui/drawer';
import { Input } from '@repo/ui/components/ui/input';
import { DialogFooter } from '@repo/ui/components/ui/dialog';
import { useState } from 'react';
import Link from 'next/link';

export function SearchDrawer({
  isOpen,
  openCloser,
}: {
  isOpen: boolean;
  openCloser: () => void;
}) {
  const [name, setSearchName] = useState('');
  return (
    <Drawer open={isOpen} onOpenChange={openCloser} direction="top">
      <DrawerContent className="border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-md text-black font-bold">
              search
            </DrawerTitle>
            <DrawerDescription className="text-lg text-black">
              원하시는 멘토링을 검색해주세요!
            </DrawerDescription>
          </DrawerHeader>

          <div className="mt-4">
            <Input
              id="Search"
              type="text"
              placeholder="Search here...."
              onChange={(text) => setSearchName(text.target.value.trim())}
              className="text-xl"
            ></Input>
          </div>

          <DialogFooter className="flex mt-4 ml-40 py-4">
            <Link href={`/search/${encodeURIComponent(name)}`}>
              <Button
                className="bg-yellow-200 hover:bg-black hover:text-white self-center"
                type="submit"
              >
                Save changes
              </Button>
            </Link>
          </DialogFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

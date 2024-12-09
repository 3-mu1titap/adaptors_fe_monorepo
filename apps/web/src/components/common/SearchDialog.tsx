'use client';
import { Button } from '@repo/ui/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/ui/dialog';
import { useState, useEffect } from 'react';
import { Input } from '@repo/ui/components/ui/input';
import Link from 'next/link';
export function SearchDialog({
  isOpen,
  openCloser,
}: {
  isOpen: boolean;
  openCloser: () => void;
}) {
  const [name, setSearchName] = useState('');
  return (
    <Dialog open={isOpen} onOpenChange={openCloser}>
      <DialogContent className="md:max-w-[800px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Search Mentoring</DialogTitle>
          <DialogDescription>Search Mentoring here!</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Input
            id="Search"
            type="text"
            placeholder="Search here...."
            onChange={(text) => setSearchName(text.target.value.trim())}
            className="text-2xl"
          ></Input>
        </div>

        <DialogFooter>
          <Link href={`/search/${encodeURIComponent(name)}`}>
            <Button
              className="bg-yellow-200 hover:bg-black hover:text-white"
              type="submit"
            >
              Save changes
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

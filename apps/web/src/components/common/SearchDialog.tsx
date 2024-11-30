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
import { Label } from '@repo/ui/components/ui/label';
import { MentorMentoringListDataType } from '@components/types/mentor/mentorType';
import { GetMentoringNameSearch } from 'src/actions/mentoring/mentoringAction';
export function SearchDialog({
  isOpen,
  openCloser,
}: {
  isOpen: boolean;
  openCloser: () => void;
}) {
  const [SearchText, setSearchText] = useState('');
  const onClickTextSave = () => {
    console.log(SearchText, 'text text text 12412414');
  };
  useEffect(() => {
    const SearchMentoringData = async () => {
      try {
        const data = await GetMentoringNameSearch(SearchText);
        console.log(data, 'seach data');
      } catch (error) {
        console.error('No Search Mentoring', error);
      }
    };

    SearchMentoringData();
  }, [SearchText]);
  return (
    <Dialog open={isOpen} onOpenChange={openCloser}>
      <DialogContent className="md:max-w-[800px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Input
            id="Search"
            type="text"
            placeholder="Search here...."
            onChange={(text) => setSearchText(text.target.value)}
            className="text-2xl"
          ></Input>
        </div>

        <DialogFooter>
          <Button
            className="bg-yellow-200 hover:bg-black hover:text-white"
            type="submit"
            onClick={() => onClickTextSave()}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

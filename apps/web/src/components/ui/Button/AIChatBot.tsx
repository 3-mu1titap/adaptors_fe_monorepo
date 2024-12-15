'use client';
import CustomToolTip from '@repo/ui/components/ui/custom/CustomToolTip';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/ui/dialog';
import '@repo/ui/styles.css';
import { Bot } from 'lucide-react';
import { useEffect, useState } from 'react';
import AIFeedbackFunnel from '../../pages/AI-feedback/AIFeedbackFunnel';

function AIChatBot() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // URL에서 ?path 이후를 제거하는 함수
  const removeQueryParams = () => {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('?')[0];
    window.history.replaceState({}, '', baseUrl);
  };

  useEffect(() => {
    if (!isDialogOpen) {
      removeQueryParams();
    }
  }, [isDialogOpen]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <button className={`chatBot-Btn`}>
          <CustomToolTip text="AI">
            <Bot size={24} strokeWidth={1.5} color="black" className="w-full" />
          </CustomToolTip>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle className="text-[1.15rem]">AI 피드백</DialogTitle>
          <DialogDescription>
            AI can make mistakes. Please double-check responses.
          </DialogDescription>
        </DialogHeader>
        <AIFeedbackFunnel />
      </DialogContent>
    </Dialog>
  );
}

export default AIChatBot;

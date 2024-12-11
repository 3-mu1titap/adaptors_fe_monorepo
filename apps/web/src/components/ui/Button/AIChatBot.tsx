// 'use client';
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from '@repo/ui/components/ui/dialog';
// import '@repo/ui/styles.css';
// import { Bot } from 'lucide-react';
// import { useState } from 'react';
// import AIFeedbackFunnel from '../../pages/AI-feedback/AIFeedbackFunnel';

// function AIChatBot() {
//   const handleTopToScroll = () => {};
//   const [job, setJob] = useState<string>('');
//   const handleJobChange = (value: string) => {
//     setJob(value);
//   };
//   const [selectedCateogory, setSelectedCateogory] = useState<string>('');
//   const handleCategoryChange = (value: string) => {
//     setSelectedCateogory(value);
//   };
//   const removeQueryParams = () => {
//     const currentUrl = window.location.href;
//     const baseUrl = currentUrl.split('?')[0]; // '?' 이전 부분만 가져옴
//     window.history.replaceState({}, '', baseUrl); // URL을 변경하지만 페이지를 리로드하지 않음
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button onClick={handleTopToScroll} className={`chatBot-Btn`}>
//           <Bot size={24} strokeWidth={1.5} color="black" className="w-full" />
//         </button>
//         {/* <button className="fixed bottom-5 right-10">버튼</button> */}
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] mobile:min-h-[430px]">
//         <DialogHeader>
//           <DialogTitle className="text-[1.15rem]">AI 피드백</DialogTitle>
//           <DialogDescription>
//             AI can make mistakes. Please double-check responses.
//           </DialogDescription>
//           <DialogClose
//             onClick={() => {
//               console.log('닫기 버튼 클릭됨');
//               removeQueryParams(); // 다이얼로그가 닫힐 때 URL 수정
//             }}
//           />
//         </DialogHeader>
//         <AIFeedbackFunnel />
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default AIChatBot;
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
      <DialogContent className="sm:max-w-[425px]">
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

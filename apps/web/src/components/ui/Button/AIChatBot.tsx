'use client';
import '@repo/ui/styles.css';
import { useState } from 'react';

function AIChatBot() {
  const [isView, setIsView] = useState(true);
  const handleTopToScroll = () => {};

  return (
    <div>
      {/* <button
        onClick={setIsView((prev) => !prev)}
        className={`
          flex items-center justify-center scroll-btn
        go-Up-view bottom-[3.5rem]
        `}
      >
        <Bot size={24} strokeWidth={1.5} color="black" />
      </button>
      <dialog></dialog> */}
    </div>
  );
}

export default AIChatBot;

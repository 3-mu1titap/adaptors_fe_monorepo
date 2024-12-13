import { RefObject } from 'react';
import ChatViewMessage from './ChatViewMessage';
import { chatDataType } from '@repo/admin/components/types/main/chatting/chattingTypes';

function ChatView({
  handleDrop,
  messages,
  messagesEndRef,
  handleScroll,
  user,
}: {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  messages: chatDataType[];
  messagesEndRef: RefObject<HTMLDivElement>;
  handleScroll: (e: React.UIEvent<HTMLDivElement>) => void;
  user: any;
}) {
  return (
    <div
      className="flex-grow p-2 overflow-y-auto text-sm"
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={handleDrop}
      onScroll={handleScroll}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-1 flex gap-x-1 ${message.messageType === 'NOTICE' ? 'justify-center' : message.memberUuid === user.uuid ? 'justify-end' : 'justify-start'}`}
        >
          <ChatViewMessage message={message} user={user} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatView;

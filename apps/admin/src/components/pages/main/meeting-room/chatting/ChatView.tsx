import { RefObject } from 'react';
import { ChatMessage } from './Chatting';

function ChatView({
  handleDrop,
  messages,
  messagesEndRef,
}: {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  messages: ChatMessage[];
  messagesEndRef: RefObject<HTMLDivElement>;
}) {
  return (
    <div
      className="flex-grow p-2 overflow-y-auto text-sm"
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 text-sm ${message.senderId === 'currentUser' ? 'text-right' : 'text-left'}`}
        >
          <div
            className={`inline-block py-[2px] px-2 rounded-full ${message.senderId === 'currentUser' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {message.message}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatView;

import { RefObject } from 'react';
import { chatDataType } from '../../../types/main/chatting/chattingTypes';
import useUserStore from '../../../../store/memberUuidStore';
import ChatViewMessage from './ChatViewMessage';

function ChatView({
  handleDrop,
  messages,
  messagesEndRef,
}: {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  messages: chatDataType[];
  messagesEndRef: RefObject<HTMLDivElement>;
}) {
  const { memberUuid } = useUserStore();
  return (
    <div
      className="flex-grow p-2 overflow-y-auto text-sm"
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 flex ${message.messageType === 'NOTICE' ? 'justify-center' : message.memberUuid === memberUuid ? 'justify-end' : 'justify-start'}`}
        >
          <ChatViewMessage message={message} />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatView;

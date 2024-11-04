import { RefObject } from 'react';
import { ChatMessage } from './Chatting';
import FitImage from '../../../ui/image/fit-image';

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
          className={`mb-2 flex ${message.messageType === 'notice' ? 'justify-center' : message.senderName === 'currentUser' ? 'justify-end' : 'justify-start'}`}
        >
          {message.messageType === 'notice' ? (
            <div
              className={`inline-block p-2 rounded-xl bg-gray-300 text-white`}
            >
              {message.message}
            </div>
          ) : (
            <>
              {message.senderName !== 'currentUser' && (
                <div className="flex-shrink-0 w-8 h-8 mr-2">
                  <FitImage
                    className="rounded-full border-4 border-[#F5F5F5]"
                    src={message.profile}
                    alt="Profile"
                  />
                </div>
              )}

              <div
                className={`flex flex-col ${message.senderName === 'currentUser' ? 'items-end' : 'items-start'}`}
              >
                {message.senderName !== 'currentUser' && (
                  <div
                    className={`text-xs ${message.senderName === 'currentUser' ? 'text-blue-500' : 'text-gray-600'}`}
                  >
                    {message.senderName}
                  </div>
                )}
                <div
                  className={`text-xs text-gray-500 order-1 ${message.senderName === 'currentUser' ? 'mr-auto' : 'ml-auto'}`}
                >
                  {message.time}
                </div>
                {message.messageType === 'file' ? (
                  <a
                    href={message.fileUrl}
                    download={message.message}
                    className={`inline-block py-[2px] px-2 mt-1 rounded-full border-2 border-dashed ${message.senderName === 'currentUser' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-300 text-gray-800 border-gray-300'}`}
                  >
                    📁 {message.message}
                  </a>
                ) : (
                  <div
                    style={{ whiteSpace: 'pre-wrap' }}
                    className={`inline-block p-2 rounded-xl ${message.senderName === 'currentUser' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'}`}
                  >
                    {message.message}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatView;

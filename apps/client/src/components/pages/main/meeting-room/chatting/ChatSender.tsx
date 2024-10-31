import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';
import ImageIcon from '../../../../assets/icons/FileIcon';
import FileIcon from '../../../../assets/icons/ImageIcon';
import SendIcon from '../../../../assets/icons/SendIcon';

function ChatSender({
  handleSendMessage,
  fileInputRef,
  imageInputRef,
  selectedFile,
  newMessage,
  setNewMessage,
  handleFileSelect,
  handleImageSelect,
}: {
  handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  fileInputRef: RefObject<HTMLInputElement>;
  imageInputRef: RefObject<HTMLInputElement>;
  selectedFile: File | null;
  newMessage: string;
  setNewMessage: Dispatch<SetStateAction<string>>;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      setNewMessage((prev) => prev + '\n');
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage(e as any);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  useEffect(() => {
    const textarea = document.getElementById(
      'message-textarea'
    ) as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [newMessage]);

  return (
    <>
      <form onSubmit={handleSendMessage} className="p-1 w-full bg-white">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => imageInputRef.current?.click()}
        >
          <ImageIcon size="20" color="#ACACAC" />
        </button>
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          <FileIcon size="20" color="#ACACAC" />
        </button>
        <div className="flex m-auto items-center text-sm rounded-xl bg-[#F5F5F5] text-[#8C8C8C]">
          {selectedFile ? (
            <div className="flex-grow p-1 ml-2">
              Selected file: {selectedFile.name}
            </div>
          ) : (
            <textarea
              id="message-textarea"
              placeholder="메시지를 입력하세요..."
              value={newMessage}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              className="flex-grow p-1 ml-2 bg-[#F5F5F5] border-none rounded-md focus:outline-none focus:ring-2 resize-none max-h-24"
              style={{ overflow: 'hidden' }}
              rows={1}
            />
          )}
          <button
            type="submit"
            className="p-2 rounded-xl hover:bg-white transition-colors"
          >
            <SendIcon color="#8C8C8C" />
          </button>
        </div>
      </form>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageSelect}
        className="hidden"
      />
      <input
        type="file"
        accept="*/*"
        ref={imageInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />
    </>
  );
}

export default ChatSender;

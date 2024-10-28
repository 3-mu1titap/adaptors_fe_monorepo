import { Dispatch, RefObject, SetStateAction } from 'react';
import ImageIcon from '../../../../assets/icons/ImageIcon';
import FileIcon from '../../../../assets/icons/FileIcon';
import SendIcon from '../../../../assets/icons/SendIcon';

function ChatSender({
  handleSendMessage,
  fileInputRef,
  selectedFile,
  newMessage,
  setNewMessage,
  handleFileSelect,
}: {
  handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
  fileInputRef: RefObject<HTMLInputElement>;
  selectedFile: File | null;
  newMessage: string;
  setNewMessage: Dispatch<SetStateAction<string>>;
  handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <form onSubmit={handleSendMessage} className="p-1 w-full bg-white">
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => fileInputRef.current?.click()}
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
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              value={newMessage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewMessage(e.target.value)
              }
              className="flex-grow p-1 ml-2 bg-[#F5F5F5] border-none rounded-md focus:outline-none focus:ring-2"
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
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
      />
    </>
  );
}

export default ChatSender;

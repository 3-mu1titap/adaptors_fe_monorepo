import { useEffect, useRef, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatSender from './ChatSender';
import ChatView from './ChatView';
import { participantType } from '../../../../types/main/meeting/meetingTypes';

export interface ChatRoomProps {
  rommId: string;
}

export interface ChatMessage {
  messageType: string;
  message: string;
  roomId: string;
  senderId: string;
  time: string;
}

function Chatting({ participants }: { participants: participantType[] }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      messageType: 'text',
      message: '안녕하세요!',
      roomId: 'room1',
      senderId: 'user1',
      time: '10:11',
    },
    {
      messageType: 'text',
      message: '채팅방에 오신 것을 환영합니다.',
      roomId: 'room1',
      senderId: 'user2',
      time: '10:22',
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (newMessage.trim() || selectedFile) {
      if (selectedFile) {
        const fileChatMessage: ChatMessage = {
          messageType: 'file',
          message: `File: ${selectedFile.name}`,
          roomId: 'room1',
          senderId: 'currentUser',
          time: currentTime,
        };
        setMessages([...messages, fileChatMessage]);
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }

      if (newMessage.trim()) {
        const textChatMessage: ChatMessage = {
          messageType: 'text',
          message: newMessage,
          roomId: 'room1',
          senderId: 'currentUser',
          time: currentTime,
        };
        setMessages([...messages, textChatMessage]);
      }

      setNewMessage('');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <ChatHeader participants={participants} />
      <ChatView
        handleDrop={handleDrop}
        messages={messages}
        messagesEndRef={messagesEndRef}
      />
      <ChatSender
        handleSendMessage={handleSendMessage}
        fileInputRef={fileInputRef}
        selectedFile={selectedFile}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleFileSelect={handleFileSelect}
      />
    </div>
  );
}

export default Chatting;

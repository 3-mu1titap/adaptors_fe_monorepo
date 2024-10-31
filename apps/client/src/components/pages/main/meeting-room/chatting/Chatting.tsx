import { useEffect, useRef, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatSender from './ChatSender';
import ChatView from './ChatView';
import { participantType } from '../../../../types/main/meeting/meetingTypes';

export interface ChatMessage {
  messageType: string;
  message: string;
  senderName: string;
  profile: string;
  time: string;
  fileUrl?: string;
}

function Chatting({ participants }: { participants: participantType[] }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      messageType: 'text',
      message: '안녕하세요!',
      senderName: 'user1',
      profile: '/assets/images/dummy.jpg',
      time: '오전 10:11',
    },
    {
      messageType: 'text',
      message: '채팅방에 오신 것을 환영합니다.',
      senderName: 'user2',
      profile: '/assets/images/dummy.jpg',
      time: '오전 10:22',
    },
  ]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

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
          messageType: 'notice',
          message: selectedFile.name,
          senderName: 'currentUser',
          profile: '/assets/images/dummy.jpg',
          time: currentTime,
          fileUrl: URL.createObjectURL(selectedFile),
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
          senderName: 'currentUser',
          profile: '/assets/images/dummy.jpg',
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

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      setSelectedFile(imageFile);
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
    <div className="flex flex-col w-full h-full">
      <ChatHeader participants={participants} />
      <ChatView
        handleDrop={handleDrop}
        messages={messages}
        messagesEndRef={messagesEndRef}
      />
      <ChatSender
        handleSendMessage={handleSendMessage}
        fileInputRef={fileInputRef}
        imageInputRef={imageInputRef}
        selectedFile={selectedFile}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleFileSelect={handleFileSelect}
        handleImageSelect={handleImageSelect}
      />
    </div>
  );
}

export default Chatting;

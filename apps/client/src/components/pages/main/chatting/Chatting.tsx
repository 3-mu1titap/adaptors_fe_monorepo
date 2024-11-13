'use client';

import { useEffect, useRef, useState } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import ChatHeader from './ChatHeader';
import ChatSender from './ChatSender';
import ChatView from './ChatView';
import { participantType } from '../../../types/main/meeting/meetingTypes';
import { chatDataType } from '../../../types/main/chatting/chattingTypes';
import { postChat } from '../../../../actions/chatting/chattingAction';

const mentoringSessionUuid = 'ac419217-cb98-4334-8b78-8126aa0e57aa';

function Chatting({ participants }: { participants: participantType[] }) {
  const [messages, setMessages] = useState<chatDataType[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newMessage.trim() || selectedFile) {
      if (selectedFile) {
        await postChat({
          message: selectedFile.name,
          messageType: 'MEDIA',
          mediaUrl: URL.createObjectURL(selectedFile),
        });
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }

      if (newMessage.trim()) {
        await postChat({
          message: newMessage,
          messageType: 'TEXT',
          mediaUrl: '',
        });
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

  useEffect(() => {
    // const chatServiceUrl = `http://3.35.228.51:8000/chat-service/api/v1/chat/real-time/${mentoringSessionUuid}`;
    const chatServiceUrl = `http://10.10.10.149:64496/api/v1/chat/real-time/${mentoringSessionUuid}`;
    console.log(`Connecting to: ${chatServiceUrl}`);

    const eventSource = new EventSourcePolyfill(chatServiceUrl, {
      heartbeatTimeout: 86400000,
    });

    eventSource.onopen = () => {
      console.log('SSE 연결이 성공적으로 열렸습니다.');
    };

    eventSource.onmessage = (event: any) => {
      const newMessage: chatDataType = JSON.parse(event.data);
      setMessages((prevData) => [...prevData, newMessage]);
    };

    eventSource.onerror = (error) => {
      console.error('EventSource 오류:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [mentoringSessionUuid]);

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

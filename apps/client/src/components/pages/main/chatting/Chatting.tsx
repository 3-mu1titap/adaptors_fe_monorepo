'use client';

import { useEffect, useRef, useState } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { participantType } from '@repo/client/components/types/main/meeting/meetingTypes';
import {
  chatDataType,
  prevChatResType,
} from '@repo/client/components/types/main/chatting/chattingTypes';
import {
  getChattingData,
  postChat,
} from '@repo/client/actions/chatting/chattingAction';
import {
  postExitMeeting,
  postHeartbeat,
} from '@repo/client/actions/meeting/meetingAction';
import ChatHeader from '@repo/client/components/header/ChatHeader';
import ChatView from './ChatView';
import ChatSender from './ChatSender';

const mentoringSessionUuid = 'ac419217-cb98-4334-8b78-8126aa0e57aa';

function Chatting({ participants }: { participants: participantType[] }) {
  const [messages, setMessages] = useState<chatDataType[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [getPrev, setGetPrev] = useState<boolean>(true);
  const [isNext, setIsNext] = useState<boolean>(true);
  const [prevMessagePage, setPrevMessagePage] = useState<number>(0);

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
    const chatServiceUrl = `http://43.200.249.170:8000/chat-service/api/v1/chat/real-time/${mentoringSessionUuid}`;

    const eventSource = new EventSourcePolyfill(chatServiceUrl, {
      heartbeatTimeout: 86400000,
    });

    const heartbeatInterval = setInterval(async () => {
      await postHeartbeat('ac419217-cb98-4334-8b78-8126aa0e57aa');
    }, 30000);

    eventSource.onopen = async () => {};

    const handleNewMessage = (event: any) => {
      setGetPrev(true);
      const newMessage: chatDataType = JSON.parse(event.data);
      setMessages((prevData) => [...prevData, newMessage]);
    };

    eventSource.onmessage = handleNewMessage;

    eventSource.onerror = (error) => {
      console.error('EventSource 오류:', error);
      postExitMeeting('ac419217-cb98-4334-8b78-8126aa0e57aa');
      eventSource.close();
    };

    return () => {
      clearInterval(heartbeatInterval);
      postExitMeeting('ac419217-cb98-4334-8b78-8126aa0e57aa');
      eventSource.close();
    };
  }, [mentoringSessionUuid]);

  const getMessageData = async (page: number) => {
    try {
      const prevMessages = (await getChattingData(page)) as prevChatResType;

      if (!prevMessages.hasNext) {
        setIsNext(false);
      }
      setPrevMessagePage((prev) => prev + 1);

      const reversedMessages = prevMessages.content.content.reverse();
      setMessages((prev) => [...reversedMessages, ...prev]);
    } catch (error) {
      console.error('메시지 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    setGetPrev(false);
    getMessageData(0);
  }, []);

  const scrollToBottom = () => {
    if (getPrev) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(scrollToBottom, [messages]);

  const handleScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target) {
      const { scrollTop } = target;
      if (scrollTop === 0 && isNext) {
        await getMessageData(prevMessagePage);
        target.scrollTop = 400;
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <ChatHeader participants={participants} />
      <ChatView
        handleDrop={handleDrop}
        messages={messages}
        messagesEndRef={messagesEndRef}
        handleScroll={handleScroll}
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

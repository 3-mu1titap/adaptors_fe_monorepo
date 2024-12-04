'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Chatting from '../../chatting/Chatting';
import ChatSidebar from '../../sidebar/ChatSidebar';
import { participantType } from '@repo/client/components/types/main/meeting/meetingTypes';
import { TimeType } from '@repo/client/components/types/main/mentor/mentoringTypes';

type Message = {
  id: string;
  content: string;
  timestamp: string;
  sender: string;
};

interface chatRequestDtoType {
  memberUuid: string;
  message: string;
  sentAt: string;
}

interface mentoringRequestDtoType {
  mentoringUuid: string;
  mentoringName: string;
  startDate: string;
  endDate: string;
  startTime: TimeType;
  endTime: TimeType;
}

interface userMessageDataType {
  id: string;
  chatRequestDto: chatRequestDtoType;
  mentoringRequestDto: mentoringRequestDtoType;
}

export default function Message({
  userMessageData,
}: {
  userMessageData: userMessageDataType[];
}) {
  const [participants, setParticipants] = useState<participantType[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="flex h-[90vh] bg-background">
      {/* Left Sidebar */}
      <ChatSidebar
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />

      {/* Right Content */}
      <div className="flex-1 flex flex-col px-4 py-1">
        {selectedChat ? (
          <Chatting
            participants={participants}
            mentoringSessionUuid={selectedChat}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No Chat Selected</h3>
              <p className="text-muted-foreground">
                Choose a conversation from the list to start chatting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

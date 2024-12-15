'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Chatting from '../../chatting/Chatting';
import ChatSidebar from '../../sidebar/ChatSidebar';
import { participantType } from '@repo/admin/components/types/main/meeting/meetingTypes';
import { userMessageCustomDataType } from '@repo/admin/components/types/main/chatting/chattingTypes';

export default function Message({
  userMessageData,
  user,
}: {
  userMessageData: userMessageCustomDataType[] | null;
  user: any;
}) {
  const [participants, setParticipants] = useState<participantType[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <div className="flex h-[79vh] bg-background">
      {/* Left Sidebar */}
      <ChatSidebar
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        userMessageData={userMessageData}
      />

      {/* Right Content */}
      <div className="flex-1 flex flex-col px-4 py-1">
        {selectedChat === null ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No Chat Selected</h3>
              <p className="text-muted-foreground">
                Choose a conversation from the list to start chatting
              </p>
            </div>
          </div>
        ) : (
          userMessageData?.map((chatData) => {
            if (selectedChat === chatData.id) {
              return (
                <Chatting
                  key={chatData.id}
                  user={user}
                  mentoringSessionUuid={chatData.id}
                />
              );
            }
            return null; // 일치하지 않는 경우 null 반환
          })
        )}
      </div>
    </div>
  );
}

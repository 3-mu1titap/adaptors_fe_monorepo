'use client';

import { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';
import { ScrollArea } from '@repo/ui/components/ui/scroll-area';
import {
  MessageCircle,
  Phone,
  Users,
  Bell,
  MoreVertical,
  Search,
  Smile,
  Paperclip,
  Send,
  ImageIcon,
  Settings,
} from 'lucide-react';
import { participantType } from '../../../../types/main/meeting/meetingTypes';
import Chatting from '../../chatting/Chatting';

// Types
type Chat = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isOnline: boolean;
};

type Message = {
  id: string;
  content: string;
  timestamp: string;
  sender: string;
};

export default function Message({
  participants,
}: {
  participants: participantType[];
}) {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  // Sample data
  const chats: Chat[] = [
    {
      id: '1',
      name: 'Nia Hillyer',
      avatar: '/placeholder.svg?height=40&width=40',
      lastMessage: 'How do you do?',
      timestamp: '2:09 PM',
      isOnline: true,
    },
    {
      id: '2',
      name: 'Sean Freeman',
      avatar: '/placeholder.svg?height=40&width=40',
      lastMessage: 'I was wondering...',
      timestamp: '12:09 PM',
      isOnline: false,
    },
    {
      id: '3',
      name: 'Alma Clarke',
      avatar: '/placeholder.svg?height=40&width=40',
      lastMessage: "I've forgotten how it felt before",
      timestamp: '1:44 PM',
      isOnline: true,
    },
  ];

  const messages: Message[] = [
    {
      id: '1',
      content: 'Hi, I am back from vacation',
      timestamp: '5h ago',
      sender: 'them',
    },
    {
      id: '2',
      content: 'How are you?',
      timestamp: '5h ago',
      sender: 'them',
    },
    {
      id: '3',
      content: 'Coffee?',
      timestamp: '5h ago',
      sender: 'them',
    },
  ];

  return (
    <div className="flex h-[90vh] bg-background">
      {/* Left Sidebar */}
      <div className="w-80 border-r flex flex-col">
        {/* Profile Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Profile"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">Alon Smith</h2>
                <p className="text-sm text-muted-foreground">
                  Software Developer
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input className="pl-8" placeholder="Searching..." />
          </div>
        </div>

        {/* Chat List */}
        <ScrollArea className="flex-1">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full flex items-center gap-3 p-4 hover:bg-accent transition-colors ${
                selectedChat === chat.id ? 'bg-accent' : ''
              }`}
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={chat.avatar} alt={chat.name} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                {chat.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div className="flex-1 text-left">
                <div className="flex justify-between">
                  <span className="font-medium">{chat.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {chat.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {chat.lastMessage}
                </p>
              </div>
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Right Content */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <Chatting participants={participants} />
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

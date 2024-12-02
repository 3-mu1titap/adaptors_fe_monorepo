import { MoreVertical, Search } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';
import { ScrollArea } from '@repo/ui/components/ui/scroll-area';
import { Dispatch, SetStateAction } from 'react';

// Types
type Chat = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
};

export default function ChatSidebar({
  selectedChat,
  setSelectedChat,
}: {
  selectedChat: string | null;
  setSelectedChat: Dispatch<SetStateAction<string | null>>;
}) {
  // Sample data
  const chats: Chat[] = [
    {
      id: '1',
      name: 'Nia Hillyer',
      avatar: '/placeholder.svg?height=40&width=40',
      lastMessage: 'How do you do?',
      timestamp: '2:09 PM',
    },
    {
      id: '2',
      name: 'Sean Freeman',
      avatar: '/placeholder.svg?height=40&width=40',
      lastMessage: 'I was wondering...',
      timestamp: '12:09 PM',
    },
    {
      id: '3',
      name: 'Alma Clarke',
      avatar: '/placeholder.svg?height=40&width=40',
      lastMessage: "I've forgotten how it felt before",
      timestamp: '1:44 PM',
    },
  ];

  return (
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
  );
}

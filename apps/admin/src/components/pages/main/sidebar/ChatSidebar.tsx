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
import { userMessageCustomDataType } from '@repo/admin/components/types/main/chatting/chattingTypes';
import CustomToolTip from '@repo/ui/components/ui/custom/CustomToolTip';

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
  userMessageData,
}: {
  selectedChat: string | null;
  setSelectedChat: Dispatch<SetStateAction<string | null>>;
  userMessageData: userMessageCustomDataType[] | null;
}) {
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
        {userMessageData &&
          userMessageData.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full flex items-center gap-3 p-4 hover:bg-accent transition-colors ${
                selectedChat === chat.id ? 'bg-accent' : ''
              }`}
            >
              <div className="relative">
                <CustomToolTip text={chat.chatRequestDto.nickname}>
                  <Avatar>
                    <AvatarImage
                      src={chat.chatRequestDto.profileImageUrl}
                      alt={chat.chatRequestDto.nickname}
                    />
                    <AvatarFallback>
                      {chat.chatRequestDto.nickname}
                    </AvatarFallback>
                  </Avatar>
                </CustomToolTip>
              </div>
              <div className="flex-1 text-left">
                <div className="grid grid-cols-5">
                  <span className="col-span-4 font-medium text-md text-ellipsis whitespace-nowrap">
                    {chat.mentoringRequestDto.mentoringName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {chat.chatRequestDto.sendAt}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {chat.chatRequestDto.message}
                </p>
              </div>
            </button>
          ))}
      </ScrollArea>
    </div>
  );
}

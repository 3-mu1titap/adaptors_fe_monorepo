import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@repo/ui/components/ui/avatar';
import ScoreStar from './ScoreStar';
interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
    nickname: string;
  };
  content: string;
  timestamp: string;
}

interface CommentThreadProps {
  comments?: Comment[];
}

export default function MentoringReview({ comments = [] }: CommentThreadProps) {
  return (
    <div className="px-4 py-2 bg-adaptorsYellow/10">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-3 my-8 bg-[#FEFAEA]">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={comment.author.avatar}
              alt={comment.author.name}
            />
            <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium">{comment.author.name}</span>
              <span className="text-md text-muted-foreground">
                at {comment.timestamp}
              </span>
              <ScoreStar score={5} />
            </div>
            <p className="text-lg mt-1">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

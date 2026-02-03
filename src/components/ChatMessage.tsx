import { Scale, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={cn(
      "flex gap-3 animate-slide-up",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
        isUser 
          ? "gradient-primary" 
          : "bg-secondary/10 border border-secondary/20"
      )}>
        {isUser ? (
          <User className="h-4 w-4 text-primary-foreground" />
        ) : (
          <Scale className="h-4 w-4 text-secondary" />
        )}
      </div>

      <div className={cn(
        "max-w-[80%] rounded-2xl px-4 py-3",
        isUser 
          ? "bg-chat-user text-primary-foreground rounded-tr-sm" 
          : "bg-chat-assistant text-chat-assistant-foreground rounded-tl-sm border border-border"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <span className={cn(
          "text-[10px] mt-2 block",
          isUser ? "text-primary-foreground/70" : "text-muted-foreground"
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;

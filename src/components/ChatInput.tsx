import { useState, useRef, useEffect } from "react";
import { Send, Mic, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

const ChatInput = ({ onSend, isLoading, placeholder = "Ask about any Indian law..." }: ChatInputProps) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-end gap-2 p-2 bg-card rounded-2xl border border-border shadow-card">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={isLoading}
          rows={1}
          className="flex-1 px-4 py-3 text-sm bg-transparent border-0 resize-none placeholder:text-muted-foreground focus:outline-none disabled:opacity-50"
        />
        
        <div className="flex items-center gap-1 pb-1 pr-1">
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="h-10 w-10 rounded-xl text-muted-foreground hover:text-foreground"
            disabled={isLoading}
          >
            <Mic className="h-5 w-5" />
          </Button>
          
          <Button
            type="submit"
            size="icon"
            disabled={!input.trim() || isLoading}
            className="h-10 w-10 rounded-xl gradient-primary hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      <p className="text-[10px] text-center text-muted-foreground mt-2">
        This is informational guidance, not legal advice.
      </p>
    </form>
  );
};

export default ChatInput;

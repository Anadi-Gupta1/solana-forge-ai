import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Lightbulb, Code, Bug } from "lucide-react";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm your Solana AI assistant. I can help you with Rust/Anchor code, debug errors, and guide you through deployments. What would you like to work on?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I understand you're working on that. Let me help you with some suggestions...",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const quickActions = [
    { icon: Code, label: "Code Review", action: () => setInput("Review my code for best practices") },
    { icon: Bug, label: "Debug Error", action: () => setInput("Help me debug this error") },
    { icon: Lightbulb, label: "Optimize", action: () => setInput("How can I optimize this code?") },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="h-12 bg-panel-bg border-b border-border flex items-center px-4">
        <Bot className="w-4 h-4 mr-2 text-primary" />
        <h3 className="text-sm font-medium">AI Assistant</h3>
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-b border-border">
        <div className="text-xs text-muted-foreground mb-2">Quick Actions</div>
        <div className="flex flex-col gap-1">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={action.action}
              className="h-8 justify-start text-xs"
            >
              <action.icon size={12} className="mr-2" />
              {action.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-3">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                {message.role === 'user' ? (
                  <User size={12} className="text-primary-foreground" />
                ) : (
                  <Bot size={12} className="text-primary-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground mb-1">
                  {message.role === 'user' ? 'You' : 'AI Assistant'}
                </div>
                <div className="text-sm leading-relaxed">
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-3 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about Solana development..."
            className="flex-1 h-8 text-sm"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button
            size="sm"
            onClick={handleSendMessage}
            disabled={!input.trim()}
            className="h-8 w-8 p-0"
          >
            <Send size={12} />
          </Button>
        </div>
      </div>
    </div>
  );
};
import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import LocationSelector from "@/components/LocationSelector";
import QuickCategories from "@/components/QuickCategories";
import ChatMessage, { Message } from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import WelcomeCard from "@/components/WelcomeCard";
import EmergencyBanner from "@/components/EmergencyBanner";
import { toast } from "sonner";

const Index = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!state) {
      toast.error("Please select your state first");
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response (will be replaced with actual AI integration)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateMockResponse(content, state, city),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleEmergencyClick = () => {
    const query = `What are the emergency helpline numbers and nearest police station in ${city || state}?`;
    handleSendMessage(query);
  };

  return (
    <div className="min-h-screen flex flex-col gradient-hero">
      <Header />
      
      <main className="flex-1 container max-w-4xl py-6 space-y-6">
        {/* Location Selector */}
        <LocationSelector
          state={state}
          city={city}
          onStateChange={setState}
          onCityChange={setCity}
        />

        {/* Emergency Banner */}
        <EmergencyBanner onEmergencyClick={handleEmergencyClick} />

        {/* Quick Categories */}
        <QuickCategories onSelectQuestion={handleSendMessage} />

        {/* Chat Area */}
        <div className="bg-card rounded-2xl border border-border shadow-card overflow-hidden">
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <WelcomeCard />
            ) : (
              <>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-100" />
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse delay-200" />
                      </div>
                    </div>
                    <div className="bg-chat-assistant text-chat-assistant-foreground rounded-2xl rounded-tl-sm px-4 py-3 border border-border">
                      <p className="text-sm text-muted-foreground">Searching AskNyay database...</p>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t border-border p-4 bg-muted/30">
            <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-4">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 AskNyay AI. For informational purposes only. Not a substitute for legal advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Mock response generator (will be replaced with actual AI)
function generateMockResponse(query: string, state: string, city: string): string {
  const location = city ? `${city}, ${state}` : state;
  
  if (query.toLowerCase().includes("helmet")) {
    return `**Helmet Violation in ${location}**

📋 **Applicable Law:** Motor Vehicles Act, 1988 (Section 129)

💰 **Fine/Penalty:**
• First offense: ₹1,000
• Subsequent offense: ₹2,000 + 3-month license suspension

👮 **Enforcing Authority:** Traffic Police

⚠️ **Note:** Both rider and pillion rider must wear ISI-marked helmets.

---
*This is informational guidance, not legal advice.*`;
  }
  
  if (query.toLowerCase().includes("fir")) {
    return `**Filing an FIR in ${location}**

📋 **What is an FIR?**
First Information Report (FIR) is a written document prepared by police when they receive information about a cognizable offense.

📝 **How to File:**
1. Visit the nearest police station
2. Provide details of the incident
3. Request a copy of the FIR (your right under Section 154 CrPC)

💻 **Online FIR:**
Many states now allow online FIR filing through their state police website.

📞 **Helpline:** Dial 100 or visit your nearest police station.

---
*This is informational guidance, not legal advice.*`;
  }
  
  if (query.toLowerCase().includes("emergency") || query.toLowerCase().includes("helpline")) {
    return `**Emergency Helplines for ${location}**

🚨 **National Emergency Numbers:**
• Police: 100
• Women Helpline: 181 / 1091
• Ambulance: 102 / 108
• Fire: 101
• Child Helpline: 1098
• Cybercrime: 1930

🏥 **For ${state}:**
• State Police Control Room: 100
• Women Safety: 181

📍 **Nearest Police Station:**
Please enable location services for map directions to the nearest police station.

---
*This is informational guidance, not legal advice.*`;
  }
  
  return `Thank you for your query about "${query}" in ${location}.

I'm currently in demo mode. Once connected to the AskNyay database, I'll provide:

• Relevant IPC/BNS sections
• Applicable fines and penalties
• Enforcement authorities
• Step-by-step procedures
• Location-specific information

Please try asking about:
• Traffic rules and fines
• How to file an FIR
• Women safety laws
• Emergency helplines

---
*This is informational guidance, not legal advice.*`;
}

export default Index;

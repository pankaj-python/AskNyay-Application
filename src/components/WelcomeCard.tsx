import { Scale, Shield, BookOpen, PhoneCall } from "lucide-react";

const features = [
  { icon: Scale, label: "IPC/BNS Sections", color: "text-category-traffic" },
  { icon: Shield, label: "Police Laws", color: "text-category-police" },
  { icon: BookOpen, label: "Citizen Rights", color: "text-category-rights" },
  { icon: PhoneCall, label: "Emergency Help", color: "text-category-emergency" },
];

const WelcomeCard = () => {
  return (
    <div className="text-center space-y-6 py-8 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-accent shadow-glow animate-bounce-soft">
        <Scale className="h-10 w-10 text-accent-foreground" />
      </div>
      
      <div className="space-y-2">
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Welcome to AskNyay
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your AI-powered legal assistant for Indian public safety and law awareness. 
          Get instant answers about traffic rules, police procedures, women safety laws, and more.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        {features.map((feature, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-card"
          >
            <feature.icon className={`h-4 w-4 ${feature.color}`} />
            <span className="text-xs font-medium text-foreground">{feature.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeCard;

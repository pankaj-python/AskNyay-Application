import { Scale, Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-card">
            <Scale className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-heading text-xl font-bold text-foreground">
              Ask<span className="text-secondary">Nyay</span>
            </h1>
            <p className="text-xs text-muted-foreground">Legal AI Assistant</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5">
            <Shield className="h-3.5 w-3.5 text-category-rights" />
            <span className="text-xs font-medium text-muted-foreground">24/7 Available</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

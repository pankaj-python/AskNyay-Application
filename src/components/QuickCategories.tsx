import { 
  Car, 
  Shield, 
  UserCheck, 
  Laptop, 
  Scale, 
  AlertTriangle,
  ChevronRight
} from "lucide-react";

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  questions: string[];
}

const categories: Category[] = [
  {
    id: "traffic",
    label: "Traffic Rules",
    icon: Car,
    color: "text-category-traffic",
    bgColor: "bg-category-traffic/10",
    questions: [
      "What is the fine for not wearing a helmet?",
      "What are the drink and drive penalties?",
      "What documents must I carry while driving?"
    ]
  },
  {
    id: "police",
    label: "Police & FIR",
    icon: Shield,
    color: "text-category-police",
    bgColor: "bg-category-police/10",
    questions: [
      "How do I file an FIR online?",
      "What are my rights during police questioning?",
      "Can police arrest without a warrant?"
    ]
  },
  {
    id: "women",
    label: "Women Safety",
    icon: UserCheck,
    color: "text-category-women",
    bgColor: "bg-category-women/10",
    questions: [
      "What is Section 354 IPC?",
      "How to file a harassment complaint?",
      "What are the domestic violence laws?"
    ]
  },
  {
    id: "cyber",
    label: "Cyber Crime",
    icon: Laptop,
    color: "text-category-cyber",
    bgColor: "bg-category-cyber/10",
    questions: [
      "How to report online fraud?",
      "What is the punishment for hacking?",
      "How to file a cybercrime complaint?"
    ]
  },
  {
    id: "rights",
    label: "Citizen Rights",
    icon: Scale,
    color: "text-category-rights",
    bgColor: "bg-category-rights/10",
    questions: [
      "What are my fundamental rights?",
      "Can I refuse a police search?",
      "What is the Right to Information?"
    ]
  },
  {
    id: "emergency",
    label: "Emergency",
    icon: AlertTriangle,
    color: "text-category-emergency",
    bgColor: "bg-category-emergency/10",
    questions: [
      "What are emergency helpline numbers?",
      "How to find the nearest police station?",
      "What to do in case of an accident?"
    ]
  }
];

interface QuickCategoriesProps {
  onSelectQuestion: (question: string) => void;
}

const QuickCategories = ({ onSelectQuestion }: QuickCategoriesProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-muted-foreground px-1">Quick Topics</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((category) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            onSelectQuestion={onSelectQuestion}
          />
        ))}
      </div>
    </div>
  );
};

interface CategoryCardProps {
  category: Category;
  onSelectQuestion: (question: string) => void;
}

const CategoryCard = ({ category, onSelectQuestion }: CategoryCardProps) => {
  const Icon = category.icon;
  
  return (
    <div className="group relative">
      <button className={`w-full p-4 rounded-xl border border-border bg-card hover:shadow-elevated transition-all duration-200 ${category.bgColor} hover:scale-[1.02]`}>
        <div className="flex flex-col items-center gap-2">
          <div className={`p-2 rounded-lg ${category.bgColor}`}>
            <Icon className={`h-5 w-5 ${category.color}`} />
          </div>
          <span className="text-xs font-medium text-foreground">{category.label}</span>
        </div>
      </button>
      
      {/* Dropdown on hover */}
      <div className="absolute top-full left-0 right-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
        <div className="bg-card rounded-xl border border-border shadow-elevated p-2 space-y-1">
          {category.questions.map((question, idx) => (
            <button
              key={idx}
              onClick={() => onSelectQuestion(question)}
              className="w-full text-left px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors flex items-center gap-2"
            >
              <ChevronRight className="h-3 w-3 flex-shrink-0" />
              <span className="line-clamp-2">{question}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickCategories;

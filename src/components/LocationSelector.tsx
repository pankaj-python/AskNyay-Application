import { MapPin, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh"
];

interface LocationSelectorProps {
  state: string;
  city: string;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
}

const LocationSelector = ({ state, city, onStateChange, onCityChange }: LocationSelectorProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 p-4 bg-card rounded-xl border border-border shadow-card">
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-4 w-4 text-secondary" />
        <span className="text-sm font-medium">Your Location:</span>
      </div>
      
      <div className="flex flex-1 gap-3">
        <Select value={state} onValueChange={onStateChange}>
          <SelectTrigger className="flex-1 bg-background border-border">
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent>
            {indianStates.map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          className="flex-1 px-3 py-2 text-sm rounded-md border border-border bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
        />
      </div>
    </div>
  );
};

export default LocationSelector;

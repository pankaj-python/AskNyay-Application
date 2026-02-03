import { AlertTriangle, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyBannerProps {
  onEmergencyClick: () => void;
}

const EmergencyBanner = ({ onEmergencyClick }: EmergencyBannerProps) => {
  return (
    <div className="bg-category-emergency/10 border border-category-emergency/20 rounded-xl p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-category-emergency/20 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-category-emergency" />
          </div>
          <div>
            <h4 className="font-medium text-foreground text-sm">Emergency Assistance</h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Need immediate help? Find nearest police station or call emergency services.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 sm:flex-initial text-category-emergency border-category-emergency/30 hover:bg-category-emergency/10"
            onClick={() => window.open('tel:100', '_self')}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call 100
          </Button>
          <Button
            size="sm"
            className="flex-1 sm:flex-initial bg-category-emergency hover:bg-category-emergency/90"
            onClick={onEmergencyClick}
          >
            <MapPin className="h-4 w-4 mr-2" />
            Find Help
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;

import { FacultyMember } from "@/data/human-capital/teachingStaffData";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

interface FacultyCardProps {
  faculty: FacultyMember;
  onReadMore: () => void;
}

export const FacultyCard = ({ faculty, onReadMore }: FacultyCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-soft overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground text-lg leading-tight mb-1">
          {faculty.name}
        </h3>
        <p className="text-primary text-sm font-medium mb-2">{faculty.designation}</p>
        
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Mail className="w-4 h-4" />
          <span className="truncate">{faculty.email}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Experience: {faculty.experience}
        </p>
        
        <Button 
          onClick={onReadMore}
          variant="outline" 
          className="w-full"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

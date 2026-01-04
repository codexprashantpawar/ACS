import { FacultyMember } from "@/data/human-capital/teachingStaffData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Mail, Award, BookOpen, GraduationCap, Linkedin } from "lucide-react";

interface FacultyProfileModalProps {
  faculty: FacultyMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FacultyProfileModal = ({ faculty, isOpen, onClose }: FacultyProfileModalProps) => {
  if (!faculty) return null;

  const totalPublications = faculty.publications.reduce((sum, pub) => sum + pub.count, 0);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-display">Faculty Profile</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-100px)]">
          <div className="p-6 pt-4 space-y-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-xl font-display font-semibold text-foreground mb-1">
                  {faculty.name}
                </h2>
                <p className="text-primary font-medium mb-2">{faculty.designation}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${faculty.email}`} className="hover:text-primary">
                      {faculty.email}
                    </a>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Experience:</strong> {faculty.experience}
                  </p>
                </div>
                
                {faculty.profileLinks.linkedin && (
                  <a
                    href={faculty.profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-primary hover:underline"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                )}
              </div>
            </div>

            <Separator />

            {/* Education Section */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education & Professional Qualification
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-medium">Degree</th>
                      <th className="text-left p-3 font-medium">Specialization</th>
                      <th className="text-left p-3 font-medium">University</th>
                      <th className="text-left p-3 font-medium">Year</th>
                      <th className="text-left p-3 font-medium">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.education.map((edu, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-3">{edu.degree}</td>
                        <td className="p-3">{edu.specialization}</td>
                        <td className="p-3">{edu.university}</td>
                        <td className="p-3">{edu.year}</td>
                        <td className="p-3">{edu.percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <Separator />

            {/* Publications Section */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                Research & Publication
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-3 font-medium">Category</th>
                      <th className="text-left p-3 font-medium">Number of Publications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {faculty.publications.map((pub, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-3">{pub.category}</td>
                        <td className="p-3">{pub.count > 0 ? pub.count : "Nil"}</td>
                      </tr>
                    ))}
                    <tr className="bg-muted/30 font-medium">
                      <td className="p-3">Total</td>
                      <td className="p-3">{totalPublications}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Achievements Section */}
            {faculty.achievements.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    Achievements
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="text-left p-3 font-medium">Sr. No.</th>
                          <th className="text-left p-3 font-medium">Recognition Details</th>
                          <th className="text-left p-3 font-medium">Organisation</th>
                          <th className="text-left p-3 font-medium">Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        {faculty.achievements.map((achievement, index) => (
                          <tr key={index} className="border-b border-border">
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{achievement.recognition}</td>
                            <td className="p-3">{achievement.organization}</td>
                            <td className="p-3">{achievement.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

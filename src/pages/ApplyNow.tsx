import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Send, GraduationCap } from "lucide-react";

const ApplyNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    stream: "",
    program: "",
    qualification: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programsByStream: Record<string, string[]> = {
    Arts: ["B.A. (Bachelor of Arts)", "M.A. Journalism", "M.A. Economics"],
    Commerce: ["B.Com (Bachelor of Commerce)", "BBA", "BCA", "M.Com"],
    Science: ["B.Sc (Bachelor of Science)", "B.Sc Computer Science"],
  };

  const handleStreamChange = (value: string) => {
    setFormData({ ...formData, stream: value, program: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link to send email to snbpacs@gmail.com
    const subject = encodeURIComponent(`New Admission Application - ${formData.stream} - ${formData.program}`);
    const body = encodeURIComponent(
      `New Admission Application\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Address: ${formData.address}\n` +
      `Stream: ${formData.stream}\n` +
      `Program: ${formData.program}\n` +
      `Qualification: ${formData.qualification}\n` +
      `Message: ${formData.message}`
    );

    window.location.href = `mailto:snbpacs@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Application Submitted!",
      description: "Your email client will open to send the application. We'll contact you soon.",
    });

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHeader
        title="Apply Now"
        description="Join SNBP College of Arts, Commerce, Science & Management Studies"
        breadcrumbs={[{ label: "Apply Now" }]}
      />

      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">
                  Admission Application Form
                </h2>
                <p className="text-sm text-muted-foreground">
                  Fill in your details to apply for admission
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qualification">Current Qualification *</Label>
                  <Input
                    id="qualification"
                    placeholder="e.g., 12th Pass, Graduate"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Select Stream (ACS) *</Label>
                  <Select onValueChange={handleStreamChange} value={formData.stream}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Stream" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Arts">Arts (A)</SelectItem>
                      <SelectItem value="Commerce">Commerce (C)</SelectItem>
                      <SelectItem value="Science">Science (S)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Select Program *</Label>
                  <Select
                    onValueChange={(value) => setFormData({ ...formData, program: value })}
                    value={formData.program}
                    disabled={!formData.stream}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={formData.stream ? "Choose Program" : "Select stream first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.stream &&
                        programsByStream[formData.stream]?.map((program) => (
                          <SelectItem key={program} value={program}>
                            {program}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  placeholder="Any additional information you'd like to share..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyNow;

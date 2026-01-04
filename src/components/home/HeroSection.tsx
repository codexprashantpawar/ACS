import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChatbotButton } from "@/components/chat/ChatbotButton";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[400px] lg:min-h-[450px] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-primary-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-sky/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Excellence in Education Since 1990
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 animate-slide-up">
            Welcome to{" "}
            <span className="text-gradient">SNBP ACS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Shaping minds, building futures. Experience excellence in education with our 
            comprehensive academic programs, world-class faculty, and state-of-the-art 
            infrastructure designed for the leaders of tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="group">
              <Link to="/apply-now">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/about/vision">
                <Play className="mr-2 w-4 h-4" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Chatbot Button - Fixed Bottom Right */}
      <ChatbotButton />
    </section>
  );
};

import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Comprehensive curriculum designed for holistic development and industry readiness",
    color: "bg-primary-light text-primary",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Experienced educators and researchers committed to student success and innovation",
    color: "bg-sky-light text-sky",
  },
  {
    icon: Award,
    title: "Accreditation",
    description: "Recognized and accredited by leading educational bodies and international organizations",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: BookOpen,
    title: "Research Focus",
    description: "Cutting-edge research opportunities and innovation labs for hands-on learning",
    color: "bg-primary-light text-primary",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Choose SNBP ACS?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide an exceptional learning environment with state-of-the-art facilities and a commitment to academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

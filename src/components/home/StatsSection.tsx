import { useEffect, useState, useRef } from "react";

interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "50", suffix: "+", label: "Institutions" },
  { value: "1", suffix: "L+", label: "Students" },
  { value: "30", suffix: "+", label: "Years Legacy" },
  { value: "95", suffix: "%", label: "Placement Rate" },
];

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

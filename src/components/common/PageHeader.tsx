import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHeader = ({ title, description, breadcrumbs }: PageHeaderProps) => {
  return (
    <section className="bg-gradient-to-br from-secondary via-background to-primary-light py-12 md:py-16">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Home className="w-4 h-4" />
            Home
          </Link>
          {breadcrumbs.map((item, index) => (
            <div key={item.label} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              {item.href ? (
                <Link to={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg text-muted-foreground max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

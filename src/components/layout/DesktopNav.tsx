import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { navigationConfig, NavItem } from "@/config/navigation";

export const DesktopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Split navigation into two rows
  const midPoint = Math.ceil(navigationConfig.length / 2);
  const firstRow = navigationConfig.slice(0, midPoint);
  const secondRow = navigationConfig.slice(midPoint);

  return (
    <nav className="flex flex-col gap-0.5">
      {/* First Row */}
      <ul className="flex items-center justify-center flex-wrap gap-0.5">
        {firstRow.map((item) => (
          <NavItemComponent
            key={item.label}
            item={item}
            isActive={activeDropdown === item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </ul>
      {/* Second Row */}
      <ul className="flex items-center justify-center flex-wrap gap-0.5">
        {secondRow.map((item) => (
          <NavItemComponent
            key={item.label}
            item={item}
            isActive={activeDropdown === item.label}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </ul>
    </nav>
  );
};

interface NavItemProps {
  item: NavItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItemComponent = ({ item, isActive, onMouseEnter, onMouseLeave }: NavItemProps) => {
  const hasDropdown = item.subCategories && item.subCategories.length > 0;

  if (!hasDropdown && item.href) {
    return (
      <li>
        <Link
          to={item.href}
          className="px-2.5 py-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors rounded hover:bg-background"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="flex items-center gap-0.5 px-2.5 py-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors rounded hover:bg-background">
        {item.label}
        {hasDropdown && (
          <ChevronDown
            className={`w-3 h-3 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
          />
        )}
      </button>

      {hasDropdown && isActive && (
        <div className="absolute left-0 top-full pt-1 animate-slide-down z-50">
          <div className="bg-card rounded-lg shadow-strong border border-border p-3 min-w-[400px] max-w-[600px]">
            <div className="grid grid-cols-2 gap-4">
              {item.subCategories!.map((category) => (
                <div key={category.title}>
                  <h4 className="font-semibold text-xs text-foreground mb-1.5 pb-1 border-b border-border">
                    {category.title}
                  </h4>
                  <ul className="space-y-0.5">
                    {category.items.map((subItem) => (
                      <li key={subItem.label}>
                        <Link
                          to={subItem.href}
                          className="block text-xs text-muted-foreground hover:text-primary hover:bg-primary-light px-1.5 py-1 rounded transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

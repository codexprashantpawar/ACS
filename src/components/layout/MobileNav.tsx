import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { navigationConfig, NavItem, NavSubCategory } from "@/config/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="xl:hidden absolute left-0 right-0 top-full bg-background border-b border-border shadow-strong animate-slide-down">
      <ScrollArea className="h-[70vh]">
        <nav className="container py-4">
          <ul className="space-y-1">
            {navigationConfig.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                isExpanded={expandedItems.includes(item.label)}
                expandedCategories={expandedCategories}
                onToggle={() => toggleItem(item.label)}
                onToggleCategory={toggleCategory}
                onClose={onClose}
              />
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
};

interface MobileNavItemProps {
  item: NavItem;
  isExpanded: boolean;
  expandedCategories: string[];
  onToggle: () => void;
  onToggleCategory: (title: string) => void;
  onClose: () => void;
}

const MobileNavItem = ({
  item,
  isExpanded,
  expandedCategories,
  onToggle,
  onToggleCategory,
  onClose,
}: MobileNavItemProps) => {
  const hasDropdown = item.subCategories && item.subCategories.length > 0;

  if (!hasDropdown && item.href) {
    return (
      <li>
        <Link
          to={item.href}
          onClick={onClose}
          className="block px-4 py-3 text-foreground font-medium hover:bg-secondary rounded-lg transition-colors"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium hover:bg-secondary rounded-lg transition-colors"
      >
        {item.label}
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && hasDropdown && (
        <div className="mt-1 ml-4 space-y-1 animate-slide-down">
          {item.subCategories!.map((category) => (
            <MobileCategoryItem
              key={category.title}
              category={category}
              isExpanded={expandedCategories.includes(category.title)}
              onToggle={() => onToggleCategory(category.title)}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </li>
  );
};

interface MobileCategoryItemProps {
  category: NavSubCategory;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileCategoryItem = ({ category, isExpanded, onToggle, onClose }: MobileCategoryItemProps) => {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-muted-foreground font-medium hover:bg-accent rounded-lg transition-colors"
      >
        {category.title}
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
        />
      </button>

      {isExpanded && (
        <ul className="mt-1 ml-4 space-y-1 animate-fade-in">
          {category.items.map((subItem) => (
            <li key={subItem.label}>
              <Link
                to={subItem.href}
                onClick={onClose}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary-light rounded transition-colors"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

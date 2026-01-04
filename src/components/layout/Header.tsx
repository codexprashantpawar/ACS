import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { siteConfig } from "@/data/site/siteData";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      {/* Top Bar */}
      <div className="bg-navy text-navy-foreground py-1.5">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs gap-1 sm:gap-0">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {siteConfig.contact.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {siteConfig.contact.phone.landline}
              </span>
              <span className="hidden md:flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {siteConfig.contact.phone.mobile[0]}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/student-login"
                className="hover:text-primary transition-colors">
                Student Login
              </Link>
              <Link
                to="/staff-login"
                className="hover:text-primary transition-colors">
                Staff Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo */}
      <div className="container">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://snbplaw.org/law/assets/images/logo/logo-image.png"
              alt="SNBP ACS Logo"
              className="h-14 w-auto object-contain"
            />
            <div>
              <h1 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight">
                SNBP ACS
              </h1>

              <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                {siteConfig.tagline}
              </p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation Bar - Two Rows */}
      <div className="hidden xl:block bg-secondary/50 border-t border-border">
        <div className="container py-1">
          <DesktopNav />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

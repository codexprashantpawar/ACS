import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/data/site/siteData";

export const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Main Footer */}
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">S</span>
              </div>
              <span className="font-display font-bold text-lg">SNBP ACS</span>
            </div>
            <p className="text-navy-foreground/80 text-sm mb-4">
              Shaping minds, building futures. Excellence in education since 1990 with comprehensive academic programs and world-class infrastructure.
            </p>
            <div className="flex items-center gap-3">
              <a href={siteConfig.social.facebook} className="w-8 h-8 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.twitter} className="w-8 h-8 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.linkedin} className="w-8 h-8 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} className="w-8 h-8 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.youtube} className="w-8 h-8 rounded-full bg-navy-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              <li><Link to="/about/vision" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/academics/arts" className="hover:text-primary transition-colors">Academics</Link></li>
              <li><Link to="/academics/admission-process" className="hover:text-primary transition-colors">Admissions</Link></li>
              <li><Link to="/placement/records" className="hover:text-primary transition-colors">Placements</Link></li>
              <li><Link to="/research/articles" className="hover:text-primary transition-colors">Research</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/80">
              <li><Link to="/library/about" className="hover:text-primary transition-colors">Library</Link></li>
              <li><Link to="/reports/academic" className="hover:text-primary transition-colors">Reports</Link></li>
              <li><Link to="/downloads" className="hover:text-primary transition-colors">Downloads</Link></li>
              <li><Link to="/information/circulars" className="hover:text-primary transition-colors">Circulars</Link></li>
              <li><Link to="/iqac/calendar" className="hover:text-primary transition-colors">IQAC</Link></li>
              <li><Link to="/feedback" className="hover:text-primary transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p>{siteConfig.contact.phone.landline}</p>
                  <p>{siteConfig.contact.phone.mobile.join(" / ")}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-foreground/10">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-foreground/60">
          <p>© {new Date().getFullYear()} SNBP Arts, Commerce & Science College. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

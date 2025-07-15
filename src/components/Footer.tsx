import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Rooms", href: "/rooms" },
    { name: "Contact", href: "/contact" },
  ];

  const languages = ["English", "Français", "Español"];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-playfair font-bold text-primary">
              Dar Aytma
            </h3>
            <p className="text-sm text-muted-foreground">
              Family-run restaurant, guesthouse & desert adventures in the heart of Merzouga.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Khamlia Village, Merzouga</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+212123456789" className="hover:text-primary transition-colors">
                  +212 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@daraytma.com" className="hover:text-primary transition-colors">
                  info@daraytma.com
                </a>
              </div>
            </div>
            <Button size="sm" className="w-full" asChild>
              <a href="https://wa.me/212123456789" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Languages</h4>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang}>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Dar Aytma khamlia Merzouga. BY ITKEYS.
            </p>
            <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/salimofv", label: "GitHub" },
    { icon: FaInstagram, href: "https://instagram.com/maverik1805", label: "Instagram" },
    { icon: FaTelegram, href: "https://t.me/salimofv", label: "Telegram" },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-lg font-bold text-gradient-hero"
          >
            abdusalimov.com
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                title={item.label}
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} • Yaratildi{" "}
            <Heart className="w-4 h-4 text-red-500 inline" fill="currentColor" /> bilan
          </p>
        </div>

        {/* Simple footer text */}
        <div className="mt-8 text-center">
          <span className="text-xs text-muted-foreground/50">
            React, TypeScript va ❤️ bilan yaratilgan
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

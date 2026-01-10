import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:developer@example.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-mono text-lg font-bold"
          >
            <span className="text-primary">{"<"}</span>
            <span className="text-foreground">Dev</span>
            <span className="text-primary">{"/>"}</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
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

        {/* Decorative code */}
        <div className="mt-8 text-center">
          <span className="font-mono text-xs text-muted-foreground/50">
            {"/* Built with React, TypeScript & ❤️ */"}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

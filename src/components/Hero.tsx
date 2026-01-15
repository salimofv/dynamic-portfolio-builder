import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { Code, Palette, Globe, Zap, Database, Smartphone } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Python Developer", 
  "JavaScript Expert",
  "React Specialist",
  "UI/UX Enthusiast"
];

const floatingIcons = [
  { icon: Code, delay: 0, x: -120, y: -80 },
  { icon: Palette, delay: 0.2, x: 140, y: -60 },
  { icon: Globe, delay: 0.4, x: -150, y: 80 },
  { icon: Zap, delay: 0.6, x: 160, y: 100 },
  { icon: Database, delay: 0.8, x: -100, y: 150 },
  { icon: Smartphone, delay: 1, x: 120, y: -140 },
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-secondary/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Floating icons on sides */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{ 
              delay: item.delay,
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute hidden md:block"
            style={{ 
              left: `calc(50% + ${item.x}px)`,
              top: `calc(50% + ${item.y}px)`,
            }}
          >
            <div className="p-3 rounded-xl glass neon-border">
              <item.icon className="w-6 h-6 text-primary/70" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass neon-border mb-6"
          >
            <span className="text-sm text-muted-foreground">👋 Assalomu alaykum!</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Mening portfoliomga{" "}
            <span className="text-gradient-hero animate-gradient">xush kelibsiz!</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-12 md:h-16 flex items-center justify-center mb-6"
          >
            <span className="font-mono text-xl md:text-3xl text-muted-foreground">
              <span className="text-foreground">{displayText}</span>
              <span className="border-r-2 border-primary animate-pulse ml-1">
                &nbsp;
              </span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Men Abdusalimov - professional dasturchi va veb-dizayner. Bu yerda men haqimda 
            to'liq ma'lumot topishingiz mumkin. Men zamonaviy va chiroyli veb-saytlar yarataman.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Python, JavaScript, React, Node.js va boshqa zamonaviy texnologiyalardan foydalanib, 
            sizning g'oyalaringizni hayotga olib kelaman. 3 yildan ortiq tajriba va 50 dan ortiq 
            muvaffaqiyatli loyihalar bilan xizmatdaman.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10"
          >
            {[
              { number: "3+", label: "Yillik tajriba" },
              { number: "50+", label: "Loyihalar" },
              { number: "30+", label: "Mijozlar" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                className="p-3 rounded-lg glass"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: FaGithub, href: "https://github.com", label: "GitHub" },
              { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
              { icon: FaTelegram, href: "https://t.me", label: "Telegram" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full glass neon-border group"
                title={item.label}
              >
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

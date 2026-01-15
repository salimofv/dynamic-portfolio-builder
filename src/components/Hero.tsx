import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { Code, Palette, Globe, Zap, Database, Smartphone, Terminal, Cpu, Layers } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Python Developer", 
  "JavaScript Expert",
  "React Specialist",
  "UI/UX Enthusiast"
];

const floatingIcons = [
  { icon: Code, delay: 0, x: -180, y: -100 },
  { icon: Palette, delay: 0.2, x: 200, y: -80 },
  { icon: Globe, delay: 0.4, x: -220, y: 60 },
  { icon: Zap, delay: 0.6, x: 240, y: 120 },
  { icon: Database, delay: 0.8, x: -160, y: 180 },
  { icon: Smartphone, delay: 1, x: 180, y: -160 },
  { icon: Terminal, delay: 1.2, x: -250, y: -30 },
  { icon: Cpu, delay: 1.4, x: 280, y: 20 },
  { icon: Layers, delay: 1.6, x: -200, y: 140 },
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
        {/* New gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay with gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Floating icons on sides */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: 1,
              rotate: 0,
              y: [0, -20, 0],
            }}
            transition={{ 
              delay: item.delay,
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute hidden lg:block"
            style={{ 
              left: `calc(50% + ${item.x}px)`,
              top: `calc(50% + ${item.y}px)`,
            }}
          >
            <div className="p-4 rounded-2xl glass neon-border backdrop-blur-xl">
              <item.icon className="w-7 h-7 text-primary/80" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass neon-border mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            <span className="text-sm font-medium text-muted-foreground">Loyihalar uchun tayyor</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block text-foreground mb-2">Salom, Men</span>
            <span className="text-gradient-hero animate-gradient">Abdusalimov</span>
          </motion.h1>

          {/* Typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-14 md:h-20 flex items-center justify-center mb-8"
          >
            <div className="px-6 py-3 rounded-xl glass inline-flex items-center gap-3">
              <span className="text-primary text-lg">{"<"}</span>
              <span className="font-mono text-xl md:text-3xl text-muted-foreground">
                <span className="text-foreground font-semibold">{displayText}</span>
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-primary ml-1"
                >
                  |
                </motion.span>
              </span>
              <span className="text-primary text-lg">{"/>"}</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Men <span className="text-primary font-medium">zamonaviy texnologiyalar</span> yordamida 
            kreativ va funksional veb-ilovalar yarataman. Sizning <span className="text-primary font-medium">g'oyalaringizni</span> hayotga 
            olib kelishga tayyorman.
          </motion.p>

          {/* Stats with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12"
          >
            {[
              { number: "3+", label: "Yillik tajriba", color: "from-primary to-cyan-400" },
              { number: "50+", label: "Loyihalar", color: "from-purple-500 to-pink-500" },
              { number: "30+", label: "Mijozlar", color: "from-green-400 to-emerald-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.4 }}
                className="relative p-4 rounded-2xl glass overflow-hidden group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social links with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: FaGithub, href: "https://github.com", label: "GitHub", color: "hover:bg-gray-700" },
              { icon: FaInstagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
              { icon: FaTelegram, href: "https://t.me", label: "Telegram", color: "hover:bg-blue-500" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-2xl glass neon-border group transition-all duration-300 ${item.color}`}
                title={item.label}
              >
                <item.icon className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-16 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          />
        </motion.div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl hidden md:block" />
      <div className="absolute top-20 right-10 w-20 h-20 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl hidden md:block" />
      <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl hidden md:block" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl hidden md:block" />
    </section>
  );
};

export default Hero;

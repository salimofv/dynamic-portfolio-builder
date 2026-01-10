import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const stats = [
  { label: "Yillik tajriba", value: "3+" },
  { label: "Tugallangan loyihalar", value: "50+" },
  { label: "Mamnun mijozlar", value: "30+" },
  { label: "Kod satrlari", value: "100K+" },
];

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Toza va tushunarli kod" },
  { icon: Palette, title: "UI/UX Design", desc: "Chiroyli interfeyslar" },
  { icon: Rocket, title: "Performance", desc: "Tez va optimallashtirilgan" },
  { icon: Sparkles, title: "Innovation", desc: "Zamonaviy texnologiyalar" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">{"// Men haqimda"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kim <span className="text-gradient">Men</span>?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden neon-border">
                <img
                  src={profileImage}
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-4 glass rounded-xl"
              >
                <span className="font-mono text-primary text-2xl">{"</>"}</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 p-4 glass rounded-xl"
              >
                <span className="font-mono text-accent text-xl">{"{ }"}</span>
              </motion.div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10" />
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="code-block mb-8">
              <pre className="text-sm md:text-base">
                <span className="text-secondary">const</span>{" "}
                <span className="text-accent">developer</span> = {"{"}
                {"\n"}  <span className="text-muted-foreground">name:</span>{" "}
                <span className="text-primary">"Full Stack Developer"</span>,
                {"\n"}  <span className="text-muted-foreground">location:</span>{" "}
                <span className="text-primary">"O'zbekiston 🇺🇿"</span>,
                {"\n"}  <span className="text-muted-foreground">passion:</span>{" "}
                <span className="text-primary">"Kod yozish"</span>
                {"\n"}{"}"};
              </pre>
            </div>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Men professional veb-dasturchi bo'lib, zamonaviy texnologiyalar yordamida 
              ajoyib veb-ilovalar yarataman. Python, JavaScript, React, va boshqa 
              ko'plab texnologiyalardan foydalanib, mijozlarning talablariga mos 
              yechimlarni taqdim etaman.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center neon-border"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

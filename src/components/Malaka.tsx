import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Globe } from "lucide-react";

const qualifications = [
  {
    icon: Globe,
    title: "Frilans",
    description: "Frilanser yoki yollanma ishchi, odatda o'z-o'zini ish bilan ta'minlovchi va ma'lum bir ish beruvchiga bog'lanib qolmaydigan shaxs uchun ishlatiladigan atama hisoblanadi. Men mustaqil loyihalar ustida ishlashni yaxshi ko'raman.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Code2,
    title: "Dasturlash",
    description: "Dasturlash — kompyuterlar va boshqa mikroprotsessorli elektron mashinalar uchun dasturlar tuzish, sinash va o'zgartirish jarayonidan iborat. Python, JavaScript, React va boshqa zamonaviy texnologiyalarni o'zlashtirganman.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Palette,
    title: "Dizayner",
    description: "Dizayner – bu biror narsaning shakli yoki tuzilishini tayyorlashdan oldin rejalashtiradigan, chizmalar yoki maketlar tayyorlash orqali amalga oshiradigan kasb egalariga beriladigan umumiy tushunchadir.",
    color: "from-red-500 to-red-600"
  }
];

const Malaka = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="malaka" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Malaka
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-8 h-1 rounded-full bg-muted-foreground/50" />
            <div className="w-8 h-1 rounded-full bg-destructive" />
            <div className="w-8 h-1 rounded-full bg-muted-foreground/50" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {qualifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="h-full p-8 rounded-xl bg-card border border-border/50 hover:border-destructive/50 transition-all duration-300">
                {/* Icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-destructive/10">
                    <item.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {item.description}
                </p>
                
                {/* Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block px-6 py-3 rounded-lg bg-destructive text-white font-semibold hover:bg-destructive/90 transition-colors"
                >
                  Bog'lanish
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Malaka;

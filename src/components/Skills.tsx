import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Dasturlash tillari",
    icon: "💻",
    skills: [
      { name: "Python", level: 95, color: "from-yellow-400 to-yellow-600" },
      { name: "JavaScript", level: 92, color: "from-yellow-300 to-yellow-500" },
      { name: "TypeScript", level: 88, color: "from-blue-400 to-blue-600" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
      { name: "SQL", level: 85, color: "from-cyan-400 to-cyan-600" },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 94, color: "from-cyan-400 to-blue-500" },
      { name: "Next.js", level: 88, color: "from-gray-400 to-gray-600" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
      { name: "Framer Motion", level: 85, color: "from-purple-400 to-pink-500" },
      { name: "Vue.js", level: 78, color: "from-green-400 to-emerald-500" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90, color: "from-green-500 to-green-700" },
      { name: "Django", level: 92, color: "from-green-600 to-green-800" },
      { name: "FastAPI", level: 88, color: "from-teal-400 to-teal-600" },
      { name: "Express.js", level: 86, color: "from-gray-500 to-gray-700" },
      { name: "PostgreSQL", level: 84, color: "from-blue-500 to-blue-700" },
    ],
  },
  {
    title: "Asboblar",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 95, color: "from-orange-500 to-red-600" },
      { name: "Docker", level: 82, color: "from-blue-400 to-blue-600" },
      { name: "Linux", level: 85, color: "from-yellow-500 to-orange-500" },
      { name: "Figma", level: 80, color: "from-purple-400 to-pink-500" },
      { name: "VS Code", level: 95, color: "from-blue-500 to-blue-700" },
    ],
  },
];

const SkillBar = ({ skill, index, isInView }: { skill: { name: string; level: number; color: string }; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            {"// Ko'nikmalarim"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Texnik <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zamonaviy texnologiyalar bilan ishlash tajribam
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeCategory === index
                  ? "bg-gradient-primary text-primary-foreground glow-primary"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-8 neon-border"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span>{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].title}
            </h3>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* Code decoration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block"
          >
            <div className="code-block h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">skills.ts</span>
              </div>
              <pre className="text-sm overflow-hidden">
                <span className="text-secondary">interface</span>{" "}
                <span className="text-accent">Developer</span> {"{"}
                {"\n"}  <span className="text-muted-foreground">languages:</span> <span className="text-primary">string[]</span>;
                {"\n"}  <span className="text-muted-foreground">frameworks:</span> <span className="text-primary">string[]</span>;
                {"\n"}  <span className="text-muted-foreground">passion:</span> <span className="text-primary">boolean</span>;
                {"\n"}{"}"}
                {"\n\n"}
                <span className="text-secondary">const</span>{" "}
                <span className="text-accent">me</span>: Developer = {"{"}
                {"\n"}  languages: [
                {"\n"}    <span className="text-primary">"Python"</span>,
                {"\n"}    <span className="text-primary">"JavaScript"</span>,
                {"\n"}    <span className="text-primary">"TypeScript"</span>
                {"\n"}  ],
                {"\n"}  frameworks: [
                {"\n"}    <span className="text-primary">"React"</span>,
                {"\n"}    <span className="text-primary">"Django"</span>,
                {"\n"}    <span className="text-primary">"Node.js"</span>
                {"\n"}  ],
                {"\n"}  passion: <span className="text-accent">true</span>
                {"\n"}{"}"};
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Zamonaviy onlayn do'kon platformasi. To'liq funksional savdo tizimi bilan.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-cyan-500 to-blue-600",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Application",
    description: "Sun'iy intellekt asosidagi chat ilovasi. Real-time kommunikatsiya.",
    tags: ["Python", "FastAPI", "OpenAI", "WebSocket"],
    gradient: "from-purple-500 to-pink-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Ma'lumotlarni vizualizatsiya qilish uchun interaktiv dashboard.",
    tags: ["Next.js", "D3.js", "TypeScript", "Tailwind"],
    gradient: "from-green-500 to-emerald-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media App",
    description: "Ijtimoiy tarmoq ilovasi. Post, like, comment va real-time xabarlar.",
    tags: ["React", "Django", "Redis", "Docker"],
    gradient: "from-orange-500 to-red-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management",
    description: "Loyihalarni boshqarish tizimi. Kanban board va team collaboration.",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    gradient: "from-yellow-500 to-orange-600",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Application",
    description: "Ob-havo ma'lumotlari ilovasi. Geolokatsiya va 7 kunlik prognoz.",
    tags: ["React", "Weather API", "Framer Motion"],
    gradient: "from-blue-500 to-cyan-600",
    github: "#",
    demo: "#",
  },
];

const ProjectCard = ({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:translate-y-[-4px] neon-border">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
            <Folder className="w-6 h-6 text-white" />
          </div>
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 -z-10`}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm mb-4 block">
            {"// Loyihalarim"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            So'nggi <span className="text-gradient">Ishlarim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mening eng yaxshi loyihalarimdan bir nechtasi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl font-mono text-sm text-primary hover:text-primary neon-border"
          >
            <Github className="w-4 h-4" />
            GitHub profilimni ko'ring
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

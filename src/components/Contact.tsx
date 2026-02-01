import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasError(false);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

    if (!botToken || !chatId) {
      setHasError(true);
      return;
    }

    setIsSending(true);
    try {
      const text = [
        "Yangi kontakt xabari:",
        `Ism: ${formData.name}`,
        `Email: ${formData.email}`,
        `Mavzu: ${formData.subject}`,
        `Xabar: ${formData.message}`,
      ].join("\n");

      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      });

      if (!response.ok) {
        throw new Error("Telegram request failed");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "abdusalimovelnur575@gmail.com" },
    { icon: Phone, label: "Telefon", value: "+998 XX XXX XX XX" },
    { icon: MapPin, label: "Manzil", value: "surxondaryo, denov tumani " },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/salimofv", label: "GitHub", color: "hover:text-white" },
    { icon: FaInstagram, href: "https://instagram.com/maverik1805", label: "Instagram", color: "hover:text-pink-500" },
    { icon: FaTelegram, href: "https://t.me/salimofv", label: "Telegram", color: "hover:text-blue-400" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm mb-4 block font-medium">
            Bog'lanish
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Men bilan <span className="text-gradient">bog'laning</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Loyiha haqida gaplashmoqchimisiz yoki savollaringiz bormi? Quyidagi usullar orqali men bilan bog'lanishingiz mumkin!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8 h-full neon-border">
              <h3 className="text-2xl font-bold mb-8">Kontakt ma'lumotlari</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50">
                <h4 className="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
                <div className="flex gap-4">
                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl bg-muted/50 text-muted-foreground ${item.color} transition-all`}
                      title={item.label}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 neon-border">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Ismingizni kiriting"
                    value={formData.name}
                    onChange={handleChange("name")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Mavzu
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Loyiha mavzusi"
                    value={formData.subject}
                    onChange={handleChange("subject")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Xabar
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Xabaringizni yozing..."
                    value={formData.message}
                    onChange={handleChange("message")}
                  />
                </div>

                {hasError && (
                  <div className="text-sm text-destructive">
                    Xabar yuborilmadi. Bot token yoki chat ID ni tekshiring.
                  </div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted || isSending}
                  className="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 glow-primary transition-all disabled:opacity-70"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Yuborildi!
                    </>
                  ) : isSending ? (
                    <>
                      <Send className="w-5 h-5" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Xabar yuborish
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

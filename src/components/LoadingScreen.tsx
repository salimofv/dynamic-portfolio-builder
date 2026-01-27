import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gradient-hero"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(var(--primary) / 0.5)",
                    "0 0 40px hsl(var(--primary) / 0.8)",
                    "0 0 20px hsl(var(--primary) / 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                abdusalimov.uz
              </motion.h1>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="h-1 bg-muted rounded-full overflow-hidden mx-auto"
            >
              <motion.div
                className="h-full bg-gradient-primary rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mt-4 text-sm"
            >
              Yuklanmoqda...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

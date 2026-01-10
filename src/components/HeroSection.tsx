import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Animated blood vortex background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border opacity-20"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              borderColor: `hsl(0 85% ${30 - i * 3}%)`,
              borderWidth: `${2 - i * 0.3}px`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background:
              'radial-gradient(circle, hsl(0 100% 40% / 0.4) 0%, transparent 70%)',
            boxShadow:
              '0 0 100px hsl(0 100% 40% / 0.3), 0 0 200px hsl(0 100% 30% / 0.2)',
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`rune-${i}`}
            className="absolute text-4xl font-display"
            style={{
              color: 'hsl(0 85% 35% / 0.3)',
              transform: `rotate(${i * 45}deg) translateY(-180px)`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              textShadow: [
                '0 0 10px hsl(0 100% 40% / 0.3)',
                '0 0 30px hsl(0 100% 40% / 0.5)',
                '0 0 10px hsl(0 100% 40% / 0.3)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          >
            ᛟ
          </motion.div>
        ))}
      </div>

      <div className="blood-mist" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: 'hsl(0 85% 40% / 0.5)',
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'hsl(0 85% 40% / 0.05)' }}
        animate={{ opacity: [0, 0, 0.4, 0, 0.2, 0, 0, 0, 0, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Title — FIXED */}
        <motion.h1
          className="
            text-7xl md:text-8xl lg:text-[10rem]
            mb-6
            tracking-[0.2em] -mr-[0.2em]
            font-display font-black
            text-center
          "
          style={{
            color: 'hsl(0 85% 35%)',
            textShadow:
              '0 0 15px hsl(0 85% 35% / 0.6), 0 0 40px hsl(0 85% 30% / 0.4), 0 4px 0 hsl(0 85% 20%)',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          BLOODTIDE
        </motion.h1>

        <motion.p
          className="font-display text-xl md:text-2xl lg:text-3xl tracking-wide mb-4 font-medium"
          style={{ color: 'hsl(35 25% 65% / 0.85)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "The land remembers. The tide demands blood."
        </motion.p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          y: backgroundY,
        }}
      />
      
      {/* Animated vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(0_0%_4%_/_0.4)_50%,_hsl(0_0%_4%_/_0.9)_100%)]" />
      
      {/* Blood mist effect - enhanced */}
      <div className="blood-mist" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blood-glow/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Lightning flash overlay */}
      <motion.div 
        className="absolute inset-0 bg-blood-glow/10 pointer-events-none"
        animate={{
          opacity: [0, 0, 0.3, 0, 0.2, 0, 0, 0, 0, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Content with parallax */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ y: textY, opacity }}
      >
        {/* Animated rune circle behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
          <motion.div 
            className="absolute inset-0 border border-blood rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-12 border border-blood/50 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute inset-24 border border-blood/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Decorative runes above title */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span 
            className="text-blood-glow text-2xl"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >◆</motion.span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blood to-transparent" />
          <motion.span 
            className="text-blood-glow text-3xl"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              textShadow: [
                "0 0 10px hsl(0, 100%, 50%)",
                "0 0 30px hsl(0, 100%, 50%)",
                "0 0 10px hsl(0, 100%, 50%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >ᛟ</motion.span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blood to-transparent" />
          <motion.span 
            className="text-blood-glow text-2xl"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >◆</motion.span>
        </motion.div>
        
        {/* Main title with dramatic entrance */}
        <motion.h1 
          className="text-7xl md:text-8xl lg:text-[10rem] mb-6 tracking-[0.2em] font-display font-black"
          style={{
            color: 'hsl(0, 100%, 50%)',
            textShadow: '0 0 20px hsl(0, 100%, 50%), 0 0 60px hsl(0, 100%, 40%), 0 0 100px hsl(0, 100%, 30%), 0 4px 0 hsl(0, 100%, 20%)',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          BLOODTIDE
        </motion.h1>
        
        {/* Subtitle with stagger animation */}
        <motion.p 
          className="font-display text-xl md:text-2xl lg:text-3xl text-bone/90 tracking-wide mb-4 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "The land remembers. The tide demands blood."
        </motion.p>
        
        {/* Decorative line */}
        <motion.div 
          className="flex items-center justify-center gap-3 mt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-blood" />
          <motion.span 
            className="text-blood text-xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >⚔</motion.span>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-blood" />
        </motion.div>
      </motion.div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LoreSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const loreTexts = [
    {
      quote: "Before the kingdoms fell, the ancients spoke of a pact — blood for power, souls for dominion.",
      attribution: "— The Crimson Codex, Vol. I"
    },
    {
      quote: "The oceans turned red on the night of the Binding. Those who drank from its waters were never the same.",
      attribution: "— Fragment of the Drowned Prophet"
    },
    {
      quote: "To survive is to sacrifice. To conquer is to become the tide itself.",
      attribution: "— Last words of the Blood King"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 px-4 bg-obsidian overflow-hidden">
      {/* Animated background runes with parallax */}
      <motion.div className="absolute inset-0 overflow-hidden opacity-15" style={{ y }}>
        <motion.div 
          className="absolute top-20 left-10 text-8xl text-blood"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >ᚱ</motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-6xl text-blood"
          animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.15, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >ᛒ</motion.div>
        <motion.div 
          className="absolute bottom-32 left-1/4 text-7xl text-blood"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >ᚦ</motion.div>
        <motion.div 
          className="absolute bottom-20 right-1/3 text-5xl text-blood"
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
        >ᛏ</motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 text-9xl text-blood"
          animate={{ opacity: [0.2, 0.6, 0.2], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >ᛉ</motion.div>
      </motion.div>

      {/* Blood drip effects */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-0.5 bg-gradient-to-b from-blood to-transparent"
            style={{ left: `${10 + i * 12}%` }}
            animate={{ height: [0, 60 + Math.random() * 40, 0] }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-6xl text-blood-glow mb-4 tracking-wider">
            THE LORE
          </h2>
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="h-px w-20 bg-gradient-to-r from-transparent to-blood"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.span 
              className="text-blood text-lg"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >◆</motion.span>
            <motion.div 
              className="h-px w-20 bg-gradient-to-l from-transparent to-blood"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Lore panels */}
        <div className="space-y-16">
          {loreTexts.map((lore, index) => (
            <motion.div 
              key={index}
              className="scroll-panel p-8 md:p-12 relative group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated corner decorations */}
              <motion.div 
                className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-blood/50"
                whileHover={{ borderColor: "hsl(0, 100%, 50%)" }}
              />
              <motion.div 
                className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-blood/50"
                whileHover={{ borderColor: "hsl(0, 100%, 50%)" }}
              />
              <motion.div 
                className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-blood/50"
                whileHover={{ borderColor: "hsl(0, 100%, 50%)" }}
              />
              <motion.div 
                className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-blood/50"
                whileHover={{ borderColor: "hsl(0, 100%, 50%)" }}
              />
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-bone/90 font-body italic leading-relaxed mb-6 text-center">
                "{lore.quote}"
              </blockquote>
              
              {/* Attribution */}
              <p className="text-blood/80 text-sm md:text-base font-display tracking-wider text-center">
                {lore.attribution}
              </p>
              
              {/* Hover glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blood/0 via-blood/10 to-blood/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoreSection;

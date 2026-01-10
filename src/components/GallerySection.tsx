import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gallery1 from '@/assets/gallery-1.png';
import gallery2 from '@/assets/gallery-2.png';
import gallery3 from '@/assets/gallery-3.png';

interface GalleryImage {
  src: string;
  caption: string;
  lore: string;
}

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const images: GalleryImage[] = [
    {
      src: gallery1,
      caption: "The Forsaken Village",
      lore: "Where the first blood rituals were performed"
    },
    {
      src: gallery2,
      caption: "Mist-Shrouded Ruins",
      lore: "Ancient stones still whisper of power"
    },
    {
      src: gallery3,
      caption: "The Watcher's Domain",
      lore: "Those who enter rarely return unchanged"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 px-4 bg-gradient-to-b from-obsidian via-background to-obsidian overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsl(0_100%_30%_/_0.1)_0%,_transparent_60%)]" />
      </motion.div>

      {/* Floating embers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsl(0, 100%, ${50 + Math.random() * 20}%) 0%, transparent 70%)`,
            }}
            animate={{
              y: [800, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-5xl md:text-6xl text-blood-glow mb-4 tracking-wider">
            VISIONS OF BLOODTIDE
          </h2>
          <p className="text-bone/60 font-body text-lg md:text-xl">
            Glimpses into a world consumed by crimson tides
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.div 
              className="h-px w-20 bg-gradient-to-r from-transparent to-blood"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
            <motion.span 
              className="text-blood text-lg"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >⚔</motion.span>
            <motion.div 
              className="h-px w-20 bg-gradient-to-l from-transparent to-blood"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="iron-frame group relative overflow-hidden aspect-video cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
            >
              {/* Image with zoom effect */}
              <motion.img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover"
                animate={{ scale: hoveredIndex === index ? 1.15 : 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              
              {/* Dark overlay on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Blood stain effect - always visible, pulses on hover */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "linear-gradient(90deg, transparent, hsl(0, 85%, 35%), transparent)" }}
                animate={{ opacity: hoveredIndex === index ? [0.5, 1, 0.5] : 0.3 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              {/* Caption overlay */}
              <motion.div 
                className="absolute inset-0 flex flex-col items-center justify-center p-6"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredIndex === index ? 1 : 0,
                  y: hoveredIndex === index ? 0 : 20
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.h3 
                  className="font-display text-xl md:text-2xl text-blood-glow mb-2 text-center"
                  animate={{ 
                    textShadow: hoveredIndex === index 
                      ? ["0 0 10px hsl(0, 100%, 50%)", "0 0 25px hsl(0, 100%, 50%)", "0 0 10px hsl(0, 100%, 50%)"]
                      : "0 0 10px hsl(0, 100%, 50%)"
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {image.caption}
                </motion.h3>
                <p className="text-bone/80 font-body italic text-center text-sm md:text-base">
                  "{image.lore}"
                </p>
              </motion.div>

              {/* Corner runes with animation */}
              {['top-3 left-3', 'top-3 right-3', 'bottom-3 left-3', 'bottom-3 right-3'].map((pos, i) => (
                <motion.div 
                  key={i}
                  className={`absolute ${pos} text-blood text-lg`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 0.8 : 0,
                    scale: hoveredIndex === index ? 1 : 0,
                    rotate: hoveredIndex === index ? [0, 360] : 0
                  }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >ᛟ</motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

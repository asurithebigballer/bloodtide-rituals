import { Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DownloadSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotateOuter = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateInner = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section ref={ref} className="relative py-40 px-4 bg-obsidian overflow-hidden">
      {/* Animated ritual circles */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
        <motion.div className="absolute inset-0 border-2 border-blood rounded-full" style={{ rotate: rotateOuter }} />
        <motion.div className="absolute inset-12 border border-blood rounded-full" style={{ rotate: rotateInner }} />
        <motion.div className="absolute inset-24 border border-blood/50 rounded-full" style={{ rotate: rotateOuter }} />

        {['ᚱ', 'ᛒ', 'ᚦ', 'ᛏ', 'ᛉ', 'ᛟ', 'ᚢ', 'ᚨ'].map((rune, i) => (
          <motion.span
            key={i}
            className="absolute text-blood text-2xl font-bold"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 45}deg) translateY(-280px)`,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          >
            {rune}
          </motion.span>
        ))}
      </motion.div>

      {/* Blood drips */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-0.5 bg-gradient-to-b from-blood via-blood to-transparent"
            style={{ left: `${5 + i * 8}%` }}
            animate={{ height: [0, 120, 0], opacity: [0, 0.6, 0] }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.h2
          className="font-display text-5xl md:text-6xl text-blood-glow mb-6 tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 20px hsl(0,100%,50%)",
                "0 0 60px hsl(0,100%,45%)",
                "0 0 20px hsl(0,100%,50%)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ANSWER THE CALL
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-bone/70 text-lg md:text-xl mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          The blood tide rises. Will you embrace its power, or be consumed by it?
        </motion.p>

        {/* BEGIN THE RITUAL (CENTERED) */}
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className="ritual-seal px-14 py-6 rounded font-display text-xl tracking-wider uppercase flex items-center gap-4 mx-auto"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              <Download className="w-6 h-6" />
            </motion.div>
            <span>Begin the Ritual</span>
          </motion.button>

          {/* Outer rings */}
          <motion.div
            className="absolute -inset-4 border border-blood/30 rounded-lg pointer-events-none"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-8 border border-blood/20 rounded-lg pointer-events-none"
            animate={{ scale: [1, 1.03, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* REQUIREMENTS (NOW BELOW BUTTON) */}
        <motion.div
          className="mt-6 inline-flex items-center gap-2 bg-iron/50 border border-blood/30 rounded px-4 py-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65 }}
        >
          <svg className="w-5 h-5 text-blood" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-bone/80 text-sm">Requires CurseForge to Import</span>
        </motion.div>

        {/* Bottom runes */}
        <motion.div className="flex justify-center gap-4 mt-20">
          {['ᛒ', 'ᛟ', 'ᛒ'].map((rune, i) => (
            <motion.span
              key={i}
              className={`text-blood/60 ${i === 1 ? 'text-3xl' : 'text-2xl'}`}
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            >
              {rune}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;

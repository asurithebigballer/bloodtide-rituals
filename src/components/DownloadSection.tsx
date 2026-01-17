import { Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const DownloadSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateOuter = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateInner = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section
      ref={ref}
      className="relative py-40 px-4 bg-obsidian overflow-hidden"
    >
      {/* Ritual circles */}
      <motion.div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] border-2 border-blood rounded-full"
          style={{ rotate: rotateOuter }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] border border-blood rounded-full"
          style={{ rotate: rotateInner }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] border border-blood/50 rounded-full"
          style={{ rotate: rotateOuter }}
        />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          className="font-display text-5xl md:text-6xl text-blood-glow mb-6 tracking-wider"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ANSWER THE CALL
        </motion.h2>

        <motion.p
          className="text-bone/70 text-lg md:text-xl mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The blood tide rises. Will you embrace its power, or be consumed by it?
        </motion.p>

        {/* Button + requirement */}
        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Download button */}
          <div className="relative">
            <a
              href="/modpacks/BloodtideModpack.zip"
              download
              className="inline-block"
            >
              <motion.button
                type="button"
                className="ritual-seal px-16 py-6 rounded font-display text-xl tracking-wider uppercase flex items-center gap-4"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <Download className="w-6 h-6" />
                </motion.div>
                BEGIN THE RITUAL
              </motion.button>
            </a>

            {/* Pulse rings */}
            <motion.div
              className="absolute -inset-4 border border-blood/30 rounded-lg pointer-events-none"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -inset-8 border border-blood/20 rounded-lg pointer-events-none"
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>

          {/* Requirement notice */}
          <div className="flex items-center gap-2 bg-iron/60 border border-blood/30 rounded px-4 py-2">
            <svg
              className="w-5 h-5 text-blood"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-bone/80 text-sm">
              Requires CurseForge to Import
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;

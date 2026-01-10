import { Download } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section className="relative py-32 px-4 bg-obsidian overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(0_100%_20%_/_0.15)_0%,_transparent_50%)]" />
        {/* Animated blood drips effect */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-blood to-transparent opacity-30" />
        <div className="absolute top-0 left-1/3 w-px h-48 bg-gradient-to-b from-blood to-transparent opacity-20" />
        <div className="absolute top-0 right-1/4 w-px h-40 bg-gradient-to-b from-blood to-transparent opacity-25" />
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-blood to-transparent opacity-30" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Ritual circle decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-10">
          <div className="absolute inset-0 border-2 border-blood rounded-full animate-spin" style={{ animationDuration: '60s' }} />
          <div className="absolute inset-8 border border-blood rounded-full animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
          <div className="absolute inset-16 border border-blood/50 rounded-full animate-spin" style={{ animationDuration: '30s' }} />
        </div>

        {/* Section header */}
        <h2 className="font-display text-4xl md:text-5xl text-blood-glow mb-6 tracking-wider relative">
          ANSWER THE CALL
        </h2>
        
        <p className="text-bone/70 font-body text-lg md:text-xl mb-4 max-w-xl mx-auto">
          The blood tide rises. Will you embrace its power, or be consumed by it?
        </p>

        {/* Requirements notice */}
        <div className="inline-flex items-center gap-2 bg-iron/50 border border-blood/30 rounded px-4 py-2 mb-10">
          <svg className="w-5 h-5 text-blood" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-bone/80 text-sm font-body">Requires CurseForge to Import</span>
        </div>

        {/* Download button - Ritual Seal */}
        <div className="relative inline-block">
          <button className="ritual-seal px-12 py-5 rounded font-display text-xl tracking-wider text-primary-foreground uppercase flex items-center gap-4 mx-auto">
            <Download className="w-6 h-6" />
            <span>Begin the Ritual</span>
          </button>
          
          {/* Decorative sigil around button */}
          <div className="absolute -inset-8 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 200 100" fill="none">
              {/* Top corners */}
              <path d="M10 20 L10 10 L20 10" stroke="hsl(0, 85%, 35%)" strokeWidth="1" opacity="0.5" />
              <path d="M190 20 L190 10 L180 10" stroke="hsl(0, 85%, 35%)" strokeWidth="1" opacity="0.5" />
              {/* Bottom corners */}
              <path d="M10 80 L10 90 L20 90" stroke="hsl(0, 85%, 35%)" strokeWidth="1" opacity="0.5" />
              <path d="M190 80 L190 90 L180 90" stroke="hsl(0, 85%, 35%)" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <span className="text-blood/60 text-2xl rune-pulse">ᛒ</span>
          <div className="h-px w-16 bg-blood/30" />
          <span className="text-blood/60 text-3xl rune-pulse" style={{ animationDelay: '0.5s' }}>ᛟ</span>
          <div className="h-px w-16 bg-blood/30" />
          <span className="text-blood/60 text-2xl rune-pulse" style={{ animationDelay: '1s' }}>ᛒ</span>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

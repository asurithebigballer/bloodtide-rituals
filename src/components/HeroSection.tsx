import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      
      {/* Blood mist effect */}
      <div className="blood-mist" />
      
      {/* Animated fog layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blood-dark/20 via-transparent to-blood-dark/20 animate-drift" />
      </div>
      
      {/* Lightning flash overlay */}
      <div className="absolute inset-0 bg-foreground/5 animate-lightning pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Decorative runes above title */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-60">
          <span className="text-blood-glow text-2xl rune-pulse">◆</span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blood to-transparent" />
          <span className="text-blood-glow text-3xl rune-pulse" style={{ animationDelay: '0.5s' }}>ᛟ</span>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blood to-transparent" />
          <span className="text-blood-glow text-2xl rune-pulse" style={{ animationDelay: '1s' }}>◆</span>
        </div>
        
        {/* Main title */}
        <h1 className="bloodtide-title text-6xl md:text-8xl lg:text-9xl mb-6 tracking-widest animate-pulse-glow">
          BLOODTIDE
        </h1>
        
        {/* Subtitle */}
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-bone/90 tracking-wide mb-4 font-medium">
          "The land remembers. The tide demands blood."
        </p>
        
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mt-8 mb-12">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-blood" />
          <span className="text-blood text-xl">⚔</span>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-blood" />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-bone/60 text-sm font-body tracking-wider uppercase">Descend</span>
          <svg 
            className="w-6 h-6 text-blood-glow" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

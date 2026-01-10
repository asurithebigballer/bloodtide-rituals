const LoreSection = () => {
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
    <section className="relative py-32 px-4 bg-obsidian overflow-hidden">
      {/* Animated background runes */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-8xl text-blood rune-pulse">ᚱ</div>
        <div className="absolute top-40 right-20 text-6xl text-blood rune-pulse" style={{ animationDelay: '1s' }}>ᛒ</div>
        <div className="absolute bottom-32 left-1/4 text-7xl text-blood rune-pulse" style={{ animationDelay: '0.5s' }}>ᚦ</div>
        <div className="absolute bottom-20 right-1/3 text-5xl text-blood rune-pulse" style={{ animationDelay: '1.5s' }}>ᛏ</div>
        <div className="absolute top-1/2 left-1/2 text-9xl text-blood rune-pulse" style={{ animationDelay: '2s' }}>ᛉ</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl text-blood-glow mb-4 tracking-wider">
            THE LORE
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blood" />
            <span className="text-blood text-lg">◆</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blood" />
          </div>
        </div>

        {/* Lore panels */}
        <div className="space-y-16">
          {loreTexts.map((lore, index) => (
            <div 
              key={index}
              className="scroll-panel p-8 md:p-12 relative group"
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-blood/50" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-blood/50" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-blood/50" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-blood/50" />
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-bone/90 font-body italic leading-relaxed mb-6 text-center">
                "{lore.quote}"
              </blockquote>
              
              {/* Attribution */}
              <p className="text-blood/80 text-sm md:text-base font-display tracking-wider text-center">
                {lore.attribution}
              </p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blood/0 via-blood/5 to-blood/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoreSection;

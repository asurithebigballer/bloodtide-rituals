import { useState } from 'react';
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
    <section className="relative py-32 px-4 bg-gradient-to-b from-obsidian via-background to-obsidian overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(0_100%_30%_/_0.05)_0%,_transparent_70%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl text-blood-glow mb-4 tracking-wider">
            VISIONS OF BLOODTIDE
          </h2>
          <p className="text-bone/60 font-body text-lg">
            Glimpses into a world consumed by crimson tides
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blood" />
            <span className="text-blood text-lg">⚔</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-blood" />
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="iron-frame group relative overflow-hidden aspect-video cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Dark overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-90' : 'opacity-0'}`} />
              
              {/* Blood stain effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blood to-transparent opacity-50" />
              
              {/* Caption overlay */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h3 className="font-display text-xl md:text-2xl text-blood-glow mb-2 text-center">
                  {image.caption}
                </h3>
                <p className="text-bone/80 font-body italic text-center text-sm md:text-base">
                  "{image.lore}"
                </p>
              </div>

              {/* Corner runes */}
              <div className={`absolute top-3 left-3 text-blood text-lg transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-70' : 'opacity-0'}`}>ᛟ</div>
              <div className={`absolute top-3 right-3 text-blood text-lg transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-70' : 'opacity-0'}`}>ᛟ</div>
              <div className={`absolute bottom-3 left-3 text-blood text-lg transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-70' : 'opacity-0'}`}>ᛟ</div>
              <div className={`absolute bottom-3 right-3 text-blood text-lg transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-70' : 'opacity-0'}`}>ᛟ</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

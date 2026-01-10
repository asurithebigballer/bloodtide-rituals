import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/HeroSection';
import LoreSection from '@/components/LoreSection';
import GallerySection from '@/components/GallerySection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <main>
        <HeroSection />
        <LoreSection />
        <GallerySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

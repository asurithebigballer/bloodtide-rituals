const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-background border-t border-iron">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo/Title */}
        <h3 className="font-display text-2xl text-blood tracking-widest mb-4">
          BLOODTIDE
        </h3>
        
        {/* Tagline */}
        <p className="text-bone/50 font-body text-sm italic mb-6">
          A Minecraft Forge Modpack
        </p>
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-iron" />
          <span className="text-blood/40 text-xs">◆</span>
          <div className="h-px w-12 bg-iron" />
        </div>
        
        {/* Copyright */}
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Bloodtide. The tide demands blood.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

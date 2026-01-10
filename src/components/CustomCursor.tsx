import { useEffect, useState, useCallback } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const addTrailPoint = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    setTrail(prev => [...prev.slice(-8), { x, y, id }]);
    
    setTimeout(() => {
      setTrail(prev => prev.filter(point => point.id !== id));
    }, 500);
  }, []);

  useEffect(() => {
    let lastTrailTime = 0;
    
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      if (Date.now() - lastTrailTime > 30) {
        addTrailPoint(e.clientX, e.clientY);
        lastTrailTime = Date.now();
      }
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', showCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', showCursor);
    };
  }, [addTrailPoint]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail particles */}
      {trail.map((point) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x,
            top: point.y,
          }}
        />
      ))}
      
      {/* Main cursor - Trident */}
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="glow-blood"
          style={{ transform: 'rotate(-45deg)' }}
        >
          {/* Trident shape */}
          <path
            d="M16 2L16 30"
            stroke="hsl(0, 100%, 50%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Center prong */}
          <path
            d="M16 2L16 8"
            stroke="hsl(0, 100%, 60%)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Left prong */}
          <path
            d="M10 8L10 2L13 5"
            stroke="hsl(0, 100%, 50%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Right prong */}
          <path
            d="M22 8L22 2L19 5"
            stroke="hsl(0, 100%, 50%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cross guard */}
          <path
            d="M12 12L20 12"
            stroke="hsl(0, 85%, 35%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Glow effect */}
          <circle
            cx="16"
            cy="5"
            r="4"
            fill="hsl(0, 100%, 50%)"
            opacity="0.3"
            className="animate-pulse"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;

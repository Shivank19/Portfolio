import React, { useEffect, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5, 
  className = '',
  id 
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    const element = document.getElementById(id || '');
    if (element) {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setElementHeight(rect.height);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  const isInView = scrollY + window.innerHeight > elementTop && scrollY < elementTop + elementHeight;
  const yPos = isInView ? (scrollY - elementTop) * speed : 0;

  return (
    <div 
      id={id}
      className={`relative ${className}`}
      style={{
        transform: `translateY(${yPos}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
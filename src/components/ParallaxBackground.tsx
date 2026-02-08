import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main floating shapes with enhanced animations */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-accent-600/15 to-highlight-600/15 blur-3xl animate-gentle-float"
        style={{
          top: '10%',
          left: '10%',
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />

      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-accent-600/18 to-primary-600/10 blur-2xl animate-float-reverse"
        style={{
          top: '60%',
          right: '15%',
          transform: `translateY(${scrollY * -0.03}px)`,
        }}
      />

      <div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-highlight-600/12 to-accent-600/12 blur-3xl animate-slow-drift"
        style={{
          bottom: '20%',
          left: '20%',
          transform: `translateY(${scrollY * 0.015}px)`,
        }}
      />

      {/* Additional floating elements for more dynamic background */}
      <div
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-accent-500/10 to-highlight-500/10 blur-2xl animate-drift"
        style={{
          top: '30%',
          right: '30%',
          transform: `translateY(${scrollY * 0.01}px)`,
        }}
      />

      <div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-highlight-600/16 to-accent-600/16 blur-xl animate-drift-delay-1"
        style={{
          top: '80%',
          left: '60%',
          transform: `translateY(${scrollY * -0.02}px)`,
        }}
      />

      <div
        className="absolute w-56 h-56 rounded-full bg-gradient-to-br from-accent-500/12 to-primary-500/8 blur-2xl animate-gentle-float-delay-1"
        style={{
          top: '45%',
          left: '5%',
          transform: `translateY(${scrollY * 0.025}px)`,
        }}
      />

      {/* Additional continuous floating elements */}
      <div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-highlight-400/10 to-accent-400/10 blur-2xl animate-slow-drift-delay-1"
        style={{
          top: '25%',
          left: '75%',
          transform: `translateY(${scrollY * 0.018}px)`,
        }}
      />

      <div
        className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-highlight-500/14 to-accent-500/14 blur-xl animate-gentle-float-delay-2"
        style={{
          bottom: '60%',
          right: '5%',
          transform: `translateY(${scrollY * -0.025}px)`,
        }}
      />

      <div
        className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-accent-400/8 to-highlight-400/8 blur-2xl animate-slow-drift-delay-2"
        style={{
          bottom: '10%',
          left: '40%',
          transform: `translateY(${scrollY * 0.012}px)`,
        }}
      />
      {/* Subtle pulsing orbs */}
      <div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-accent-400/18 to-highlight-600/18 blur-lg animate-subtle-pulse"
        style={{
          top: '15%',
          right: '10%',
          transform: `translateY(${scrollY * 0.008}px)`,
        }}
      />

      <div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-highlight-400/20 to-accent-600/20 blur-lg animate-subtle-pulse-delay-1"
        style={{
          bottom: '35%',
          right: '25%',
          transform: `translateY(${scrollY * -0.012}px)`,
        }}
      />

      <div
        className="absolute w-18 h-18 rounded-full bg-gradient-to-br from-accent-400/16 to-highlight-600/16 blur-lg animate-subtle-pulse-delay-2"
        style={{
          top: '70%',
          left: '15%',
          transform: `translateY(${scrollY * 0.015}px)`,
        }}
      />
      {/* Enhanced grid pattern with subtle animation */}
      <div
        className="absolute inset-0 opacity-[0.08] animate-slow-drift"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 204, 51, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 204, 51, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: `translateY(${scrollY * 0.01}px)`,
        }}
      />


    </div>
  );
};

export default ParallaxBackground;
import React, { useEffect, useRef } from 'react';
import Stats from 'stats.js';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  create: () => void;
  animate: () => void;
  line: () => void;
}

interface Config {
  star: {
    color: string;
    width: number;
    randomWidth: boolean;
  };
  line: {
    color: string;
    width: number;
  };
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  velocity: number;
  length: number;
  distance: number;
  radius: number;
  stars: Star[];
}

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const configRef = useRef<Config | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Initialize Stats if needed (for development)
    const stats = process.env.NODE_ENV === 'development' ? new Stats() : null;
    if (stats) {
      stats.setMode(0);
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.left = '0px';
      stats.domElement.style.top = '0px';
      document.body.appendChild(stats.domElement);
    }

    // Updated configuration with brighter colors
    const defaults: Config = {
      star: {
        color: 'rgba(186, 147, 255, 1', // Increased alpha to 0.95 for even brighter stars
        width: 2,
        randomWidth: true
      },
      line: {
        color: 'rgba(186, 147, 255, 1', // Increased alpha to 0.8 for brighter lines
        width: 0.5
      },
      position: {
        x: 0,
        y: 0
      },
      width: window.innerWidth,
      height: window.innerHeight,
      velocity: 0.2,
      length: 150,
      distance: 150,
      radius: 200,
      stars: []
    };

    configRef.current = defaults;

    // Create a star constructor
    function Star(this: Star) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (configRef.current!.velocity - (Math.random() * 0.5));
      this.vy = (configRef.current!.velocity - (Math.random() * 0.5));
      this.radius = configRef.current!.star.randomWidth ? 
        (Math.random() * configRef.current!.star.width) : 
        configRef.current!.star.width;
    }

    Star.prototype.create = function() {
      context!.beginPath();
      context!.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context!.fill();
    };

    Star.prototype.animate = function() {
      if (!configRef.current) return;
      const config = configRef.current;
      
      for (let i = 0; i < config.length; i++) {
        const star = config.stars[i];

        if (star.y < 0 || star.y > canvas.height) {
          star.vx = star.vx;
          star.vy = -star.vy;
        } else if (star.x < 0 || star.x > canvas.width) {
          star.vx = -star.vx;
          star.vy = star.vy;
        }

        star.x += star.vx;
        star.y += star.vy;
      }
    };

    Star.prototype.line = function() {
      if (!configRef.current) return;
      const config = configRef.current;
      const length = config.length;

      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
          const iStar = config.stars[i];
          const jStar = config.stars[j];

          if (
            (iStar.x - jStar.x) < config.distance &&
            (iStar.y - jStar.y) < config.distance &&
            (iStar.x - jStar.x) > -config.distance &&
            (iStar.y - jStar.y) > -config.distance
          ) {
            if (
              (iStar.x - config.position.x) < config.radius &&
              (iStar.y - config.position.y) < config.radius &&
              (iStar.x - config.position.x) > -config.radius &&
              (iStar.y - config.position.y) > -config.radius
            ) {
              context!.beginPath();
              context!.moveTo(iStar.x, iStar.y);
              context!.lineTo(jStar.x, jStar.y);
              context!.stroke();
              context!.closePath();
            }
          }
        }
      }
    };

    // Setup canvas
    const setCanvas = () => {
      if (!configRef.current) return;
      canvas.width = configRef.current.width;
      canvas.height = configRef.current.height;
    };

    // Setup context
    const setContext = () => {
      if (!configRef.current) return;
      context!.fillStyle = configRef.current.star.color;
      context!.strokeStyle = configRef.current.line.color;
      context!.lineWidth = configRef.current.line.width;
    };

    // Set initial pointer position
    const setInitialPosition = () => {
      if (!configRef.current) return;
      configRef.current.position = {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5
      };
    };

    // Create stars
    const createStars = () => {
      if (!configRef.current) return;
      const length = configRef.current.length;
      let star;

      context!.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < length; i++) {
        configRef.current.stars.push(new (Star as any)());
        star = configRef.current.stars[i];
        star.create();
      }

      star!.line();
      star!.animate();
    };

    // Initialize
    const init = () => {
      setCanvas();
      setContext();
      setInitialPosition();
      createStars();
    };

    // Animation loop
    const animate = () => {
      if (stats) stats.begin();
      
      createStars();
      
      if (stats) stats.end();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      if (!configRef.current) return;
      const rect = canvas.getBoundingClientRect();
      configRef.current.position.x = e.clientX - rect.left;
      configRef.current.position.y = e.clientY - rect.top;
    };

    // Handle window resize
    const handleResize = () => {
      if (!configRef.current) return;
      configRef.current.width = window.innerWidth;
      configRef.current.height = window.innerHeight;
      configRef.current.stars = [];
      cancelAnimationFrame(animationRef.current!);
      init();
      animate();
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Initialize and start animation
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (stats && stats.domElement.parentNode) {
        stats.domElement.parentNode.removeChild(stats.domElement);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[-1] bg-[rgba(5,5,5,0.85)]"></canvas>;
};

export default BackgroundAnimation;
'use client';

import React, { createContext, useContext, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type CardContextType = {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('Card components must be used within CardContainer');
  }
  return context;
};

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function CardContainer({
  children,
  className = '',
  index = 0,
}: CardContainerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 500,
    damping: 100,
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 500,
    damping: 100,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['17.5deg', '-17.5deg'],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-17.5deg', '17.5deg'],
  );

  // Cache dimensions to avoid forced reflows - only measure on mount/resize
  const dimensionsRef = useRef<{ width: number; height: number } | null>(null);
  const rafIdRef = useRef<number | null>(null);

  // Measure on mount and resize using ResizeObserver (non-blocking, async)
  React.useEffect(() => {
    if (!ref.current) return;

    const updateDimensions = () => {
      if (ref.current) {
        // Use offsetWidth/offsetHeight instead of getBoundingClientRect for initial measurement
        dimensionsRef.current = {
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        };
      }
    };

    // Initial measurement
    updateDimensions();

    // Use ResizeObserver for responsive updates (non-blocking)
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !dimensionsRef.current) return;

    const { width, height } = dimensionsRef.current;
    
    // Calculate relative position without getBoundingClientRect
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    // Cancel previous RAF to debounce and batch updates
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    
    // Use requestAnimationFrame to batch updates and avoid blocking main thread
    rafIdRef.current = requestAnimationFrame(() => {
      x.set(xPct);
      y.set(yPct);
      rafIdRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    // Cancel any pending RAF
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    
    // Use RAF for smooth exit animation
    requestAnimationFrame(() => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    });
  };

  return (
    <CardContext.Provider value={{ isHovered, setIsHovered }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.42, 0, 0.58, 1],
        }}
        className={`group relative ${className}`}
      >
        <div
          style={{
            transform: 'translateZ(75px)',
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </div>
      </motion.div>
    </CardContext.Provider>
  );
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div
      className={`h-full p-8 bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  );
}

interface CardItemProps {
  children: React.ReactNode;
  className?: string;
  translateZ?: number;
}

export function CardItem({
  children,
  className = '',
  translateZ = 0,
}: CardItemProps) {
  const { isHovered } = useCardContext();

  return (
    <motion.div
      style={{
        transform: `translateZ(${translateZ}px)`,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

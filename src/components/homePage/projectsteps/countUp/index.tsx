'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpComponentProps {
  targetNumber: number;
}

export const CountUpComponent: React.FC<CountUpComponentProps> = ({ targetNumber }) => {
  const [count, setCount] = useState<number>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && count === 0) {
      let currentCount = 0;
      const increment = 1;
      const duration = 2000; // Duration for the count up animation in ms
      const stepTime = Math.abs(Math.floor(duration / (targetNumber / increment)));

      const timer = setInterval(() => {
        currentCount += increment;
        setCount(currentCount);
        if (currentCount >= targetNumber) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => {
        clearInterval(timer);
      };
    }
  }, [inView, targetNumber, count]);

  return (
    <div ref={ref}>
      <p>{count}</p>
    </div>
  );
};


import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (elementRef: React.RefObject<HTMLElement>, options = {}) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const animation = gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top bottom-=100',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
        ...options
      }
    });

    return () => {
      animation.kill();
    };
  }, [elementRef, options]);
};
import React, { useState, useEffect, useRef } from 'react';

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const Section = ({ children, id, className = '' }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <section ref={ref} id={id} className={`section ${className} ${isVisible ? 'section-visible' : ''}`}>
      {children}
    </section>
  );
};

export default Section;
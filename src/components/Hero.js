import React, { useEffect } from 'react';

const Hero = ({ children, hero, id }) => {
  useEffect(() => {
    const el =
      document.querySelector('#movBkg') || document.querySelector('#movBackg');
    if (el) {
      const onMouseMove = e => {
        let moveX = (e.clientX * -1) / 20;
        let moveY = (e.clientY * -1) / 15;
        el.style.setProperty('--x', moveX + 'px');
        el.style.setProperty('--y', moveY + 'px');
      };
      el.addEventListener('mousemove', onMouseMove);
      return () => {
        el.removeEventListener('mousemove', onMouseMove);
      };
    }
  }, []);

  return (
    <header className={hero} id={id}>
      {children}
    </header>
  );
};

Hero.defaultProps = {
  hero: 'defaultHero'
};
export default Hero;

import React, { useRef, useState } from 'react';
import style from './Burger.module.scss';

const Burger = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const burger = useRef<HTMLDivElement>(null);

  const handler = () => {
    setActiveBurger(!activeBurger);
  };

  return (
    <div role="presentation" ref={burger} className={(activeBurger) ? [style.burger, style.active].join(' ') : style.burger} onClick={handler}>
      <span />
    </div>
  );
};

export default Burger;

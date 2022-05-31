import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './MainMenu.module.scss';

const MainMenu = () => {
  console.log('mainMenu');
  return (
    <div className={style.mainMenu}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <NavLink to="/" className={({ isActive }) => `${isActive ? style.active : ''}`}>Вся доска</NavLink>
          <NavLink to="/cars" className={({ isActive }) => `${isActive ? style.active : ''}`}>Автомобили</NavLink>
          <NavLink to="/accessories" className={({ isActive }) => `${isActive ? style.active : ''}`}>Аксессуары</NavLink>
          <NavLink to="/furniture" className={({ isActive }) => `${isActive ? style.active : ''}`}>Мебель</NavLink>
          <NavLink to="/clothing" className={({ isActive }) => `${isActive ? style.active : ''}`}>Одежда</NavLink>
          <NavLink to="/sport" className={({ isActive }) => `${isActive ? style.active : ''}`}>Спорт</NavLink>
          <NavLink to="/technics" className={({ isActive }) => `${isActive ? style.active : ''}`}>Техника</NavLink>
          <NavLink to="/forHome" className={({ isActive }) => `${isActive ? style.active : ''}`}>Товары для дома</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

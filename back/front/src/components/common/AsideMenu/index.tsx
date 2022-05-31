import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './AsideMenu.module.scss';

const AsideMenu = () => {
  const [myAdsOpen, setMyAdsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/ads') {
      setMyAdsOpen(true);
    }
  }, [location]);

  return (
    <aside>
      <div className={style.asideMenuContainer}>
        <div className={style.asideMenu}>
          <ul className={style.asideMenuList}>
            <li className={style.asideMenuitem}>
              <Link to="/profile">
                <span className={style.asideMenuFoto} />
                <div className={style.asideMenuNameStatus}>
                  <p className={[style.asideMenuText, style.asideMenuName].join(' ')}>Alexandr</p>
                  <p className={style.asideMenuSubText}>Админ-меню</p>
                </div>
              </Link>
            </li>
            <li className={style.asideMenuitem}>
              <Link to="/ads" className={myAdsOpen ? style.openLink : ''}>
                <span className={style.asideMenuLineActiveLink} />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.66666 2.5H6.66666C7.55072 2.5 8.39857 2.85119 9.02369 3.47631C9.64881 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 9.73661 16.2011 9.26776 15.7322C8.79892 15.2634 8.16304 15 7.5 15H1.66666V2.5Z" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className={style.asideMenuText}>Обьявдения</p>
              </Link>
            </li>
            <li className={style.asideMenuitem}>
              <Link to="/">
                <span className={style.asideMenuLineActiveLink} />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.5 2.5H17.5V7.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.33334 11.6667L17.5 2.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className={style.asideMenuText}>Выход</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;

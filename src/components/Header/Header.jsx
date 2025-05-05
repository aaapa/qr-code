import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [ isActive, setIsActive ] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsActive(prev => !prev);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const handleResize = () => {
      const widthRem = window.innerWidth / 16;
      if (widthRem <= 62) {
        if (!isActive) {
          menu.setAttribute('inert', '');
        } else {
          menu.removeAttribute('inert');
        }
      } else {
        menu.removeAttribute('inert');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);


  return (
   <header className="header">
    <div className="header__inner container">
     <Link className="header__logo" to="/">Генератор QR-кодов</Link>
     <div className={`header__menu${isActive ? ' open' : ''}`} ref={menuRef} id="header-menu">
      <nav className="header__nav">
      <ul className="header__list">
       <li>
        <Link className="header__link" to="/qr-code">Генератор QR-кодов</Link>
       </li>
       <li>
        <Link className="header__link" to="/qr-code/generate-history">История генерирования</Link>
       </li>
       <li>
        <Link className="header__link" to="/qr-code/scan">Скан QR-кодов</Link>
       </li>
       <li>
        <Link className="header__link" to="/qr-code/scan-history">История сканирования</Link>
       </li>
      </ul>
      </nav>
     </div>
     <button className={`header__menu-button${isActive ? ' open' : ''}`} onClick={toggleMenu} aria-controls="header-menu" aria-haspopup="menu" aria-expanded={isActive}>
      <span className="header__menu-button-icon">
       <span className="header__menu-button-line"></span>
       <span className="header__menu-button-line"></span>
       <span className="header__menu-button-line"></span>
      </span>
      <span className="visually-hidden">Мобильное меню</span>
     </button>
    </div>
   </header>
  );
};

export default Header;
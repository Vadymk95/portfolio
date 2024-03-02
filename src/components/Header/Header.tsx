import { FC } from 'react';
import logo from '@/assets/images/logo.png';

import './Header.scss';

export const Header: FC = () => {
  return (
    <header className="header header-footer">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#portfolio">What can I do?</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

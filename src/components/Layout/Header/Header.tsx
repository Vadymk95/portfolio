import { FC } from 'react';
import { Link } from 'react-scroll';
import logo from '@/assets/images/logo.png';
import { Links } from '@/constants';

import './Header.scss';

export const Header: FC = () => {
  const links = Object.values(Links);

  return (
    <header className="header header-footer">
      <Link to={Links.home.target} smooth duration={500} className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      <ul className="nav-links">
        {links.map(({ name, target }, index) => (
          <Link key={index} to={target} smooth offset={-88} duration={600}>
            {name}
          </Link>
        ))}
      </ul>
    </header>
  );
};
import { FC } from 'react';
import { Link } from 'react-scroll';
import logo from '@/assets/images/logo.png';
import { Links } from '@/constants';

import './Header.scss';

export const Header: FC = () => {
  return (
    <header className="header header-footer">
      <Link to={Links[0].target} smooth duration={500} className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      <ul className="nav-links">
        {Links.map(({ name, target }, index) => (
          <Link key={index} to={target} smooth duration={500}>
            {name}
          </Link>
        ))}
      </ul>
    </header>
  );
};

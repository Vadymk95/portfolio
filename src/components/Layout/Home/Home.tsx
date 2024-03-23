import { FC } from 'react';
import { Element } from 'react-scroll';

import './Home.scss';
import { Links } from '@/constants';

export const Home: FC = () => {
  return (
    <section className="home section">
      <Element name={Links.home.target}>{Links.home.name}</Element>
    </section>
  );
};

import { FC } from 'react';
import { Element } from 'react-scroll';

import './About.scss';
import { Links } from '@/constants';

export const About: FC = () => {
  return (
    <section className="about section">
      <Element name={Links.about.target}>{Links.about.name}</Element>
    </section>
  );
};

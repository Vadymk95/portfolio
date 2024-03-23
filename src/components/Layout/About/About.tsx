import { FC } from 'react';
import { Element } from 'react-scroll';

import './About.scss';
import { Links } from '@/constants';

export const About: FC = () => {
  return (
    <section className="about section">
      <Element name={Links.about.target} />
      <h3 className="about__title">About me</h3>
    </section>
  );
};

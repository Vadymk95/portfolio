import { FC } from 'react';
import { Element } from 'react-scroll';

import './About.scss';
import { Links } from '@/constants';

export const About: FC = () => {
  return (
    <section className="about section">
      <Element name={Links.about.target} />
      <h3 className="about__title">About Me</h3>
      <div className="about__text-container">
        <p className="about__text wix-madefor">
          Specializing in responsive design and SPAs
        </p>
      </div>
    </section>
  );
};

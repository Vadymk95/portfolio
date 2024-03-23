import { FC } from 'react';
import { Element } from 'react-scroll';

import './Home.scss';
import { Links } from '@/constants';

export const Home: FC = () => {
  return (
    <section className="home section">
      <Element name={Links.home.target} />
      <div className='home__text-container'>
        <h1 className="home__title wix-madefor">Cutting Edge Frontend</h1>
        <p className='home__subtitle'>
          Welcome to my personal portfolio showcasing years of experience in
          frontend technologies, innovative projects
        </p>

        <button className="home__button">Explore My Work</button>
      </div>
    </section>
  );
};

import { FC } from 'react';
import { Element, Link } from 'react-scroll';
import { Links } from '@/constants';
import mac from '@/assets/images/mac.jpg';

import './Home.scss';

export const Home: FC = () => {
  return (
    <section className="home section">
      <Element name={Links.home.target} />
      <div className="home__text-container">
        <h1 className="home__title wix-madefor">Cutting Edge Frontend</h1>
        <p className="home__subtitle">
          Welcome to my personal portfolio showcasing years of experience in
          frontend technologies, innovative projects
        </p>
        <div>
          <Link
            to={Links.work.target}
            smooth
            offset={-88}
            duration={600}
            className="home__button"
          >
            Explore My Work
          </Link>
        </div>
        <div className="home__img-container">
          <img className="home__img" src={mac} alt="mac" />
        </div>
      </div>
    </section>
  );
};

import { FC } from 'react';
import { Element } from 'react-scroll';

import './Work.scss';
import { Links } from '@/constants';

export const Work: FC = () => {
  return (
    <section className="work section">
      <Element name={Links.work.target} />
      <h3 className="work__title">Exp</h3>
    </section>
  );
};

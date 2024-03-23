import { FC } from 'react';
import './Main.scss';
import { Home, About, Work } from '@/components';

export const Main: FC = () => {
  return (
    <main className="main">
      <Home />
      <About />
      <Work />
    </main>
  );
};

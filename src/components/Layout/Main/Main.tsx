import { FC } from 'react';
import './Main.scss';
import { Home, About } from '@/components';

export const Main: FC = () => {
  return (
    <main className="main">
      <Home />
      <About />
    </main>
  );
};

import { FC } from 'react';
import '@/App.css';
import { Header, Main, Footer } from '@/components';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

import { FunctionComponent } from 'react';
import style from './App.module.scss';
import logo from './logo.svg';

export const App: FunctionComponent = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={style.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

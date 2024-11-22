import { useState } from 'react';
import Header from '../Header/Header.jsx';
import s from './Welcome.module.css';
import { GoArrowRight } from "react-icons/go";

const Welcome = () => {
  const [isStart, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  return (
    <>
      {isStart && <Header />}

      {!isStart && (
        <div className={s.container}>
          <div className={s.welcome}>
            <h2 className={s.begin}>Welcome to my portfolio 🦹</h2>
          </div>
          <div className={s.some_words}>
            <div className={s.content}>
              <p className={s.txt}>I am so happy to see you here</p>
              <p className={s.txt}>Now you will see something about me!</p>
              <button className={s.btn_welcome} onClick={handleStart}>
                <GoArrowRight size="60px" fill="black" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;

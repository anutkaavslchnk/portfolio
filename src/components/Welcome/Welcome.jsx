import { useState } from "react";
import Header from "../Header/Header.jsx";
import s from "./Welcome.module.css";

const Welcome = () => {
  const [isStart, setStart] = useState(false);

  const handleAnimationEnd = () => {
    setStart(true);
  };

  return (
    <>
      {isStart && <Header />}

      {!isStart && (
        <div className={s.container}>
          <div className={s.welcome}>
            <h2 className={s.begin} onAnimationEnd={handleAnimationEnd}>
              ANNA VASYLCHENKO 🤍{" "}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;

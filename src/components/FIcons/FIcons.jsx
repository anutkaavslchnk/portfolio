import { useContext, useEffect, useState } from "react";
import symbolDefs from "/public/symbol-defs.svg";
import s from "./FIcons.module.css";
import { ThemeContext } from "../Header/Header";

const FIcons = () => {
      const {theme}=useContext(ThemeContext);
    const [icons, setIcons] = useState([]);

    useEffect(() => {
      const interval = setInterval(() => {
        const id = Math.random().toString(36).substr(2, 9);
        const newIcon = {
          id,
          left: Math.random() * 90 + "vw",
          bottom: "-50px",
          size: Math.random() * 20 + 20 + "px", 
        };
  
        setIcons((prev) => [...prev, newIcon]);
  
        setTimeout(() => {
          setIcons((prev) => prev.filter((icon) => icon.id !== id));
        }, 4000);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
          <div className={theme=="dark"? s.dark : ''}>
      <div className={s.iconContainer}>
        {icons.map((icon) => (
          <svg
            key={icon.id}
            className={s.floatingIcon}
            style={{ left: icon.left, width: icon.size, height: icon.size }}
          >
            <use href={`${symbolDefs}#progr`} />
          </svg>
        ))}
      </div>
      </div>
    );
  };

export default FIcons;

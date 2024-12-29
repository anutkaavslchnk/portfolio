import { useContext } from 'react';
import { ThemeContext } from '../Header/Header';
import s from './MoreInfo.module.css';

const MoreInfo = () => {
  const {theme}=useContext(ThemeContext);
  return (
    <div className={theme=="dark"? s.dark : ''}>
      
      <p className={s.par}>Moreover, I adore of listening the music, i like Rammstein and going to the gym. Also i like reading detective books</p>
      
      </div>
  )
  
};

export default MoreInfo;

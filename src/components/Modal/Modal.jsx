
import { NavLink } from 'react-router-dom';
import s from './Modal.module.css'
import { GoX } from "react-icons/go";
import { useContext } from 'react';
import { ThemeContext } from '../Header/Header';
const Modal = ({close}) => {

  const {theme}=useContext(ThemeContext);



  return (
  <>
  {close && (

<div className={theme === 'dark' ? s.dark : ''}>

<div className={s.is_hidden}>

<button type="button" className={s.menu_btn_close} onClick={close}><GoX className={s.cl_m} color="black" size="30px"/>
</button>

<div>

<nav className={s.list}>
<NavLink to='/' className={s.items} onClick={close}>About me</NavLink>
<NavLink to ='/projects'className={s.items} onClick={close}>Projects</NavLink>
<NavLink to='/contact' className={s.items} onClick={close}>Contact</NavLink>
</nav>
</div>
</div>
</div>
  )}

  </>
);
};

export default Modal;

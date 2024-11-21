
import { NavLink } from 'react-router-dom';
import s from './Modal.module.css'
const Modal = ({close}) => {

  



  return (
  <>
  {close && (


<div className={s.is_hidden}>

<button type="button" className={s.menu_btn_close} onClick={close}><svg className={s.close_icon} width="8" height="8">
  <use href="/src/img/icons.svg#icon-close-black-18dp-2-1"></use>
</svg></button>

<div>

<nav className={s.list}>
<NavLink to ='/'className={s.items}>Projects</NavLink>
<NavLink to='/education' className={s.items}>Education</NavLink>
<NavLink to='/contact' className={s.items}>Contact</NavLink>
</nav>
</div>
</div>

  )}

  </>
);
};

export default Modal;

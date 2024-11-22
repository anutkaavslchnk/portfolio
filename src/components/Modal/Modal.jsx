
import { NavLink } from 'react-router-dom';
import s from './Modal.module.css'
import { GoX } from "react-icons/go";
const Modal = ({close}) => {

  



  return (
  <>
  {close && (


<div className={s.is_hidden}>

<button type="button" className={s.menu_btn_close} onClick={close}><GoX fill="black" size="30px"/>
</button>

<div>

<nav className={s.list}>
<NavLink to='/' className={s.items} onClick={close}>About me</NavLink>
<NavLink to ='/projects'className={s.items} onClick={close}>Projects</NavLink>
<NavLink to='/contact' className={s.items} onClick={close}>Contact</NavLink>
</nav>
</div>
</div>

  )}

  </>
);
};

export default Modal;

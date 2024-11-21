import { useState } from 'react';
import s from './Header.module.css';
import Modal from '../Modal/Modal.jsx';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const [isOpen, setOpen]=useState(false);

    const handleClick=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

  return (


    <header>
        <div className={s.container}>


        <button className={s.btn_header} onClick={handleClick}>
        <div className={s.burger_menu}>
            <div className={s.burder_items}></div>
            <div className={s.burder_items}></div>
            <div className={s.burder_items}></div>
            
        </div>
        </button>
        </div>
        <div className={s.container_tab_desk}>

            <nav className={s.list}>
                <NavLink to ='/'className={s.items}>Projects</NavLink>
                <NavLink to='/education' className={s.items}>Education</NavLink>
                <NavLink to='/contact' className={s.items}>Contact</NavLink>
            </nav>
        </div>
        
   
        
{isOpen && <Modal close={handleClose}></Modal> }

  </header>
  )
};

export default Header;

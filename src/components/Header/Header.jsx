import { useState } from 'react';
import s from './Header.module.css';
import Modal from '../Modal/Modal.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';

import Contact from '../../pages/Contact/Contact.jsx';
import Projects from '../../pages/Projects/Projects.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import AboutMe from '../../pages/AboutMe/AboutMe.jsx';
import MoreInfo from '../MoreInfo/MoreInfo.jsx';
import Details from '../../pages/Details/Details.jsx';


const Header = () => {

    const [isOpen, setOpen]=useState(false);

    const handleClick=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

  return (
    <>

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
                <NavLink to='/' className={s.items}>About me</NavLink>
                <NavLink to ='/projects'className={s.items}>Projects</NavLink>
                <NavLink to='/contact' className={s.items}>Contact</NavLink>
            </nav>
        </div>
        <Routes>
    <Route path="/" element={<AboutMe/>}>
    <Route path="/moreInfo" element={<MoreInfo/>}></Route>
    </Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/projects/:id" element={<Details />} />
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
   
        
{isOpen && <Modal close={handleClose}></Modal> }

  </header>
  </>
  )
};

export default Header;

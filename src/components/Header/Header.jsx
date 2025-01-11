import { createContext, useEffect, useState } from 'react';
import s from './Header.module.css';
import Modal from '../Modal/Modal.jsx';
import { NavLink, Route, Routes } from 'react-router-dom';

import Contact from '../../pages/Contact/Contact.jsx';
import Projects from '../../pages/Projects/Projects.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import AboutMe from '../../pages/AboutMe/AboutMe.jsx';
import MoreInfo from '../MoreInfo/MoreInfo.jsx';
import Details from '../../pages/Details/Details.jsx';
import { LuSunMoon } from 'react-icons/lu';
import clsx from 'clsx';
export const ThemeContext=createContext();
const buildLinkClass = ({ isActive }) => {
  return clsx(s.first, isActive && s.active);
};

const Header = () => {



const [theme, setTheme]=useState('light');


    const ToogleTheme=()=>{
setTheme((curr)=>curr==="light"? "dark": "light");
    }

    useEffect(() => {
        localStorage.setItem("theme", theme);
      }, [theme]);

      useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
      }, []);
      
    const [isOpen, setOpen]=useState(false);

    const handleClick=()=>{
        setOpen(true);
    }

    const handleClose=()=>{
        setOpen(false);
    }

  return (
    <ThemeContext.Provider value={{theme, ToogleTheme}}>
<div className={theme === 'dark' ? s.dark : ''}>
<header className={s.header}>

       
        
        <div className={s.container}>
        <button className={s.btn_moon} onClick={ToogleTheme} ><LuSunMoon className={s.moon_mobile} color="black" size="40px"/></button>
        <button className={s.btn_header} onClick={handleClick}>
        <div className={s.burger_menu}>
            <div className={s.burder_items}></div>
            <div className={s.burder_items}></div>
            <div className={s.burder_items}></div>
            
        </div>
        </button>
        </div>
        
        <div className={s.container_tab_desk}>
        <button className={s.btn_moon} onClick={ToogleTheme}  ><LuSunMoon className={s.moon} color="black" size="40px" /></button>
            <nav className={s.list}>
                <NavLink  to='/' className={buildLinkClass}>About me</NavLink>
                <NavLink  to ='/projects'className={buildLinkClass}>Projects</NavLink>
                <NavLink  to='/contact' className={buildLinkClass}>Contact</NavLink>
            </nav>
        </div>

   
        
{isOpen && <Modal close={handleClose}></Modal> }

  </header>
  <Routes>
    <Route path="/" element={<AboutMe/>}>
    <Route path="/moreInfo" element={<MoreInfo/>}></Route>
    </Route>
    
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/projects/:id" element={<Details />}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
  </ThemeContext.Provider>
  )
};

export default Header;

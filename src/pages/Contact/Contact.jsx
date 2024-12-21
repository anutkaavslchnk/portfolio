
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import s from './Contact.module.css';
console.log(s);
import { IoLogoGithub } from "react-icons/io";

import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  return (
  <section className={s.cont}>
  <p className={s.contacts}>Here is my contacts:</p>
  <ul className={s.list}>
    <li className={s.item}><a href="https://github.com/anutkaavslchnk" target="_blank" ><IoLogoGithub className={s.icon} fill="black" /></a></li>
    <li className={s.item}><a href="https://www.linkedin.com/in/anna-vasylchenko-093b75282/" target="_blank"><FaLinkedin className={s.icon} fill="black"  /></a></li>
    <li className={s.item}><a href="https://t.me/annavasylchenko2006" target="_blank"><FaTelegramPlane className={s.icon} fill="black" /></a></li>
    <li className={s.item}><a  href="mailto: anna.vasylchenko2006@gmail.com" target="_blank"><BiLogoGmail className={s.icon} fill="black" /></a></li>
    <li className={s.item}><a  href="tel:" target="_blank"><BsFillTelephoneFill className={`${s.icon} ${s.itemlast}`} fill="black" /></a></li>
  </ul>
  
  </section>
  )
};

export default Contact;


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
    <li className={s.item}><a href=""  ><IoLogoGithub className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href="" ><FaLinkedin className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href="" ><FaTelegramPlane className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href=""><BiLogoGmail className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href="" ><BsFillTelephoneFill className={`${s.icon} ${s.itemlast}`} fill="black" size="30px" /></a></li>
  </ul>
  
  </section>
  )
};

export default Contact;


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
    <li className={s.item}><a href="https://github.com/anutkaavslchnk"  ><IoLogoGithub className={s.icon} fill="black" /></a></li>
    <li className={s.item}><a href="https://www.linkedin.com/in/anna-vasylchenko-093b75282/" ><FaLinkedin className={s.icon} fill="black"  /></a></li>
    <li className={s.item}><a href="https://t.me/annavasylchenko2006" ><FaTelegramPlane className={s.icon} fill="black" /></a></li>
    <li className={s.item}><a href=""><BiLogoGmail className={s.icon} fill="black" /></a></li>
    <li className={s.item}><a href="" ><BsFillTelephoneFill className={`${s.icon} ${s.itemlast}`} fill="black" /></a></li>
  </ul>
  
  </section>
  )
};

export default Contact;

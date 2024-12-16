
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import s from './Contact.module.css';
console.log(s);
import { IoLogoGithub } from "react-icons/io";

import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
const Contact = () => {
  return (
  <>
  <p className={s.order}>Here you can order the website</p>
  <p className={s.contacts}>Here is my contacts:</p>
  <ul className={s.list}>
    <li><a href=""><IoLogoGithub fill="black" size="40px" /></a></li>
    <li><a href=""><FaLinkedin fill="black" size="40px" /></a></li>
    <li><a href=""><FaTelegramPlane fill="black" size="40px" /></a></li>
    <li><a href=""><BiLogoGmail fill="black" size="40px" /></a></li>
    <li><a href=""><BsFillTelephoneFill fill="black" size="30px" /></a></li>
  </ul>
  
  </>
  )
};

export default Contact;

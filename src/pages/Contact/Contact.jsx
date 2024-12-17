
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import s from './Contact.module.css';
console.log(s);
import { IoLogoGithub } from "react-icons/io";

import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Field, Form, Formik } from 'formik';
const Contact = () => {
  return (
  <>
  <p className={s.order}>Here you can order the website</p>
  <Formik>
    <Form className={s.form}>

      <Field className={s.input} type="text" placeholder="Name and Surname"></Field>
      <Field className={s.input} type="email" placeholder="Email"></Field>
      <Field className={s.input} type="text" placeholder="Message"></Field>
      <button type="submit" className={s.btn}>Send</button>
    </Form>
  </Formik>
  <p className={s.contacts}>Here is my contacts:</p>

  <ul className={s.list}>
    <li className={s.item}><a href=""><IoLogoGithub className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href=""><FaLinkedin className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href=""><FaTelegramPlane className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href=""><BiLogoGmail className={s.icon} fill="black" size="40px" /></a></li>
    <li className={s.item}><a href=""><BsFillTelephoneFill className={s.icon} fill="black" size="30px" /></a></li>
  </ul>
  
  </>
  )
};

export default Contact;

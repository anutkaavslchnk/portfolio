import { FaLinkedin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import s from "./Contact.module.css";
console.log(s);
import { IoLogoGithub } from "react-icons/io";

import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useContext } from "react";
import { ThemeContext } from "../../components/Header/Header";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? s.dark : ""}>
      <section className={s.cont}>
        <p className={s.contacts}>Here is my contacts:</p>
        <ul className={s.list}>
          <li className={s.item}>
            <a href="https://github.com/anutkaavslchnk" target="_blank">
              <IoLogoGithub className={s.icon} fill="black" />
            </a>
          </li>
          <li className={s.item}>
            <a
              href="https://www.linkedin.com/in/anna-vasylchenko"
              target="_blank"
            >
              <FaLinkedin className={s.icon} fill="black" />
            </a>
          </li>
          <li className={s.item}>
            <a href="https://wa.me/+48783785560" target="_blank">
              <FaWhatsapp className={s.icon} fill="black" />
            </a>
          </li>
          <li className={s.item}>
            <a href="mailto: anna.vasylchenko2006@gmail.com" target="_blank">
              <BiLogoGmail className={s.icon} fill="black" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;

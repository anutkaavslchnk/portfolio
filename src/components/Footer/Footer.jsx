import { NavLink } from "react-router-dom";
import s from "./Footer.module.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../Header/Header";
import { useContext } from "react";
import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme == "dark" ? s.dark : ""}>
      <div className={s.line}></div>
      <footer className={s.footer}>
        <div className={s.cont_footer}>
          <div className={s.cont_logo}>
            <p className={s.footer_title}>Anna Vasylchenko</p>
          </div>
          <div className={s.cont_nav}>
            <nav className={s.list_footer}>
              <NavLink to="/" className={s.items_footer}>
                About me
              </NavLink>
              <NavLink to="/projects" className={s.items_footer}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={s.items_footer}>
                Contact
              </NavLink>
            </nav>
          </div>
          <div className={s.cont_contacts}></div>
          <ul className={s.list_contacts}>
            <li className={s.item_contacts}>
              <a href="https://github.com/anutkaavslchnk" target="_blank">
                <IoLogoGithub
                  className={s.icon_contacts}
                  fill="white"
                  size="40px"
                />
              </a>
            </li>
            <li className={s.item_contacts}>
              <a
                href="https://www.linkedin.com/in/anna-vasylchenko"
                target="_blank"
              >
                <FaLinkedin
                  className={s.icon_contacts}
                  fill="white"
                  size="40px"
                />
              </a>
            </li>
            <li className={s.item_contacts}>
              <a href="https://wa.me/+48783785560" target="_blank">
                <FaWhatsapp
                  className={s.icon_contacts}
                  fill="white"
                  size="40px"
                />
              </a>
            </li>
            <li className={s.item_contacts}>
              <a href="mailto: anna.vasylchenko2006@gmail.com" target="_blank">
                <BiLogoGmail
                  className={s.icon_contacts}
                  fill="white"
                  size="40px"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={s.cont_lows}>
          <PiCopyrightLight color="grey" size="20px" />
          <p className={s.title_lows}>2025</p>
          <p className={s.title_lows}>All Rights Reserved.</p>
        </div>
      </footer>
      <div className={s.line}></div>
    </div>
  );
};

export default Footer;

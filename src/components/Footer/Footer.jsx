import { NavLink } from "react-router-dom";
import s from "./Footer.module.css";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ThemeContext } from "../Header/Header";
import { useContext } from "react";
import { PiCopyrightLight } from "react-icons/pi";

const Footer = ({ hideSocials = false }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme == "dark" ? s.dark : ""}>
      <div className={s.line}></div>
      <footer className={s.footer}>
        <div className={s.cont_footer}>
          <div className={s.cont_logo}>
            <p className={s.footer_title}>Anna Vasylchenko</p>
            <p className={s.footer_subtitle}>Fullstack Engineer · AI integrations</p>
            {!hideSocials && (
              <ul className={s.list_contacts}>
                <li className={s.item_contacts}>
                  <a
                    href="https://github.com/anutkaavslchnk"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                  >
                    <IoLogoGithub className={s.icon_contacts} />
                  </a>
                </li>
                <li className={s.item_contacts}>
                  <a
                    href="https://www.linkedin.com/in/anna-vasylchenko"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <FaLinkedin className={s.icon_contacts} />
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className={s.cont_nav}>
            <nav className={s.list_footer}>
              <NavLink to="/" className={s.items_footer}>
                About me
              </NavLink>
              <NavLink to="/projects" className={s.items_footer}>
                Projects
              </NavLink>
              <NavLink to="/experience" className={s.items_footer}>
                Experience
              </NavLink>
              <NavLink to="/contact" className={s.items_footer}>
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
        <div className={s.cont_lows}>
          <PiCopyrightLight color="grey" size="20px" />
          <p className={s.title_lows}>2026</p>
          <p className={s.title_lows}>All Rights Reserved.</p>
        </div>
      </footer>
      <div className={s.line}></div>
    </div>
  );
};

export default Footer;

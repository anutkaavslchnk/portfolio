import { FaLinkedin } from "react-icons/fa";
import s from "./Contact.module.css";
import { IoLogoGithub } from "react-icons/io";

import { useContext } from "react";
import { ThemeContext } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? s.dark : s.page}>
      <section className={s.cont}>
        <p className={s.eyebrow}>Let&apos;s connect</p>
        <h1 className={s.contacts}>Have a project in mind?</h1>
        <p className={s.intro}>
          Feel free to reach out or connect with me on social media. I&apos;d be
          happy to talk about your next project.
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <a
              href="https://github.com/anutkaavslchnk"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub className={s.icon} fill="black" />
              <span>GitHub</span>
            </a>
          </li>
          <li className={s.item}>
            <a
              href="https://www.linkedin.com/in/anna-vasylchenko"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={s.icon} fill="black" />
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </section>
      <Footer hideSocials />
    </div>
  );
};

export default Contact;

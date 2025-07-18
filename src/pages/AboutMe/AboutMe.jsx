import s from "./AboutMe.module.css";
import photoMy from "/public/main.jpeg";
import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import symbolDefs from "/public/symbol-defs.svg";
import Footer from "../../components/Footer/Footer";
import { ThemeContext } from "../../components/Header/Header.jsx";
import FIcons from "../../components/FIcons/FIcons.jsx";

console.log(s);

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const handleMore = () => {
    setShowMoreInfo((prevState) => !prevState);
  };

  return (
    <>
      <main className={theme === "dark" ? s.dark : s.light}>
        <section className={s.first_section}>
          <div className={s.imgcont}>
            <img src={photoMy} alt="my-photo" className={s.photo} />
          </div>
          <div className={s.int}>
            <h2 className={s.name}>
              Hi, I am Anna,
              <br />
              Fullstack Web Developer
            </h2>
            <p className={s.par}>
              I'm a fullstack web developer with knowledge of HTML, CSS,
              Javascript, React, Typescript and Node.js. I am currently a
              student at Adam Mickiewicz University.
            </p>
            <Link
              to={showMoreInfo ? "/" : "/moreInfo"}
              className={s.moreinfo}
              onClick={handleMore}
            >
              {showMoreInfo ? "Hide" : "More information"}
            </Link>
            <Outlet></Outlet>

            <a
              href="https://drive.google.com/file/d/1qRciNOvHqTLvX62CEHwt3Q9Z7YlMn_B6/view?usp=sharing"
              target="_blank"
              className={s.btn}
            >
              My Resume
            </a>
          </div>
        </section>

        <section className={s.education_sec}>
          <div className={s.cont_edu}>
            <p className={s.par_edu}>Education</p>
          </div>

          <ul className={s.list_ed}>
            <li className={s.item_ed}>
              <p className={s.title_school}>
                UNIVERCITY IM. ADAMA MICKIEWICZA IN POZNAN
              </p>
              <p className={s.time}>Oct 2024 - Currently | Computer Science</p>
              <p className={s.degree}>Bachelor's degree</p>
            </li>
            <li className={s.item_ed}>
              <p className={s.title_school}>IT SCHOOL GOIT</p>
              <p className={s.time}>May 2023 - Nov 2024 | Web development</p>
              <p className={s.degree}>Fullstack web developer</p>
            </li>
            <li className={s.item_ed}>
              <p className={s.title_school}>
                LYCEUM №1 IN ZHYTOMYR (PHYSICS-MATH)
              </p>
              <p className={s.time}> Sep 2020 - Oct 2024</p>
              <p className={s.degree}>Full General Secondary Education</p>
            </li>
          </ul>
        </section>

        <section className={s.skills_sec}>
          <div>
            <p className={s.par_skills}>Skills</p>
          </div>
          <div className={s.line}></div>
          <div className={s.cont_skills_white}>
            <div className={s.marquee}>
              <ul className={s.first_line_icons}>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-html-icon`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-icons8-css-logo`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-JS`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use
                      href={`${symbolDefs}#icon-js_react-js_logo_react_react-native_icon`}
                    />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-redux`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use
                      href={`${symbolDefs}#icon-code_development_logo_nodejs_icon`}
                    />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-icons8-express-js`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-mongodb-ar21`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#next-js`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#sass`} />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.line}></div>
          <div className={s.cont_skills_white}>
            <div className={s.marquee_sec}>
              <ul className={s.second_line_icons}>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-TypeScript`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-icons8-vite`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-apple_logo_icon`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-icons8-git`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-icons8-github-480`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-figma-1-logo-svgrepo-com`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use href={`${symbolDefs}#icon-trello-tile`} />
                  </svg>
                </li>
                <li>
                  <svg className={s.svg}>
                    <use
                      href={`${symbolDefs}#icon-icons8-visual-studio-code`}
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className={s.line}></div>
        </section>

        <section className={s.benefits}>
          <h2 className={s.title_ben}>Benefits of working with me</h2>
          <div className={s.cont_of_benef_numb}>
            <div className={s.circle_container}>
              <div className={s.circle}>1</div>
              <div className={s.circle}>2</div>
              <div className={s.circle}>3</div>
              <div className={s.circle}>4</div>
              <div className={s.circle}>5</div>
            </div>

            <div>
              <ul className={s.list_of_benef}>
                <li className={s.items}>Strong Communication Skills</li>
                <li className={s.items}>Reliability and Time Management</li>
                <li className={s.items}>Problem-Solving Expertise</li>
                <li className={s.items}>Customer-Focused Approach</li>
                <li className={s.items}>Continuous Learning</li>
              </ul>
            </div>
          </div>
        </section>
        <FIcons />
      </main>

      <Footer></Footer>
    </>
  );
};

export default AboutMe;

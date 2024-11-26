import s from './AboutMe.module.css';
import photoMy from '/public/main.jpeg';
import resume from '/public/Anna_Vasylchenko_FronendDev.pdf';
import uam from '/public/HSGHAF29_400x400.jpg';
import goit from '/public/preview_main_1200x630.jpg';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
// 
import symbolDefs from '/public/symbol-defs.svg';
import ts from '/public/symbol-defs.svg#icon-TypeScript';

console.log(s);

const AboutMe = () => {

  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const handleMore=()=>{
    setShowMoreInfo((prevState) => !prevState);
  }

  return (
    <main>
      <section className={s.first_section}>
        <div className={s.imgcont}>
        <img src={photoMy} alt="my-photo" className={s.photo} />
        </div>
        <div className={s.int}>
          <h2 className={s.name}>
            Hi, I am Anna,
            <br />
            Motivated Web developer
          </h2>
          <p className={s.par}>
            I'm a front-end developer with knowledge of HTML, CSS, Javascript, React, Typescript and Node.js. I am so glad
            to see you here in my portfolio. Here you can see a lot of interesting things about me. I am currently a student at Adam Mickiewicz University. 
          </p>
          <Link to={showMoreInfo ? '/' : '/moreInfo'}  className={s.moreinfo} onClick={handleMore}
>
  {showMoreInfo ? "Hide" : "More information"}
</Link>
<Outlet></Outlet>

        
          <a href={resume} download className={s.btn}>
  Download Resume
</a>
        </div>
      </section>

      <section className={s.education_sec}>
        <div className={s.cont_edu}>
          <div className={s.marquee}>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
            <p className={s.ed_par}>Education</p>
          </div>
        </div>

        <ul className={s.list_ed}>
          <li className={s.item_ed}>
            <p className={s.title_school}>UNIVERCITY IM. ADAMA MICKIEWICZA IN POZNAN</p>
            <p className={s.time}>1 Oct 2024 - Oct 2028 | Computer Science</p>
            <p className={s.degree}>Bachelor's degree</p>
            <div className={s.overlay}>
              <img className={s.uam_photo} src={uam} alt="uam" />
              <a href="https://wmi.amu.edu.pl/" target="_blank" className={s.uam_main}>
                The WMI website
              </a>
            </div>
          </li>
          <li className={s.item_ed}>
            <p className={s.title_school}>IT SCHOOL GOIT</p>
            <p className={s.time}>May 2023 - Nov 2024 | Web development</p>
            <p className={s.degree}>Fullstack web developer</p>
            <div className={s.overlay}>
              <img className={s.goit_main} src={goit} alt="goIt" />
              <a href="https://goit.global/ua/" target="_blank" className={s.goit}>
                The main website
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className={s.skills_sec}>
        <div>
        <p className={s.par_skills}>Skills</p>
        </div>
        <div className={s.line}></div>
<div>

<div className={s.marquee}>
  <ul className={s.first_line_icons}>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-html-icon'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-icons8-css-logo'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-JS'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-js_react-js_logo_react_react-native_icon'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-redux'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-code_development_logo_nodejs_icon'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-icons8-express-js'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-mongodb-ar21'/></svg></li>
  </ul>
  </div>
</div>
<div className={s.line}></div>
<div>
<div className={s.marquee_sec}>
<ul className={s.second_line_icons}>
  
    <li><svg className={s.svg}><use href={`${symbolDefs}#icon-TypeScript`}/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-icons8-vite'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-apple_logo_icon'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-icons8-git'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-icons8-github-480'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-figma-1-logo-svgrepo-com'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-trello-tile'/></svg></li>
  <li><svg className={s.svg}><use href='/public/symbol-defs.svg#icon-icons8-visual-studio-code'/></svg></li></ul>

</div>
</div>
<div className={s.line}></div>

      </section>
    </main>
  );
};

export default AboutMe;

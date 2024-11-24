import s from './AboutMe.module.css';
import photoMy from '/public/main.jpeg';
import resume from '/public/Anna_Vasylchenko_FronendDev.pdf';
import uam from '/public/HSGHAF29_400x400.jpg';
import goit from '/public/images.png';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

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
        <button className={s.moreinfo} onClick={handleMore}>
          {showMoreInfo ? "Hide" : "More information"}
        </button>
{showMoreInfo &&( 
  <>
  <Link to='/moreInfo'></Link>
  <Outlet />
  </>
  )
          }
        
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
    </main>
  );
};

export default AboutMe;

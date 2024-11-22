import s from './AboutMe.module.css'
console.log(s);
const AboutMe = () => {
  return (
    <main>
<section className={s.first_section}>
<div className={s.imgcont}>
    <img src="/public/img/main.jpeg" alt="my-photo" className={s.photo} />
</div>
<div className={s.int}>
    <h2 className={s.name}>Hi, I am Anna,
   <br />Motivated  Web developer</h2>
    <p className={s.par}>I'm a front-end developer with knowledge of HTML, CSS, Javascript, React, Typescript and Node.js. I am so glad to see you here in my portfolio.</p>
    <a  href="/public/img/Anna_Vasylchenko_FronendDev.pdf" download className={s.btn}>Download Resume</a>
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
    </div>
    </div>

<ul className={s.list_ed}>
<li className={s.item_ed}>
    <p className={s.title_school}>UNIVERCITY IM. ADAMA MICKIEWICZA IN POZNAN</p>
    <p className={s.time}>1 Oct 2024 - Oct 2028   |    Computer Science</p>
    <p className={s.degree}>Bachelor's degree</p>
    <div className={s.overlay}>
        <img  className={s.uam_photo}src="/public/img/HSGHAF29_400x400.jpg" alt="uam" />
        <a href="https://amu.edu.pl/" target='_blank' className={s.uam_main}>The main website</a>
        <a href="https://wmi.amu.edu.pl/" target='_blank' className={s.uam_main}>The WMI website</a>
    </div>
</li>
<li className={s.item_ed}>
    <p className={s.title_school}>IT SCHOOL GOIT</p>
    <p className={s.time}>May 2023 - Nov 2024   |   Web development</p>
    <p className={s.degree}>Fullstack web developer</p>
    <div className={s.overlay}>
    <img  className={s.goit_main}src="/public/img/images.png" alt="goIt" />
    <a href="https://goit.global/ua/" target='_blank' className={s.goit}>The main website</a>
    </div>
</li>
</ul>

</section>
    </main>

  )
};

export default AboutMe;

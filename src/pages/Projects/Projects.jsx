import s from './Projects.module.css';
import img1 from '/public/tp.png';
import img2 from '/public/fb.png';
import img3 from '/public/js.png';
import img4 from '/public/fr.png';
import img5 from '/public/st.png';
console.log(s);
const Projects = () => {
  return (
    <section className={s.cont}>
    <h2 className={s.title}>My projects</h2>

    <ul className={s.list}>

      <li className={s.items}>
        <img src={img1} alt="task pro" className={s.img} />
        <div>
          <p className={s.par_f}>Task Pro</p>
          <div className={s.cont_txt}>
          <div className={s.year}>2024</div>
          <p className={s.type}>Web app</p>
          </div>
          <p className={s.description}>A team project. An app that will help you plan your day. This is a full-stack application. I wrote the code for the backend part of authorization and authentication</p>
          <div className={s.line}></div>
          <p className={s.skills}>Skills</p>
          <p className={s.listskills}>React.js · Node.js · MongoDB · JavaScript · HTML6 · CSS · Vite · Render · Redux · REST API</p>
        </div>
       
      </li>
      <li className={s.items}>
      <img src={img2} alt="phone book" className={s.img} />
      <div>
          <p className={s.par_f}>Phone book</p>
          <div className={s.cont_txt}>
          <div className={s.year}>2024</div>
          <p className={s.type}>Web app</p>
          </div>
          <p className={s.description}>In this web application, you will have the opportunity to create your own account in the contact book, where you can add new contacts, delete them, and search by number and name. Individual project</p>
          <div className={s.line}></div>
          <p className={s.skills}>Skills</p>
          <p className={s.listskills}>HTML5 · CSS3 · JavaScript · React.js · Node.js · Redux · Axios · Vite</p>
        </div>

       
      </li>
      <li className={s.items}>
      <img src={img3} alt="your energy" className={s.img} />
      <div>
          <p className={s.par_f}>Your energy</p>
          <div className={s.cont_txt}>
          <div className={s.year}>2023</div>
          <p className={s.type}>Web app</p>
          </div>
          <p className={s.description}>Team project. This site will help you create your own workout program, has a variety of workouts for each body part and an explanation of how it works. I was responsible for the footer of the site and all its functionality</p>
          <div className={s.line}></div>
          <p className={s.skills}>Skills</p>
          <p className={s.listskills}>HTML5 · CSS3 · JavaScript · Vite  · Communication · Teamwork </p>
        </div>
        
      </li>
      <li className={s.items}>
      <img src={img4} alt="veggieboost" className={s.img} />
      <div>
          <p className={s.par_f}>Veggieboost</p>
          <div className={s.cont_txt}>
          <div className={s.year}>2023</div>
          <p className={s.type}>Web app</p>
          </div>
          <p className={s.description}>Team project. A website that helps you easily shop for fresh vegetables from home. It is adapted for all devices, has a modal window and several animations. I developed the “organic vegetables” section, which is adapted to all devices</p>
          <div className={s.line}></div>
          <p className={s.skills}>Skills</p>
          <p className={s.listskills}>HTML5 · CSS3 · JavaScript · Vite · Communication · Teamwork </p>
        </div>
       
      </li>
      <li className={s.items}>
      <img src={img5} alt="web studio" className={s.img} />
      <div>
          <p className={s.par_f}>Web studio</p>
          <div className={s.cont_txt}>
          <div className={s.year}>2023</div>
          <p className={s.type}>Web app</p>
          </div>
          <p className={s.description}>The website of the web studio is adapted for all types of devices and includes modal windows, a responsive design, effects and transitions.</p>
          <div className={s.line}></div>
          <p className={s.skills}>Skills</p>
          <p className={s.listskills}>HTML5 · CSS3 · JavaScript</p>
        </div>
        
      </li>
    </ul>
    </section>
  );
};

export default Projects;

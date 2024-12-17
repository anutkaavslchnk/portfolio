import s from './Projects.module.css';
import img1 from '/public/tp.png';
import img2 from '/public/fb.png';
import img3 from '/public/js.png';
import img4 from '/public/fr.png';
import img5 from '/public/st.png';
import { useState } from 'react';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(3);

  const projects = [
    {
      id: 1,
      img: img1,
      title: 'Task Pro',
      year: '2024',
      type: 'Web app',
      description: 'A team project. An app that will help you plan your day. This is a full-stack application. I wrote the code for the backend part of authorization and authentication',
      skills: '·React.js ·Node.js ·MongoDB ·JavaScript ·HTML6 ·CSS ·Vite ·Render ·Redux ·REST API',
    },
    {
      id: 2,
      img: img2,
      title: 'Phone book',
      year: '2024',
      type: 'Web app',
      description: 'In this web application, you will have the opportunity to create your own account in the contact book, where you can add new contacts, delete them, and search by number and name. Individual project',
      skills: '·HTML5 ·CSS3 ·JavaScript ·React.js ·Node.js ·Redux ·Axios ·Vite',
    },
    {
      id: 3,
      img: img3,
      title: 'Your energy',
      year: '2023',
      type: 'Web app',
      description: 'Team project. This site will help you create your own workout program, has a variety of workouts for each body part and an explanation of how it works. I was responsible for the footer of the site and all its functionality',
      skills: '·HTML5 ·CSS3 ·JavaScript ·Vite ·Communication ·Teamwork',
    },
    {
      id: 4,
      img: img4,
      title: 'Veggieboost',
      year: '2023',
      type: 'Web app',
      description: 'Team project. A website that helps you easily shop for fresh vegetables from home. It is adapted for all devices, has a modal window and several animations. I developed the “organic vegetables” section, which is adapted to all devices',
      skills: '·HTML5 ·CSS3 ·JavaScript ·Vite ·Communication ·Teamwork',
    },
    {
      id: 5,
      img: img5,
      title: 'Web studio',
      year: '2023',
      type: 'Web app',
      description: 'The website of the web studio is adapted for all types of devices and includes modal windows, a responsive design, effects and transitions.',
      skills: '·HTML5 ·CSS3 ·JavaScript',
    },
  ];

  const indexOfLastProject = currentPage * perPage;
  const indexOfFirstProject = indexOfLastProject - perPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className={s.cont}>
      <p className={s.title}>My projects</p>

      <ul className={s.list}>
        {currentProjects.map((project) => (
          <li key={project.id} className={s.items}>
            <img src={project.img} alt={project.title} className={s.img} />
            <div>
              <p className={s.par_f}>{project.title}</p>
              <div className={s.cont_txt}>
                <div className={s.year}>{project.year}</div>
                <p className={s.type}>{project.type}</p>
              </div>
              <p className={s.description}>{project.description}</p>
              <div className={s.line}></div>
              <p className={s.skills}>Skills</p>
              <p className={s.listskills}>{project.skills}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={s.pagination}>
        {Array.from({ length: Math.ceil(projects.length / perPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`${s.pageButton} ${currentPage === index + 1 ? s.active : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Projects;

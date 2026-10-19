import s from "./Projects.module.css";

import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { ThemeContext } from "../../components/Header/Header";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const projects = [
    {
      id: 1,
      title: "SENDYKUS",
      year: "2025",
      type: "Web app",
      description:
        "SENDYKUS a is a real-time chat application designed to enable instant and seamless communication between users...",
      skills: "·React.js ·Node.js ·MongoDB ·Socket.io ·Redux ·REST API",
    },
  ];

  return (
    <div className={theme == "dark" ? s.dark : ""}>
      <section className={s.cont}>
        <header className={s.heading}>
          <h1 className={s.title}>My projects</h1>
          <p className={s.intro}>
            A selection of full-stack applications and practical solutions I
            have designed and built.
          </p>
        </header>

        <ul className={s.list}>
          {projects.map((project) => (
            <li key={project.id} className={s.items}>
              <Link className={s.project_link} to={`/projects/${project.id}`}>
                <p className={s.par_f}>{project.title}</p>
                <div className={s.cont_txt}>
                  <div className={s.year}>{project.year}</div>
                  <p className={s.type}>{project.type}</p>
                </div>
                <p className={s.description}>{project.description}</p>
              </Link>
            </li>
          ))}
        </ul>

      </section>

      <Footer></Footer>
    </div>
  );
};

export default Projects;

import s from "./AboutMe.module.css";
import photoMy from "/public/main.jpeg";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import { ThemeContext } from "../../components/Header/Header.jsx";
import { FaBrain } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiDjango,
  SiDocker,
  SiFlask,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiScikitlearn,
  SiTypescript,
  SiWindows,
} from "react-icons/si";

const AboutMe = () => {
  const { theme } = useContext(ThemeContext);
  const skills = [
    { name: "Python", icon: SiPython },
    { name: "Flask", icon: SiFlask },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Django", icon: SiDjango },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Redux", icon: SiRedux },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Docker", icon: SiDocker },
    {
      name: "LLM Integration",
      icon: FaBrain,
    },
    {
      name: "Machine Learning",
      icon: SiScikitlearn,
    },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Ubuntu / Linux", icon: SiLinux },
    { name: "Windows", icon: SiWindows },
  ];

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
              Fullstack Engineer
            </h2>
            <p className={s.par}>
              I’m a Fullstack Engineer with a focus on AI-powered applications
              and cloud technologies. I have experience building modern
              applications using React, Redux, TypeScript, REST APIs, Python,
              Docker, and Recharts, as well as developing and deploying
              solutions with AWS services including Amplify, Lambda, S3,
              DynamoDB, RDS, ECR, CloudWatch, CDK, and Amazon Bedrock. I’m
              currently a student at Adam Mickiewicz University, continuously
              developing my expertise in full-stack engineering, artificial
              intelligence, and cloud computing.
            </p>
            <Outlet></Outlet>

            <a
              href="https://drive.google.com/file/d/1ygaEsxLYvHmLRa2TQ5LJCbmfVAZfCEAM/view?usp=sharing"
              target="_blank"
              className={s.btn}
            >
              My Resume
            </a>
          </div>
        </section>

        <section className={s.education_sec}>
          <div className={s.education_heading}>
            <h2 className={s.par_edu}>Education</h2>
            <p className={s.education_intro}>
              The academic and practical foundations behind my engineering
              journey.
            </p>
          </div>

          <ul className={s.list_ed}>
            <li className={s.item_ed}>
              <h3 className={s.title_school}>
                UNIVERCITY IM. ADAMA MICKIEWICZA IN POZNAN
              </h3>
              <p className={s.time}>Oct 2024 - Currently | Computer Science</p>
              <p className={s.degree}>Bachelor's degree</p>
            </li>
            <li className={s.item_ed}>
              <h3 className={s.title_school}>IT SCHOOL GOIT</h3>
              <p className={s.time}>May 2023 - Nov 2024 | Web development</p>
              <p className={s.degree}>Fullstack web developer</p>
            </li>
            <li className={s.item_ed}>
              <h3 className={s.title_school}>
                LYCEUM №1 IN ZHYTOMYR (PHYSICS-MATH)
              </h3>
              <p className={s.time}> Sep 2020 - Oct 2024</p>
              <p className={s.degree}>Full General Secondary Education</p>
            </li>
          </ul>
        </section>

        <section className={s.skills_sec}>
          <div className={s.skills_heading}>
            <p className={s.par_skills}>Skills</p>
            <p className={s.skills_intro}>
              Tools and technologies I use to build full-stack and AI-powered
              applications.
            </p>
          </div>
          <ul className={s.skills_grid}>
            {skills.map(({ name, icon: Icon, description }) => (
              <li className={s.skill_card} key={name}>
                <Icon aria-hidden="true" />
                <span>{name}</span>
                {description && <small>{description}</small>}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer></Footer>
    </>
  );
};

export default AboutMe;

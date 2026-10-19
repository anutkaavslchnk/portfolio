import { useNavigate, useParams } from "react-router-dom";
import data from './data.js';
import s from './Details.module.css';
import { IoReturnDownBack } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { useContext } from "react";
import { ThemeContext } from "../../components/Header/Header.jsx";
const Details = () => {
  const { id } = useParams();
  const project = data.find((proj) => proj.id === parseInt(id));
  const navigate = useNavigate();
  const {theme}=useContext(ThemeContext);
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={theme === 'dark' ? s.dark :''}>
    <div className={s.section}>
     
      <div className={s.cont_first}>
      <button aria-label="Back to projects" className={s.back} onClick={() => navigate(-1)}><IoReturnDownBack color="black" size="28px" className={s.arrow} /></button>
      <p className={s.eyebrow}>Project details</p>
      <h1 className={s.title}>{project.title}</h1>
      </div>
      <div className={s.cont_second}>
      <p className={s.year}>{project.year}</p>
      <p className={s.type}>{project.type}</p>
      <p className={s.desc}>{project.description}</p>
      <p className={s.skills}>Skills:</p>
      <p className={s.list}>{project.skills}</p>
<div className={s.cont}>

<a className={s.github} href={project.github} target='_blank' rel="noreferrer" aria-label="View source code on GitHub"><FaGithub size="24px" /></a>
<a className={s.site} href={project.site} target='_blank' rel="noreferrer" aria-label="Open live project"><HiOutlineLightningBolt size="24px"/></a>
</div>
    <div className={s.cont}>
      <p className={s.txt}>Source code</p>
      <p className={s.txt}>Live demo</p>
    </div>
      </div>
     

    </div>
    </div>
  );
};

export default Details;

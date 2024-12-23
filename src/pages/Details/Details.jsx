import { useNavigate, useParams } from "react-router-dom";
import data from './data.js';
import s from './Details.module.css';
import { IoReturnDownBack } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
const Details = () => {
  const { id } = useParams();
  const project = data.find((proj) => proj.id === parseInt(id));
  const navigate = useNavigate();
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className={s.section}>
     
      <div className={s.cont_first}>
      <button className={s.back} onClick={() => navigate(-1)}><IoReturnDownBack color="black" size="40px" /></button>
      <h1 className={s.title}>{project.title}</h1>
      <img className={s.img} src={project.img} alt={project.title}  />
      </div>
      <div className={s.cont_second}>
      <p className={s.year}>{project.year}</p>
      <p className={s.type}>{project.type}</p>
      <p className={s.desc}>{project.description}</p>
      <p className={s.skills}>Skills:</p>
      <p className={s.list}>{project.skills}</p>
<div className={s.cont}>

<a className={s.github}href={project.github} target='_blank'><FaGithub size="50px" /></a>
<a className={s.site}href={project.site} target='_blank'><HiOutlineLightningBolt size="50px"/></a>
</div>
    <div className={s.cont}>
      <p className={s.txt}>Github</p>
      <p className={s.txt}>An app</p>
    </div>
      </div>
     

    </div>
  );
};

export default Details;

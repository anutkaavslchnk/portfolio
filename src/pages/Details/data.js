import img1 from '/public/tp.png';
import img2 from '/public/fb3.png';
import img3 from '/public/js.png';
import img4 from '/public/fr.png';
import img5 from '/public/st.png';

const projectsData = [
  {
    id: 1,
    img: img1,
    title: 'Task Pro',
    year: '2024',
    type: 'Web app',
    description: 'A team project. An app that will help you plan your day. This is a full-stack application. I wrote the code for the backend part of authorization and authentication',
    skills: '·React.js ·Node.js ·MongoDB  ·Vite ·Render ·Redux ·REST API',
    github:"https://github.com/maksymPr424/Task-Pro-back",
    site:"https://task-pro-nu.vercel.app/welcome"
  },
  {
    id: 2,
    img: img2,
    title: 'Phone book',
    year: '2024',
    type: 'Web app',
    description: 'In this web application, you will have the opportunity to create your own account in the contact book, where you can add new contacts, delete them, and search by number and name. Individual project',
    skills: '·React.js ·Node.js ·Redux ·Axios ·Vite',
      github:"https://github.com/anutkaavslchnk/Phone-book-app",
    site:"https://phone-book-app-lime.vercel.app/"
  },
  {
    id: 3,
    img: img3,
    title: 'Your energy',
    year: '2023',
    type: 'Web app',
    description: 'Team project. This site will help you create your own workout program, has a variety of workouts for each body part and an explanation of how it works. I was responsible for the footer of the site and all its functionality',
    skills: '·HTML5 ·CSS3 ·JavaScript ·Vite ·Communication ·Teamwork',
      github:"https://github.com/AliceBondMe/the-great-eight",
    site:"https://alicebondme.github.io/the-great-eight/"
  },
  {
    id: 4,
    img: img4,
    title: 'Veggieboost',
    year: '2023',
    type: 'Web app',
    description: 'Team project. A website that helps you easily shop for fresh vegetables from home. It is adapted for all devices, has a modal window and several animations. I developed the “organic vegetables” section, which is adapted to all devices',
    skills: '·HTML5 ·CSS3 ·JavaScript ·Vite ·Communication ·Teamwork',
      github:"https://github.com/tymnik/group16_project_1",
    site:"https://tymnik.github.io/group16_project_1/"
  },
  {
    id: 5,
    img: img5,
    title: 'Web studio',
    year: '2023',
    type: 'Web app',
    description: 'The website of the web studio is adapted for all types of devices and includes modal windows, a responsive design, effects and transitions.',
    skills: ['·HTML5 ·CSS3 ·JavaScript'],
      github:"https://github.com/anutkaavslchnk/Web-Studio",
    site:"https://anutkaavslchnk.github.io/Web-Studio/",
  
  },
];

export default projectsData;

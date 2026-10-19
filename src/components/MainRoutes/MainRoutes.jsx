import {  Route, Routes } from 'react-router-dom';

import Contact from '../../pages/Contact/Contact.jsx';
import Projects from '../../pages/Projects/Projects.jsx';
import NotFound from '../../pages/NotFound/NotFound.jsx';
import AboutMe from '../../pages/AboutMe/AboutMe.jsx';
import MoreInfo from '../MoreInfo/MoreInfo.jsx';
import Details from '../../pages/Details/Details.jsx';
import Header from '../Header/Header.jsx';

const MainRoutes = () => {
    return (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<AboutMe />}>
              <Route path="moreInfo" element={<MoreInfo />} />
            </Route>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Details />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      );
};

export default MainRoutes;

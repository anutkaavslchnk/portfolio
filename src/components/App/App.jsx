
import { Route, Routes } from "react-router-dom";
import Welcome from "../Welcome/Welcome.jsx";
import Projects from "../../pages/Projects/Projects.jsx";
import Education from "../../pages/Education/Education.jsx";
import Contact from "../../pages/Contact/Contact.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";


const App = () => {
  return (
  <>
  <Welcome></Welcome>
  <Routes>
    <Route path="/" element={<Projects/>}></Route>
    <Route path="/education" element={<Education/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  </>);
};

export default App;

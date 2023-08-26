import "./App.css";
import About from "./Component/About/About.jsx";
import Skill from "./Component/Skill/Skill.jsx";
import Message from "./Component/Message/Message.jsx";
import Footer from "./Component/Footer/Footer.jsx";
// import Ex_card from './Component/Ex-card/Ex_card.jsx';
import Introduction from "./Component/Introduction/Introduction.jsx";
import Achievement from "./Component/Achievement/Achievement.jsx";
import Experience from "./Component/Experience/Experience.jsx";
import Project from "./Component/Project/Project";
// import Demo from './Component/Demo';

// import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Introduction />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Achievement />
      <Message />
      <Footer />
      {/* <Demo/> */}
    </div>
  );
}

export default App;

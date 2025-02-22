import { BrowserRouter, Router } from "react-router-dom";

import {
  About,
  Contact,
  Resume,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  BackgroundMusic,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Background effect */}
      <StarsCanvas />
      {/* Background music */}
      <BackgroundMusic audioSrc="./rainyday.mp3" />
      {/* Main content */}
      <div className="relative z-10">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Resume/>
        <div className="relative z-10 p-0 mr-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );

};

export default App;

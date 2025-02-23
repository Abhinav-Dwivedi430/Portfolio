import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  DownloadButton,
  StarsCanvas,
  BackgroundMusic
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Background effect */}
      <StarsCanvas />
      <BackgroundMusic/>

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
        <DownloadButton />
        <div className="relative z-10">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

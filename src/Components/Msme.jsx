import React, { useState, useEffect } from "react";
import { Navigation } from "./Msmenavigation";
import { Header } from "./Msmeheader";
import { Features } from "./Msmefeatures";
import { About } from "./Msmeabout";
import { Services } from "./Msmeservices";
import { Gallery } from "./Msmegallery";
import { Contact } from "./Msmecontact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "../MsmeReg.css"


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Partner } from "./components/Partner";
import { Services } from "./components/services";
import { Consultingservices } from "./components/Consultingservices";
import { SystemIntigration } from "./components/Systemintigration";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
//import { Global_Presence } from "./components/Global_Presence";
import { MapComponent } from "./components/MapComponent";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import { GoogleMap } from "@react-google-maps/api";

{/* <script>
  document.addEventListener("DOMContentLoaded", function(){
   document.getElementById("tile-image-text-EiUyAz").innerHTML = '<div class="elfsight-app-WIDGET_ID" data-elfsight-app-lazy></div>'
  });
</script> */}

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
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Consultingservices data={landingPageData.Consultingservices} />
      <SystemIntigration data={landingPageData.SystemIntigration} />
      <Partner data={landingPageData.Partner} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Global_Presence data={landingPageData.Global_Presence} /> */}
      <MapComponent data={landingPageData.MapComponent} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

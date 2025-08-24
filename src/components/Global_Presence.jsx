import React from "react";
import WorldMap from "./WorldMap";

export const Global_Presence = (props) => {
  // return (
  //   <div id="team" className="text-center">
  //     <div className="container">
  //       <div className="col-md-8 col-md-offset-2 section-title">
  //         <h2>Meet the Team</h2>
  //         <p>
  //           Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
  //           dapibus leonec.
  //         </p>
  //       </div>
  //       <div id="row">
  //         <div className="col-md-12"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8098893738656!2d72.89084047497839!3d19.115994282096885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80951d0271b%3A0xfa676f5500d1b30c!2sSymphony%20IT%20Park!5e0!3m2!1sen!2sin!4v1748097441087!5m2!1sen!2sin"
  //          width="100%" height={"450px"}></iframe></div>
        
  //       </div>
  //     </div>
  //   </div>
  // );
//   let map;
//   async function initMap() {
//   // The location of Uluru
//   const position = { lat: 19, lng: 73 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });
// const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Mumbai",
//   });
// }
// initMap();

{/* <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});	
  		</script> */}

 return (
    <div className="App" id="Global_Presence">
      <WorldMap />
      {/* <div id="map"></div> */}

      
     </div>

    
  );

};

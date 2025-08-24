import { Image } from "./image";
import React from "react";
//import '../gallery.css';


export const Gallery = (props) => {
 const TeamMember= [
    {
      "Name": "Jayant Kohale",
      "Designation": "CEO",
      "Linkedin": "https://www.linkedin.com/in/jayant-kohale-6696182a/",
      "Tweeter": "https://x.com/AmeiseTech",
      "Image": "img/team/jayant kohale.jpg"
    },
    {
      "Name": "Sushila Jaiswar",
      "Designation": "Lead Developer",
      "Linkedin": "#",
      "Tweeter": "#",
      "Image": "img/team/sushila.jpg"
    },
    {
      "Name": "Bhushan Shinde",
      "Designation": "Senior Developer",
      "Linkedin": "#",
      "Tweeter": "#",
      "Image": "img/team/02.jpg"
    },
    {
      "Name": "Sheetal Salvi",
      "Designation": "Senior Developer",
      "Linkedin": "#",
      "Tweeter": "#",
      "Image": "img/team/03.jpg"
    },
    {
      "Name": "Lavkush Kumar",
      "Designation": "Full Stack Developer",
      "Linkedin": "#",
      "Tweeter": "#",
      "Image": "img/team/Lavkush.jpeg"
    },
    {
      "Name": "Sandeep Pal",
      "Designation": "Full Stack Developer",
      "Linkedin": "#",
      "Tweeter": "#",
      "Image": "img/team/02.jpg"
    }
  ]
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Working with us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
         
        <div className="row main"> 
    {TeamMember.map((member, index) => (
<div className="col-md-2 ">
        <div class="profile-card">
            <div class="img">
            <img src={member.Image} alt={member.Name} />
            </div>
            <div class="caption">
                <h3>{member.Name}</h3>
                <p>{member.Designation}</p>
                <div class="social-links">
                    <a href={member.Linkedin}><i class="fa fa-linkedin-square"></i></a>
                    <a href={member.Tweeter}><i class="fa fa-twitter-square"></i></a>
                    
                </div>
            </div>
        </div></div>
        ))}
      </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 gallery">
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}/>
                  </div>
                ))
              : "Loading..."}
          </div>
            {/* <div className="gallery">
    {images.map(src => <img src={src} alt="" />)}
  </div> */}

        </div>

        

      </div>
    
    </div>
  );
};

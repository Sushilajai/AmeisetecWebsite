import React from "react";
// import { colorScale } from "./Countries";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-2 intro-text" style={{marginLeft: "65.66666667%"}}>
                <h2 style={{color: "#ffffffff"}}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
              </div>
               {/* <div className="col-md-6 col-md-offset-2 intro-text">
                <img
                  src="img/36e4d0b856694fc471344b644a1dd6e4.gif"
                  alt="Intro"
                  className="img-responsive"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </header>
  );
};

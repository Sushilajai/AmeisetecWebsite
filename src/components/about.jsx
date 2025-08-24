import React from "react";
import { useState } from "react";
import { Carbon_Footprint } from "./Carbon_Footprint";




export const About = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div id="about" style={{width: "100%"}}>
      <div className="container">

          {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div> */}
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>About Us</h2>
                  
{/* <Carbon_Footprint></Carbon_Footprint> */}
{/* <div class="elfsight-app-245fdfde-5dfc-4ab0-a191-3ffe1bdcfb5e" data-elfsight-app-lazy></div> */}

              <div className="row about-background">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.IIndparagraph : "loading..."}</p>
              <p>{props.data ? props.data.IIIndparagraph : "loading..."}</p>
              </div>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
              
            </div>
          </div>
          <div className="col-xs-12 col-md-12">
              <div className="about-text">
            
          <h2>Sustainability</h2>
          
        </div>
                <div className="col-xs-5 col-md-5">
                <img src="img/SDG.jpg" className="img-responsive" alt="" /> 
                </div>
                <div className="col-xs-7 col-md-7 text-background" >
<p>
  We are building circular economy, by reusing EV batteries. Reuse will extend the life of batteries there by helping the environment. The extended life of these batteries supporting stationary applications will give more yields to the various rare earth material which is part of the composition of the battery. It would also reduce the need to mine more of these Elements. The repurposing of EV batteries will help in sustainability , durability and give a new lease of life.

</p>
<p>
  For EV OEMs its very important to have a lower Total cost of ownership ( TCO), by repurposing the EV batteries it is deriving more value which could be passed on to the consumer. Also it would also help in increasing value of the vehicle in the used car market.Regulations in EU & US have mandated OEMs for better reuse & recycle,and 2nd life is the way forward. Also this helps OEMs to monitor the battery performance for sationary uses and thery by creating additional use cases of their battery packs. As part of sustainability and circular economy and UN SDG goals most of the EU & US OEMs are committed to 2nd Life opportunities. With AmeiseTech we are providing an opportunity to these global brands to get associated with circular economy, promoting concept of sustainability
</p>
                </div>
              </div>
        </div>
      </div>
   
  );
};

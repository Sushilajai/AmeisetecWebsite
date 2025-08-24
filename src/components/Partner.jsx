import React from "react";


export const Partner = (props) => {
  return (
    <div id="Partner" className="text-center" style={{ padding: "100px 20px" }}>
      <div className="container">
        <div className="section-title">
          <h2>Our Partners</h2>
          <p className="subtitle">
            We collaborate with trusted partners to deliver innovation and value
          </p>
        </div>

        <div className="row justify-content-center">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6 col-md-3">
                <div className="partner-card">
                  <img
                    src={d.img}
                    width="120"
                    height="60"
                    alt="Ab Ovo"
                  />
                  <h3>{d.title}</h3>
                  <p>{d.description}</p>
                </div>
              </div>
            ))
          ) : (
            "Loading..."
          )}
        </div>
      </div>
    </div>
  );
};

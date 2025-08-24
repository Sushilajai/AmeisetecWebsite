import React from "react";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
          <img src="../img/logo.png" class="logo" title="AmeiseTec"/>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll navbar-right">
            <li className="dropdown">
              <a href="#about" className="btn btn-secondary dropdown-toggle">
                Who We Are
              </a>
            </li>
             <li className="dropdown">
          <a className="btn btn-secondary dropdown-toggle"  id="dropdownMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                What We Do
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#services">IT Services</a></li>
            <li><a className="dropdown-item" href="#Consultingservices">Consulting Services</a></li>
            <li><a className="dropdown-item" href="#SystemIntigration">System Integration</a></li>
          </ul>
            </li>
            <li className="dropdown">
              <a href="#Partner" className="btn btn-secondary dropdown-toggle">
                Partner
              </a>
            </li>
           
           
             <li className="dropdown">
              <a href="#portfolio" className="btn btn-secondary dropdown-toggle">
                Working With Us
              </a>
            </li>
            <li className="dropdown">
              <a href="#testimonials" className="btn btn-secondary dropdown-toggle">
                News And Events
              </a>
            </li>
            <li className="dropdown">
              <a href="#MapComponent" className="btn btn-secondary dropdown-toggle">
                Global Presence
              </a>
            </li>
            <li>
              <a href="#contact" className="btn btn-secondary dropdown-toggle">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
            

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Navbar scroll</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarScroll">
//       <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Link
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
//             <li><a class="dropdown-item" href="#">Action</a></li>
//             <li><a class="dropdown-item" href="#">Another action</a></li>
//             {/* <li><hr class="dropdown-divider"></li> */}
//             <li><a class="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
//         </li>
//       </ul>
     
//     </div>
//   </div>
// </nav>
  );
};





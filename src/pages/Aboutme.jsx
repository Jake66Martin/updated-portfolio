import "../App.css";
import { useEffect, useState } from "react";

export default function Aboutme() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1423);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <div className="d-flex justify-content-center align-items-center text-white position-absolute w-50 h-50 top-25 left-25">
          
          <div className="h-100 w-75 d-flex flex-column">
            <h1 className="align-self-center head">Internexus</h1>
            <h2 className="align-self-center fam">Connecting ideas. Crafting the web.</h2>
            <p className="fam" style={{position: 'relative', top: '25px', textAlign: 'center'}}>
            In the dynamic world of web development, your online presence is the gateway to unparalleled growth and opportunities. At Internexus, we're here to turn that key for you.
            Whether it's the simplicity and charm of blogs and small-page applications or the complexity of forums, business pages, and startup e-commerce platforms, your idea deserves to be brought to life in the most exceptional way. With Internexus, your concept is not just understood but meticulously crafted into reality.
            <br/>
            <br/>
            From the aesthetics of the front-end to the complexities of the back-end... We deal in HTML5, CSS, JavaScript, and an array of frameworks and databases including Jquery, Bootstrap, React, Express, MySQL/Sequelize, and MongoDB/Mongoose, alongside proficiency in RESTful and GraphQL APIs.
            </p>
          </div>
        </div>
      ) : (
        <div className="position-absolute d-flex align-items-center  flex-column w-100 height text-white">
          
          <div className="h-100 w-75 d-flex flex-column justify-content-center" style={{position: 'relative', top: '30px'}}>
          <h1 className="align-self-center head yolo">Internexus</h1>
          <h2 className="align-self-center fam yolo2">Connecting ideas. <br/>Crafting the web.</h2>
            <p className="overflow-container fam" style={{fontSize: '12px', textAlign: 'center'}}>
            In the dynamic world of web development, your online presence is the gateway to unparalleled growth and opportunities. At Internexus, we're here to turn that key for you.
            Whether it's the simplicity and charm of blogs and small-page applications or the complexity of forums, business pages, and startup e-commerce platforms, your idea deserves to be brought to life in the most exceptional way. With Internexus, your concept is not just understood but meticulously crafted into reality.
            <br/>
            <br/>
            From the aesthetics of the front-end to the complexities of the back-end... We deal in HTML5, CSS, JavaScript, and an array of frameworks and databases including Jquery, Bootstrap, React, Express, MySQL/Sequelize, and MongoDB/Mongoose, alongside proficiency in RESTful and GraphQL APIs.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

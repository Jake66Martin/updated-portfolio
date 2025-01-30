import "../App.css";

import { useState, useEffect } from "react";
import { Container, Row, Form } from "react-bootstrap";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute w-50 h-50 top-25 left-25">
        <h1 className="head milk">Contact Us Today!</h1>
        <p className="text-white fam contacto" style={{textAlign: 'center', position: 'relative', top: '40px'}}>
          Embarking on your web development journey with Internexus starts with
          a comprehensive consultation, where your vision begins to take shape.
          I am now available for bookings, ready to discuss how we can elevate
          your online presence and contribute to your success story. 
          <br/><br/>
          Contact
          Today to Transform Your Online Presence 
          <br/><br/>
          Reach out to me, Jacob Martin,
          at Internexus web development, for a partnership that promises not
          just to meet your expectations but exceed them. Contact me via phone number or drop an email at internexuswebdevelopment@gmail.com to unlock your
          online potential today! Let's build something remarkable together.
          <br/>
          <br/>
          Email: internexuswebdevelopment@gmail.com<br/><br/>
          Phone Number: 613-501-0898
        </p>
      </div>
    </>
  );
}

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
          <div className="h-100 w-25 d-flex justify-content-center">
            <img
              src="src\assets\TRY1.jpg"
              alt="Image of myself"
              className="rounded-circle"
            />
          </div>
          <div className="h-100 w-75 d-flex flex-column">
            <h1 className="align-self-center">Hello, and welcome!</h1>
            <p>
              Hello to you! Yes, you, the individual that is reading this. I see
              that you have come across my portfolio... Be it either a potential
              employer, or a potential client. For which ever reason it may be,
              you are now here. Enter the portfolio!
              <br />
              <br />
              My name is Jacob-Fournier Martin, and I am an aspiring web
              developer in the making! I am currently enrolled within the
              Carleton University coding bootcamp academy. I am a curious
              individual who is constantly looking to absorb material in order
              to grow and develop my knowledge base. I have deep interests in
              the tech field, the STEM fields, philosophy, psychology etc. I am
              also a big reader, ranging from fiction to non-ficton, over a
              plethora of subjects and genres. As you can tell, I also have a
              bit of a sense of humour.
            </p>
          </div>
        </div>
      ) : (
        <div className="position-absolute d-flex align-items-center  flex-column w-100 height text-white">
          <div className="h-50 w-100 d-flex justify-content-center align-items-center">
            <img
              src="src\assets\TRY1.jpg"
              alt="Image of myself"
              className="rounded-circle pic-height"
            />
          </div>
          <div className="h-50 w-75 d-flex flex-column justify-content-center">
            <h1 className="align-self-center">Hello, and welcome!</h1>
            <p className="overflow-container">
              Hello to you! Yes, you, the individual that is reading this. I see
              that you have come across my portfolio... Be it either a potential
              employer, or a potential client. For which ever reason it may be,
              you are now here. Enter the portfolio!
              <br />
              <br />
              My name is Jacob-Fournier Martin, and I am an aspiring web
              developer in the making! I am currently enrolled within the
              Carleton University coding bootcamp academy. I am a curious
              individual who is constantly looking to absorb material in order
              to grow and develop my knowledge base. I have deep interests in
              the tech field, the STEM fields, philosophy, psychology etc. I am
              also a big reader, ranging from fiction to non-ficton, over a
              plethora of subjects and genres. As you can tell, I also have a
              bit of a sense of humour.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

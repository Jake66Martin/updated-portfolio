import "../App.css";

export default function Portfolio() {
  return (
    <div className="d-flex justify-content-center align-items-center text-white position-absolute w-100 height">
      <div className="w-100 h-100 d-flex flex-column">
        <div className="w-100 h-50 d-flex">
          <div className="application-div d-flex justify-content-center align-items-center">
            <img src="src\assets\cravings.png" alt="Image of myself" className="img-size" />
          </div>
          <div className="application-div d-flex justify-content-center align-items-center">
            <img src="src\assets\day-schedule.png" alt="Image of myself" className="img-size"/>
          </div>
          <div className="application-div d-flex justify-content-center align-items-center">
            <img src="src\assets\first-portfolio.png" alt="Image of myself" className="img-size"/>
          </div>
        </div>
        <div className="w-100 h-50 d-flex">
          <div className="application-div d-flex justify-content-center align-items-center">
            <img src="src\assets\password generator.png" alt="Image of myself" className="img-size"/>
          </div>
          <div className="application-div d-flex justify-content-center align-items-center">
            <img src="src\assets\tech-blog.png" alt="Image of myself" className="img-size"/>
          </div>
          <div className="application-div d-flex justify-content-center align-items-center">
            <img src="src\assets\TR-0001.png" alt="Image of myself" className="img-size"/>
          </div>
        </div>
      </div>
    </div>
  );
}

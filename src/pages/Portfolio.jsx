import "../App.css";

export default function Portfolio() {
  return (
    <div className="d-flex justify-content-center align-items-center text-white position-absolute w-100 height">
      <div className="w-100 h-100 d-flex flex-column">
        <div className="w-100 h-50 d-flex">
          <div className="application-images"></div>
          <div className="application-images"></div>
          <div className="application-images"></div>
        </div>
        <div className="w-100 h-50 d-flex">
          <div className="application-images"></div>
          <div className="application-images"></div>
          <div className="application-images"></div>
        </div>
      </div>
    </div>
  );
}

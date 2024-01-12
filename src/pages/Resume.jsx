import "../App.css";

export default function Resume() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute w-100 height">
      <a
        href="https://docs.google.com/document/d/1ZG0bdVRG47nXCcs6ZqHlmErJFk4SpOdqUTfMVXfknZw/export?format=pdf"
        download="Jacobs resume.pdf"
        className="text-white"
      >
        Download my resume here
      </a>
      <h3>Front-end experience</h3>
      <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
      <h3>Back-end experience</h3>
      <ul>
        <li>NODEjs</li>
        <li>Express</li>
        <li>MYsql/Sequelize</li>
        <li>MongoDB</li>
      </ul>
      </div>
    </div>
  );
}

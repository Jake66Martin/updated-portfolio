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
      <h3 className='text-center head'>Front-end experience</h3>
      <div>
      <ul>
        <li className="fam">HTML</li>
        <li className="fam">CSS (flexbox and grid)</li>
        <li className="fam">Javascript/jQuery</li>
        <li className="fam">Bootstrap/Tailwind</li>
        <li className="fam">Responsive web design</li>
        <li className="fam">React</li>
        <li className="fam">Models/Views/Controllers (MVC)</li>
      </ul>
      <h3 className='text-center head'>Back-end experience</h3>
      <ul>
        <li className="fam">NODEjs</li>
        <li className="fam">Express</li>
        <li className="fam">MYsql/Sequelize</li>
        <li className="fam">MongoDB/Mongoose</li>
        <li className="fam">APIs (both rest and graphQl)</li>
        <li className="fam">Progressive Web Application (PWA)</li>
      </ul>
      </div>
    </div>
  );
}

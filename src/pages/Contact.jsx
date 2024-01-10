import '../App.css'

import { useState } from 'react';


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleInputChange = (e) => {
    const { input , value } = e.target;

    return (
      input === 'name' ? setName(value) : input === 'email' ? setEmail(value) : setMessage(value)

    )
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Hello ${name}`);
    setName('');
    setEmail('');
    setMessage('');
  };



  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute bg-dark w-50 h-50 top-25 left-25">
      <p>Contact</p>
      <form className="form d-flex flex-column align-items-between" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="E-mail"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
    
  );
}

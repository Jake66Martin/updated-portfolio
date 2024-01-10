// import '../App.css'

import { useState } from 'react';


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleInputChange = (e) => {
    const { name , value } = e.target;

    return (
      name === 'name' ? setName(value) : name === 'email' ? setEmail(value) : setMessage(value)

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
    <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute w-50 h-50 top-25 left-25">
      <p className='my-3'>Contact</p>
      <form className="form d-flex flex-column w-100 h-100" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className='my-3 align-self-sm-center'
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="E-mail"
          className='my-3 align-self-sm-center'
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          className='my-3 h-50'
        />
        <button type="submit" className='my-3 align-self-sm-center'>
          Submit
        </button>
      </form>
    </div>
    
  );
}

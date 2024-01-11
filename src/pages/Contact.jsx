
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
      <p className='my-3 fs-4'>Contact</p>
      <form className="form d-flex flex-column w-100 h-100" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className='my-1 align-self-md-center'
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="E-mail"
          className='my-1 align-self-md-center'
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          className='my-1 h-50 w-50 align-self-center'
        />
        <button 
        type="submit" 
        className='my-1 align-self-md-center'
        
        >
          Submit
        </button>
        <p className='text-white align-self-center'>If one would prefer to bypass the form, you could<br/> email me directly at jake66martin@hotmail.com</p>
      </form>
    </div>
    
  );
}

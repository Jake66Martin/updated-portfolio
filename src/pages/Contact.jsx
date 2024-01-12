import "../App.css";


import { useState } from 'react';


export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleEmpty = (e) => {
    const { name } = e.target;
    return (
      name === "name" ? alert('Please enter a name') : name === "email" ? alert('Please enter an email') : alert('Please enter a message')
    )
    }

  


  const handleInputChange = (e) => {
    const { name , value } = e.target;
     console.log(e)
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
    <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute w-100 height">
      <p className='my-3 fs-4'>Contact</p>
      <form className="form d-flex flex-column w-100 h-100" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className='my-1 align-self-md-center'
          onBlur={handleEmpty}
          required
        />
        <p className="text-center">dafgdfg</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="E-mail"
          className='my-1 align-self-md-center'
          onBlur={handleEmpty}
          required
        />
        <p className="text-center">dfgadfg</p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          className='my-1 h-25 w-25 align-self-center'
          onBlur={handleEmpty}
          required
        />
        <p className="text-center">dfgadg</p>
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

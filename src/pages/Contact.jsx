import '../App.css'

export default function Contact() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute bg-dark w-50 h-50 top-25 left-25">
      <p>Contact</p>
      <form className="form d-flex flex-column" onSubmit=''>
        <input
          value=''
          name="name"
          onChange=''
          type="text"
          placeholder="Name"
        />
        <input
          value=''
          name="email"
          onChange=''
          type="text"
          placeholder="E-mail"
        />
        <input
          value=''
          name="message"
          onChange=''
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

import "../App.css";

import { useState, useEffect } from "react";

export default function Contact() {
  const emailValidation = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleEmpty = (e) => {
    const { name, value } = e.target;

    return name === "name" && value === ""
      ? alert("Please enter a name")
      : name === "email" && value === ""
      ? alert("Please enter an email")
      : name === "message" && value === ""
      ? alert("Please enter a message")
      : console.log("Success");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    return name === "name"
      ? setName(value)
      : name === "email"
      ? setEmail(value)
      : setMessage(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (emailValidation.test(email)) {
      alert(
        `Hello ${name}! And thank you for reaching out. I shall be in contact soon.`
      );
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Please enter a valid email");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute w-100 height">
          <p className="my-3 fs-4">Contact</p>
          <form
            className="form d-flex flex-column w-100 h-100"
            onSubmit={handleFormSubmit}
          >
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
              className="my-3 align-self-md-center"
              onBlur={handleEmpty}
              required
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="E-mail"
              className="my-3 align-self-md-center"
              onBlur={handleEmpty}
              required
            />
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
              className="my-3 h-25 w-25 align-self-center"
              onBlur={handleEmpty}
              required
            />
            <button type="submit" className="my-1 align-self-md-center">
              Submit
            </button>
            <p className="text-white align-self-center">
              Github does not support backend, therefore one can
              <br /> &nbsp;&nbsp;&nbsp;email me directly at jake66martin@hotmail.com
            </p>
            <p className="text-white align-self-center">(613)501-0898</p>
          </form>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center text-white position-absolute w-100 height">
          <p className="my-2 fs-4">Contact</p>
          <form
            className="form d-flex flex-column align-items-center w-100 h-100"
            onSubmit={handleFormSubmit}
          >
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
              className="my-2 w-25 align-self-md-center"
              onBlur={handleEmpty}
              required
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="E-mail"
              className="my-2 w-25 align-self-md-center"
              onBlur={handleEmpty}
              required
            />
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
              className="my-2 text-area align-self-center"
              onBlur={handleEmpty}
              required
            />
            <button type="submit" className="my-1 align-self-md-center fs-6">
              Submit
            </button>
            <p className="text-white align-self-center fs-6">
            &nbsp;&nbsp;&nbsp;Github does not support backend,
              <br />
              therefore one can email me directly at this@
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jake66martin@hotmail.com
            </p>
            <p className="text-white align-self-center">(613)501-0898</p>
          </form>
        </div>
      )} */}
      <section className="bg-light py-3 py-md-5 contact-height">
      <Container>
        <Header />

        <Row className="justify-content-lg-center">
          <div className="col-12 col-lg-9">
            <div className="bg-white border rounded shadow-sm overflow-hidden">
              <Form onSubmit={formSubmit}>
                <Row className="gy-4 gy-xl-5 p-4 p-xl-5">
                  <div className="col-12">
                    <label htmlFor="fullname" className="form-label">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      value={name}
                      type="text"
                      className="form-control"
                      id="fullname"
                      name="fullname"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <input
                        value={email}
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      value={message}
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button
                        className="btn btn-danger btn-lg"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Row>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </section>
    </>
  );
}

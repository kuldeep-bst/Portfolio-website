import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  // emailjs code section
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5exf7fl", "template_heokk7s", form.current, {
        publicKey: "hi6ykozAO9bJKXS9H",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get in touch</p>
        <h1>Contact Me</h1>
      </div>
      {!isFormSubmitted ? (
        <form
          className="contact--form--container"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">Name</span>
              <input
                type="text"
                className="contact---input text-md"
                name="name"
                id="name"
                required
              />
            </label>

            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact---input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">phone-number</span>
              <input
                type="number"
                className="contact---input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>

          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              name="message"
              id="message"
              rows="4"
              placeholder="Type your message..."
            />
          </label>
          <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3>Thank You for getting in touch</h3>
        </div>
      )}
    </section>
  );
}

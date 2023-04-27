import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_w0i6jqi",
        "template_o05n1yn",
        form.current,
        process.env.REACT_APP_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'> Message envoyé ! </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class'error'> Une erreur s'est produite, veuillez réessayer. </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div id="contact">
      <div>
        <h2>Contactez-moi</h2>
        <p>Get in touch</p>
      </div>
      <div className="form_container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Nom</label>
          <input type="text" name="name" required autoComplete="off" />
          <label>Email</label>
          <input type="email" name="email" required autoComplete="off" />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Envoyer" />
        </form>
        <div className="form-message"></div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import MailImg from "../assets/images/contact.png";

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
      <img src={MailImg} alt="Dessin d'ordinateur" className="mail-img" />
      <div className="form_container">
        <div>
          <h2>Contactez-moi</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label for="name">Nom</label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
          />
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="off"
          />
          <label for="message">Message</label>
          <textarea name="message" id="message" required />
          <input type="submit" value="Envoyer" />
        </form>
        <div className="form-message"></div>
      </div>
    </div>
  );
};

export default Contact;

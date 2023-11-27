import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Digite o nome completo..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Digite o email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Digite o nome completo..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

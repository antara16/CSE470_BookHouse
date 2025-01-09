import React from 'react';

const Contact = () => (
  <section id="contactus">
    <div className="contact-row">
      <div className="col">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <input type="text" placeholder="Phone Number" required />
          <br />
          <textarea cols="20" rows="5" placeholder="Message" required></textarea>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="col">
        <img src="contacts.jpeg" alt="Contact Us" />
      </div>
    </div>
  </section>
);

export default Contact;

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For demonstration purposes, we'll just set the submitted flag to true
    setSubmitted(true);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Design Agency</h1>
        <p>We create beautiful designs that make a difference</p>
      </header>

      <section className="hero">
        <h1>Welcome to our Design Agency</h1>
        <p>We specialize in creating stunning designs for web and print.</p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Website Design</h3>
          <p>We design and develop beautiful and functional websites.</p>
        </div>
        <div className="service-item">
          <h3>Graphic Design</h3>
          <p>We create visually appealing graphics for various purposes.</p>
        </div>
        <div className="service-item">
          <h3>Logo Design</h3>
          <p>We craft unique and memorable logos for your brand.</p>
        </div>
        <div className="service-item">
          <h3>Print Design</h3>
          <p>We design high-quality print materials for your business.</p>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2023 Design Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

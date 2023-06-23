import React from 'react';
import './App.css';

function App() {
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
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Design Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

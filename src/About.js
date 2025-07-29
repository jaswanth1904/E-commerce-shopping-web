import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <section className="hero-section">
        <h1 className="hero-title">We Are the Rebels of Retail</h1>
        <p className="hero-subtitle">
          Born to disrupt, built to innovate, and driven to redefine the e-commerce game.
        </p>
      </section>

      <section className="mission-section">
        <h2 className="section-title">Our Big, Audacious Dream</h2>
        <p className="section-text">
          We're not here to play small. Our mission is to shake up the industry, challenge the status quo, and deliver experiences that leave our competitors scrambling. We dream of a world where shopping isn’t just a transaction—it’s a revolution. Every product, every click, every delivery is a step toward rewriting the rules.
        </p>
      </section>

      <section className="values-section">
        <h2 className="section-title">What Fuels Us</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We don’t follow trends—we set them. Our tech, our vision, our hustle is always one step ahead.</p>
          </div>
          <div className="value-card">
            <h3>Rebellion</h3>
            <p>We reject boring. We defy outdated. We break barriers to create something extraordinary.</p>
          </div>
          <div className="value-card">
            <h3>Customer Obsession</h3>
            <p>You’re not just a customer—you’re our co-conspirator in this movement. We build for you.</p>
          </div>
        </div>
      </section>

      <section className="join-section">
        <h2 className="section-title">Join the Revolution</h2>
        <p className="section-text">
          We’re not just selling products; we’re sparking a movement. Shop with us, dream with us, and let’s disrupt the future together.
        </p>
        <button className="cta-button">Shop Now</button>
      </section>
    </div>
  );
}

export default About;
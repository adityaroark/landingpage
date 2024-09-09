// App.js
import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import HeroSection3 from './components/HeroSection3';
import HeroSection4 from './components/HeroSection4';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm'; // Import ContactForm component


function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <header id="hero" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="control">
            <span className="typewriter">Take Control of Your Projects with Precision</span>
          </h1>
          <p className='teams'>Empowering teams to deliver results, on time and beyond expectations.</p>
          <button className="cta-button">Start Your Journey</button>
        </div>
      </header>

      <HeroSection />

      {/* Features Section */}
      <section id="features" className="features-section zoom-effect">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-tasks feature-icon"></i>
            <h3>Seamless Task Management</h3>
            <p>Keep all your projects on track and ensure nothing falls through the cracks.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-users feature-icon"></i>
            <h3>Collaborate Efficiently</h3>
            <p>Work together in real-time with your team, ensuring everyone is in sync.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-chart-line feature-icon"></i>
            <h3>Data-Driven Insights</h3>
            <p>Make informed decisions with powerful analytics and reports.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-cogs feature-icon"></i>
            <h3>Automated Workflows</h3>
            <p>Streamline repetitive tasks and enhance team productivity.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-cogs feature-icon"></i>
            <h3>No Threats</h3>
            <p>With our up to date Security features you can be at peace.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-cogs feature-icon"></i>
            <h3>Project Tracking</h3>
            <p>With our Calender features you can set tasks at a go.</p>
          </div>
        </div>
      </section>

      <HeroSection2 />

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section zoom-effect">
      <h2 class="section-title testimonials-title">What Our Clients Are Saying</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"This is hands down the best project management tool we've ever used. The insights are invaluable!"</p>
            <span>- Sarah Johnson, CTO</span>
          </div>
          <div className="testimonial">
            <p>"With this platform, we're able to meet deadlines without compromising quality. It's a lifesaver!"</p>
            <span>- Mark Williams, Project Manager</span>
          </div>
          <div className="testimonial">
            <p>"The collaborative tools are excellent. It makes working remotely so much easier for our global team."</p>
            <span>- Emily Davis, CEO</span>
          </div>
        </div>
      </section>

      <HeroSection3 />

      {/* Call-to-Action Section */}
      <section id="cta" className="cta-section zoom-effect">
        <h2>Transform Your Workflow Today</h2>
        <p className='join'>Join thousands of companies using our platform to deliver exceptional results.</p>
        <button className="cta-button">Start Free Trial</button>
      </section>

      <HeroSection4 />

      {/* Contact Form */}
      <ContactForm />


      {/* Footer */}
      <footer id="footer" className="footer zoom-effect">
        <div className="footer-container">
          <p>&copy; 2024 Manage Master. All rights reserved.</p>
          <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#cta">Call to Action</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;


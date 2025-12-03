import React from 'react';
import { Header } from '@/components/Header';
import { ScrollMenu } from '@/components/ScrollMenu';
import '@/style/pages.css';

const Contact: React.FC = () => {
  return (
    <div>
      <Header isDarkMode={false} toggleDarkMode={() => {}} toggleSidebar={() => {}} />
      <ScrollMenu />
      <main className="page-wrapper-min">
        <header className="page-hero">
          <h1>Contact Us</h1>
          <p className="page-intro">If you have questions or need support, email us at <a href="mailto:info@rsp-education.com">info@rsp-education.com</a> or send a message below.</p>
        </header>

        <section className="contact-grid">
          <div className="contact-card">
            <h2>Contact Info</h2>
            <address>
              RSP Education
              <br />123 Learning Lane
              <br />Education City, ED 12345
            </address>
            <p>Email: <a href="mailto:info@rsp-education.com">info@rsp-education.com</a></p>
          </div>

          <div className="contact-card">
            <h2>Send us a message</h2>
            <form className="contact-form">
              <label>Name</label>
              <input type="text" />

              <label>Email</label>
              <input type="email" />

              <label>Message</label>
              <textarea rows={6} />

              <button className="learn-btn" type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;

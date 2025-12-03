import React from 'react';
// Make sure to import Font Awesome CSS in your main entry file (e.g., index.tsx or App.tsx):
// import '@fortawesome/fontawesome-free/css/all.min.css';


export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Youtube', url: 'https://www.youtube.com/@rspeducation', icon: 'fab fa-youtube' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100089941092833', icon: 'fab fa-facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/rspeducation/', icon: 'fab fa-instagram' },
    { name: 'Twitter', url: 'https://twitter.com/rspeducation_', icon: 'fa-brands fa-x-twitter' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/rsp-company-06598527a/', icon: 'fab fa-linkedin' }
  ];

  const topTutorials = [
  { name: 'HTML Tutorial', url: '/html' },
  { name: 'CSS Tutorial', url: '/css' },
  { name: 'PPT Tutorials', url: '/mspowerpoint' },
  { name: 'MS Word Tutorial', url: '/msword' },
  { name: 'Computer Basics', url: '/computer' }
  ];

  const rspEducations = [
  { name: 'RSP Projects', url: '/projects' },
  { name: 'RSP Softwares', url: 'https://english.rspcompany.in' },
  { name: 'RSP Code Editor', url: 'https://rsp-code-editor.rspeducation.in' },
  { name: 'Youtube Channels', url: 'https://www.youtube.com/@rspeducation' },
  { name: 'Computer Education', url: '/' }
  ];

  const contacts = [
    { type: 'Email', address: 'info@rspeducation.in' },
    { type: 'Email', address: 'help@rspcompany.in' },
    { type: 'Website', address: 'https://rspcompany.in', text: 'Website: rspcompany.in' }
  ];

  const footerLinks = [
  { href: '/privacy', title: 'Privacy Policy of RSP Education', text: 'Privacy Policy' },
  { href: '/service', title: 'Terms of Service of RSP Education', text: 'Terms of Service' },
  { href: '/copyright', title: 'Copyright Policy of RSP Education', text: 'Copyright Policy' },
  { href: '/contact', title: 'Contact of RSP Education', text: 'Contact' },
  { href: '/about', title: 'About of RSP Education', text: 'About' }
  ];

  return (
    <footer className="rsp-footer">
      {/* Decorative wave at the top of the footer */}
      {/* <svg width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:'block',position:'absolute',top:0,left:0,width:'100%',zIndex:0}}>
        <path d="M0,0 C480,80 960,0 1440,80 L1440,0 L0,0 Z" fill="hsl(181, 48%, 58%)" />
      </svg> */}
      <div className="footer-content" style={{position:'relative',zIndex:1}}>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            {socialLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={link.icon}></i> {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Top Tutorials</h3>
          <ul>
            {topTutorials.map((tutorial, idx) => (
              <li key={idx}>
                <a href={tutorial.url} target="_blank" rel="noopener noreferrer">
                  {tutorial.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>RSP Educations</h3>
          <ul>
            {rspEducations.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacts</h3>
          {contacts.map((contact, idx) => (
            <p key={idx} style={{color:'#fff',marginBottom:'0.5rem'}}>
              {contact.type === 'Website' ? (
                <a href={contact.address} target="_blank" rel="noopener noreferrer" style={{color:'#fff',textDecoration:'underline'}}>
                  {contact.text}
                </a>
              ) : (
                <span>{contact.type}: <a href={`mailto:${contact.address}`} style={{color:'#fff',textDecoration:'underline'}}>{contact.address}</a></span>
              )}
            </p>
          ))}
          <a href="https://rspeducation.in/app" className="download-app-btn">
            Download APP <i className="fa-solid fa-arrow-down-long fa-beat-fade"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; RSP Education has all Copyrights {currentYear}. Developed by RSP Company</p>
        <div className="footer-links">
          {footerLinks.map((link, idx) => (
            <a key={idx} href={link.href} title={link.title} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
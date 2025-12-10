import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Youtube', url: 'https://www.youtube.com/@rspeducation', icon: 'fab fa-youtube', color: 'hover:text-red-500' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100089941092833', icon: 'fab fa-facebook', color: 'hover:text-blue-500' },
    { name: 'Instagram', url: 'https://www.instagram.com/rspeducation/', icon: 'fab fa-instagram', color: 'hover:text-pink-500' },
    { name: 'Twitter', url: 'https://twitter.com/rspeducation_', icon: 'fa-brands fa-x-twitter', color: 'hover:text-gray-400' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/rsp-company-06598527a/', icon: 'fab fa-linkedin', color: 'hover:text-blue-400' }
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
    { type: 'Email', address: 'info@rspeducation.in', icon: 'fas fa-envelope' },
    { type: 'Email', address: 'help@rspcompany.in', icon: 'fas fa-envelope' },
    { type: 'Website', address: 'https://rspcompany.in', text: 'rspcompany.in', icon: 'fas fa-globe' }
  ];

  const footerLinks = [
    { href: '/privacy', title: 'Privacy Policy of RSP Education', text: 'Privacy Policy' },
    { href: '/service', title: 'Terms of Service of RSP Education', text: 'Terms of Service' },
    { href: '/copyright', title: 'Copyright Policy of RSP Education', text: 'Copyright Policy' },
    { href: '/contact', title: 'Contact of RSP Education', text: 'Contact' },
    { href: '/about', title: 'About of RSP Education', text: 'About' }
  ];

  return (
    <footer className="bg-gradient-to-br px-5 from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden ml-[20%] w-[80%]">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00b4d8] rounded-full blur-6xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0077b6] rounded-full blur-6xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full mx-auto px-1 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 w-full">

          {/* Follow Us Section */}
          <div className="space-y-4">
            <h3 className="inline-block text-lg font-bold text-white border-b-2 border-[#00b4d8] pb-2 mb-4">
              Follow Us
            </h3><br></br>
            <ul className=" inline-block space-y-3">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-300 transition-all duration-200 ${link.color} hover:translate-x-1 group`}
                  >
                    <i className={`${link.icon} text-xl w-6 group-hover:scale-110 transition-transform`}></i>
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Tutorials Section */}
          <div className="space-y-4 ">
            <h3 className=" inline-block text-lg font-bold text-white border-b-2 border-[#00b4d8] pb-2 mb-4">
              Top Tutorials
            </h3> <br></br>
            <ul className="inline-block space-y-3">
              {topTutorials.map((tutorial, idx) => (
                <li key={idx}>
                  <Link
                    to={tutorial.url}
                    className="flex items-center gap-2 text-gray-300 hover:text-[#00b4d8] transition-all duration-200 hover:translate-x-1 group text-sm font-medium"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {tutorial.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RSP Educations Section */}
          {/* <div className=" space-y-4">
            <h3 className=" inline-block text-lg font-bold text-white border-b-2 border-[#00b4d8] pb-2 mb-4">
              RSP Educations
            </h3><br></br>
            <ul className=" inline-block space-y-3">
              {rspEducations.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-[#00b4d8] transition-all duration-200 hover:translate-x-1 group text-sm font-medium"
                  >
                    <i className="fas fa-chevron-right text-xs text-[#00b4d8] opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contacts Section */}
          <div className="  space-y-4">
            <h3 className=" inline-block text-lg font-bold text-white border-b-2 border-[#00b4d8] pb-2 mb-4">
              Get In Touch
            </h3><br></br>
            <div className=" inline-block space-y-3">
              {contacts.map((contact, idx) => (
                <div key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                  <i className={`${contact.icon} text-[#00b4d8] mt-1 flex-shrink-0`}></i>
                  {contact.type === 'Website' ? (
                    <a
                      href={contact.address}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00b4d8] transition-colors underline decoration-dotted underline-offset-2"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <a
                      href={`mailto:${contact.address}`}
                      className="hover:text-[#00b4d8] transition-colors break-all"
                    >
                      {contact.address}
                    </a>
                  )}
                </div>
              ))}

              {/* Download App Button */}
              <a
                href="https://rspeducation.in/app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105 group"
              >
                <i className="fa-solid fa-download"></i>
                <span>Download APP</span>
                <i className="fa-solid fa-arrow-down-long fa-beat-fade group-hover:animate-bounce"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className=" md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-400 text-center md:text-center mb-4">
              © RSP Education {currentYear}. All Rights Reserved. Developed by <span className="text-[#00b4d8] font-semibold">RSP Softwares</span>
            </p>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {footerLinks.map((link, idx) => (
                <React.Fragment key={idx}>
                  <Link
                    to={link.href}
                    title={link.title}
                    className="text-xs md:text-sm text-gray-400 hover:text-[#00b4d8] transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.text}
                  </Link>
                  {idx < footerLinks.length - 1 && (
                    <span className="text-gray-600 hidden md:inline">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#00b4d8]"></div>
    </footer>
  );
};
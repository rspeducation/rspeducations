import React from 'react';
import { Link } from 'react-router-dom';

export const ScrollMenu: React.FC = () => {
  const menuItems = [
    { to: '/', text: 'Home' },
    { to: '/Azure', text: 'Azure cloud' },
    { to: '/aws', text: 'AWS' },
    { to: '/html', text: 'HTML' },
    { to: '/css', text: 'CSS' },
    { to: '/javascript', text: 'JavaScript' },
    { to: '/computer', text: 'Computer Basics' },
    { to: '/msword', text: 'MS Word' },
    { to: '/mspowerpoint', text: 'MS Power Point' },
    { to: '/java', text: 'Java', locked: true },
    { to: '/python', text: 'Python', locked: true },
    { to: '/php', text: 'PHP', locked: true },
    { to: '/react', text: 'React', locked: true}
  ];

  const handleLockedClick = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    alert(`${text} will be unlocked soon.`);
  };

  return (
    <div className="scroll-menu-container">
      <div className="scroll-menu">
        {menuItems.map((item, index) => (
          item.locked ? (
            <span
              key={index}
              className="scroll-menu-locked"
              style={{ opacity: 0.5, cursor: 'not-allowed', marginRight: 16 }}
              onClick={e => handleLockedClick(e, item.text)}
            >
              {item.text}
            </span>
          ) : (
            <Link
              key={index}
              to={item.to}
              className={item.to === '/' ? 'first-link' : ''}
              style={{ marginRight: 16 }}
            >
              {item.text}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};
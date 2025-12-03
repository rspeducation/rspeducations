import React from 'react';

interface UpArrowProps {
  show: boolean;
}

export const UpArrow: React.FC<UpArrowProps> = ({ show }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#top"
      className={`up-arrow ${show ? 'show' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      title="Go Top"
    >
      <i className="fa-solid fa-arrow-up fa-bounce"></i>
    </a>
  );
};
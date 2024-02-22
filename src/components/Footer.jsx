import React from 'react';

const Footer = ({ children }) => {
  return (
    <footer className="footer-container bg-gray-900 text-white p-4">
      {children}
    </footer>
  );
}

export default Footer;

import React from 'react';

import './Header.css';

const Header = ({ color, size, text }) => {
  return (
    <p
      className="header source-sans-3-bold"
      style={{ color: color, fontSize: size }}
    >
      {text}
    </p>
  );
};

export default Header;

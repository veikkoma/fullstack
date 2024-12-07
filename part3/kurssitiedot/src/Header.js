import React from 'react';

const Header = ({ name }) => {
  console.log('HEADER component name:', name);

  return <h1>{name}</h1>;
};

export default Header;

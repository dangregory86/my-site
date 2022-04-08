import React from "react";

const NavBar = (props) => {
  return (
    <nav className='nav justify-content-center'>
      <a className='nav-link' href='/'>
        About me
      </a>
      <a className='nav-link' href='/projects'>
        Projects
      </a>
      <a className='nav-link' href='/contact'>
        Contact
      </a>
    </nav>
  );
};

export default NavBar;

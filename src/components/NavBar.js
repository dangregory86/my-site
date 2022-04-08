import React from "react";

const NavBar = (props) => {
  return (
    <nav className='nav justify-content-center'>
      <a className='nav-link' aria-current='page' href='#'>
        About me
      </a>
      <a className='nav-link' href='#'>
        Projects
      </a>
      <a className='nav-link' href='#'>
        Contact
      </a>
    </nav>
  );
};

export default NavBar;

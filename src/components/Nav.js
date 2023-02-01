// import React from "react";
import logo from '../images/logo-bw.svg'
import colorlogo from '../images/logo-wr.svg'

const Nav = ({minimal,authToken}) => {

  return (
  <nav>
    <div className="logo-container">
        <img className="logo" src={minimal ? colorlogo : logo} alt="" />
    </div>
    {!authToken && !minimal && <button className='nav-button'>Log In</button>}
  </nav>
  );
};

export default Nav;

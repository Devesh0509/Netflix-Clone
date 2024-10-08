import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



  return (
    <div className={`nav ${show && 'nav__black'}` }>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="neflix_logo"
      ></img>

      <img 
      className="nav__avatar"
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
      alt="Nav Avatar"
      />
    </div>
  );
}

export default Nav;

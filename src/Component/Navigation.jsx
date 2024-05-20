import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img
            src="https://seeklogo.com/images/W/Watch_Your_Watches-logo-B511B54337-seeklogo.com.png"
            alt=""
          ></img>
        </div>
        <div className="links">
          <ul>
            <li>home</li>
            <li>About</li>
            <li>Contact</li>
            <li>service</li>
          </ul>
        </div>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;

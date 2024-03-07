import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div>
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwW7Be8Ci5_dGIO9cUmqsyGJ_dAnQpPNNCKBNREu6HdDvy2-rg7GKO5YH0ex7uiqD-bkQ&usqp=CAU"
      />
    </div>
  );
}

export default Header = () => {
  return (
    <div className="header">
      {/* {console.log(heading)} */}
      {Title()}
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>

          <li>Contact</li>
          <li>Cart</li>
          <Link to="/instamart">
          <li>InstaMart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

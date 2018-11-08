import React from "react";
import PropTypes from "prop-types";

// function
// function Header() {
//   return (
//     <div>
//       <h1>Contact Manager</h1>
//     </div>
//   );
// }

// arrow function
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
      </div>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>

    // <div>
    //   {/* <h1 style={headingStyle}>{branding}</h1> */}
    //   <h1>{branding}</h1>
    // </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: "red",
//   fontSize: "50px"
// };

export default Header;

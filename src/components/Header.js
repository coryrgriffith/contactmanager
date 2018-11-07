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
    <div>
      <h1 style={headingStyle}>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

const headingStyle = {
  color: "red",
  fontSize: "50px"
};

export default Header;

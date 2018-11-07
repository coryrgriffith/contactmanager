import React from "react";

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
  return (
    <div>
      <h1>{props.branding}</h1>
    </div>
  );
};

export default Header;

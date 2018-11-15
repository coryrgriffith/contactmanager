import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    // javascript version

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The App Component")
    // );

    // const name = "Larry";
    // const showHello = false;
    // const showMath = true;
    // const num1 = 40;
    // const num2 = 23;

    // let math;
    // if (showMath) {
    //   math = (
    //     <h4>
    //       {num1} + {num2} = {num1 + num2}
    //     </h4>
    //   );
    // } else {
    //   math = null;
    // }

    // jsx version
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
            {/* {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
          {math} */}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

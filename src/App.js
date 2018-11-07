import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

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
      <div className="App">
        <Header />
        <Contact />
        {/* {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        {math} */}
      </div>
    );
  }
}

export default App;

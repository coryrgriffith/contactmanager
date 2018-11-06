import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    // javascript version

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "The App Component")
    // );

    // jsx version
    return (
      <div className="App">
        <h1>The App Component</h1>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Test extends Component {
  state = {
    test: "test",
    title: "",
    body: ""
  };

  // runs after component is mounted
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  // runs before component renders
  // Legacy Lifecycle
  // componentWillMount() {
  //   console.log("componentWillMount...");
  // }

  // // runs when component is updated
  // componentDidUpdate() {
  //   console.log("componentDidUpdate...");
  // }

  // // Legacy Lifecycle
  // componentWillUpdate() {
  //   console.log("componentWillUpdate...");
  // }

  // // runs when component receives new props
  // // Legacy Lifecycle
  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("componentWillReceiveProps...");
  // }

  // // must return state or null
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: "something"
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("getSnapshotBeforeUpdate...");
  // }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;

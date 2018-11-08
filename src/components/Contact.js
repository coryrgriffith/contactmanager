import React, { Component } from "react";
import PropTypes from "prop-types";
// import "./contact.css";

class Contact extends Component {
  // example of how to put PropTypes inside class
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  //   phone: PropTypes.string.isRequired
  // };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() => console.log("Hello")}
            className="fas fa-sort-down"
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.proptTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

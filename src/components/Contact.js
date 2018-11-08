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
    const { contact } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{contact.name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {contact.email}</li>
          <li className="list-group-item">Phone: {contact.phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.proptTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;

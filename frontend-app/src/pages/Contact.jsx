import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.562575882523!2d-84.54373758563932!3d33.77196768068308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5194995739127%3A0xb33973e2a12ee231!2s420%20Lee%20Industrial%20Blvd%2C%20Austell%2C%20GA%2030168%2C%20USA!5e0!3m2!1sen!2s!4v1602437117257!5m2!1sen!2s"
          width="400"
          height="450"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    );
  }
}

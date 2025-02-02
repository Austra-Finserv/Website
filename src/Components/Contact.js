import React from "react";
import MessageComponent from "./MessageComponent";
import ContactInfo from "./Contactinfo";

const Contact = () => {
  return (
    <div>

      {/* Display MessageComponent */}
      <MessageComponent />

      {/* Display ContactInfo */}
      <ContactInfo />
    </div>
  );
};

export default Contact;

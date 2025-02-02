import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../Styles/ContactInfo.css";
import qr from "../Images/AustraFinservqr.png";

const ContactInfo = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h3 className="contact-title">Our Location</h3>

        <div className="contact-detail">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <strong>Address:</strong>
            <br />
            110/1, Uthamar Gandhi Rd, Subba Road Avenue,
            <br />
            Nungambakkam, Chennai, Tamil Nadu 600034
          </div>
        </div>

        <div className="contact-detail">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <strong>Phone:</strong>
            <br />
            +91 8220641691, +91 8610803533
          </div>
        </div>

        <div className="contact-detail">
          <FaEnvelope className="contact-icon" />
          <div>
            <strong>Email:</strong>
            <br />
            <a href="mailto:hrconnect@austrafinserv.co.in">
              hrconnect@austrafinserv.co.in
            </a>
          </div>
        </div>

        <div className="contact-detail">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <strong>Location Map:</strong>
            <br />
            <a
              href="https://maps.app.goo.gl/d83962yRwYXPkv1K9"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
            <br />
            <img src={qr} alt="Location QR Code" className="location-qr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

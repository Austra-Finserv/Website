// Footer.js
import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/austrafinserv/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-link">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com/austrafinserv?igsh=N2t1NDUxdjFwN29j" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="icon-link">
                    <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="icon-link">
                    <FaTwitter size={24} />
                </a>
                <a href="https://wa.me/8220641691" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="icon-link">
                    <FaWhatsapp size={24} />
                </a>
                <a href="mailto:info@austrafinserv.co.in " aria-label="Email" className="icon-link">
                    <FaEnvelope size={24} />
                </a>
            </div>
            <div className="footer-text">
                <p>&copy; 2025 Austra Finserv. All Rights Reserved.</p>
                <p>Insurance is the subject matter of solicitation.</p>
            </div>
        </footer>
    );
};

export default Footer;
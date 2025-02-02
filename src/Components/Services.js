import React from "react";
import { FaShieldAlt, FaFileInvoiceDollar, FaLock, FaHandshake, FaHome, FaClock } from "react-icons/fa";
import "../Styles/austraServices.css";

const serviceList = [
  {
    title: "Risk Management",
    icon: <FaShieldAlt className="austra-icon" />,
    description:
      "Our primary focus is to provide clarity on how risk consequences impact a company's performance and deliver customized solutions that foster sustainable growth.",
    highlights: [
      "Expertise in risk identification & loss prevention methodologies",
      "Direct access to risk reduction experts for all hazard types",
      "Innovative solutions for achieving short and long-term goals",
      "Technical assistance in risk communication with stakeholders",
      "Enhancing business continuity, reputation, and value addition",
    ],
  },
  {
    title: "Claim Management",
    icon: <FaFileInvoiceDollar className="austra-icon" />,
    description:
      "Obtaining coverage for risk exposure is easy, but claim settlements can be challenging. We have built a strong reputation in efficiently handling claims across various sectors.",
    highlights: [
      "Efficient claim preparation & optimized claim realization",
      "Step-by-step guidance throughout the claims process",
      "Minimized client involvement in complex claim procedures",
      "Prompt claim settlements to improve cash flow & efficiency",
      "Strategic agreements with insurers to expedite major claims",
    ],
  },
  {
    title: "Cyber Risk Assessment",
    icon: <FaLock className="austra-icon" />,
    description:
      "With the growing reliance on IT systems, cyber threats pose significant financial and operational risks. We provide comprehensive assessments and insurance solutions.",
    highlights: [
      "Coverage for data restoration and investigative costs",
      "Protection against cyber extortion & financial losses",
      "Business interruption coverage due to cyber incidents",
      "Third-party liability including defamation & data breaches",
      "Tailored cyber risk solutions for businesses of all sizes",
    ],
  },
  {
    title: "Reinsurance",
    icon: <FaHandshake className="austra-icon" />,
    description:
      "AUSTRA FINSERV excels in pioneering innovative reinsurance solutions tailored to meet client needs. Our expertise spans facultative and treaty reinsurance.",
    highlights: [
      "Expertise in facultative & treaty reinsurance operations",
      "Strong relationships with global reinsurers for best terms",
      "Tailored risk solutions for mega risks, infrastructure, and energy",
      "Comprehensive placement strategies for marine, casualty, and liability risks",
      "Technical support, training, and strategic advisory services",
    ],
  },
  {
    title: "Doorstep Service",
    icon: <FaHome className="austra-icon" />,
    description:
      "We understand the importance of convenience and personalized service. Our experts visit you at your location to provide on-site risk assessment and consultations.",
    highlights: [
      "On-site consultations for risk evaluation and solutions",
      "Tailored insurance policies crafted for individual business needs",
      "Expert guidance without the need for client travel",
    ],
  },
  {
    title: "24/7 Service",
    icon: <FaClock className="austra-icon" />,
    description:
      "Insurance and risk-related concerns can arise at any time. Our 24/7 support ensures that expert assistance is always available for claims and risk management queries.",
    highlights: [
      "Round-the-clock customer support and assistance",
      "Immediate response to risk and claim-related queries",
      "Ensuring business continuity through timely intervention",
    ],
  },
];

const AustraServices = () => {
  return (
    <div className="austra-container">
      <h2 className="austra-title">Our Services</h2>
      <div className="austra-grid">
        {serviceList.map((service, index) => (
          <div key={index} className="austra-card">
            <div className="austra-icon-container">{service.icon}</div>
            <h3 className="austra-card-title">{service.title}</h3>
            <p className="austra-card-description">{service.description}</p>
            {service.highlights && (
              <ul className="austra-card-highlights">
                {service.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AustraServices;

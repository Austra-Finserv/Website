import React, { useState } from "react";
import "../Styles/Home.css";
import Teamimage from "../Images/Team1.png";
import MessageComponent from "./MessageComponent";
import ContactInfo from "./Contactinfo";
import Partners from "./Partners";
import {
  FaHandshake,
  FaBullseye,
  FaBalanceScale,
  FaTag,
  FaUserShield,
  FaChartLine,
  FaHeartbeat,
  FaPlane,
  FaBriefcase,
  FaBolt,
  FaShip,
  FaUmbrella,
  FaTractor,
  FaFileAlt,
  FaHandsHelping,
  FaHome,
  FaBuilding,
  FaCar,
  FaHeart,
  FaMoneyBillWave,
  FaRegCreditCard,
  FaClipboardList,
  FaPiggyBank,  // For ULIP
  FaPaw,        // For Pet Insurance
  FaShieldAlt,   // For Retirement Plan (security icon)
  FaMotorcycle,  // For 2 Wheeler Insurance (bike icon)
  FaUserAlt,     // For Retirement Plan (person icon)
  FaFemale,      // For Term Life Insurance (Women) icon
  FaHeartBroken, // For 1 Crore Health Cover (different heart icon)
  FaGlobe,       // For Travel Insurance (different travel icon)
  FaGavel,
  FaUserTie,
  FaCoins,
  FaClinicMedical,
  FaHospitalAlt,
  FaTruckMoving,
  FaWarehouse,
  FaPeopleCarry,
  FaTools,
  FaStoreAlt,
  FaUserMd,
  FaBriefcaseMedical,
  FaLock


} from "react-icons/fa";

const Home = () => {
  const [showProducts, setShowProducts] = useState(false);
 
  const reasons = [
    {
      title: "Comprehensive Partnerships",
      description:
        "AUSTRA FINSERV has established agreements with leading insurance and financial companies, giving us access to a vast array of products and services across the market.",
      icon: <FaHandshake className="reason-icon" />,
    },
    {
      title: "Tailored Solutions",
      description:
        "We prioritize understanding each customer's unique needs and profile to recommend the most suitable and competitive solutions available.",
      icon: <FaBullseye className="reason-icon" />,
    },
    {
      title: "Unbiased Guidance",
      description:
        "Unlike providers tied to a single brand, our independence ensures customers receive objective, personalized advice without any bias.",
      icon: <FaBalanceScale className="reason-icon" />,
    },
    {
      title: "Best Value in the Market",
      description:
        "By comparing options from all major companies, we ensure our customers get the best deals and maximum benefits for their investment.",
      icon: <FaTag className="reason-icon" />,
    },
  ];

  const services = [
    { title: "Aviation", icon: <FaPlane className="service-icon" /> },
    { title: "Construction", icon: <FaBuilding className="service-icon" /> },
    { title: "Employee Benefits", icon: <FaBriefcase className="service-icon" /> },
    { title: "Energy", icon: <FaBolt className="service-icon" /> },
    { title: "Liability", icon: <FaClipboardList className="service-icon" /> },
    { title: "Marine", icon: <FaShip className="service-icon" /> },
    { title: "Health", icon: <FaHeartbeat className="service-icon" /> },
    { title: "Personal Lines", icon: <FaUserShield className="service-icon" /> },
    { title: "Rural Insurance", icon: <FaTractor className="service-icon" /> },
    { title: "Treaty", icon: <FaFileAlt className="service-icon" /> },
    { title: "Direct Insurance", icon: <FaUmbrella className="service-icon" /> },
    { title: "Facultative Expertise", icon: <FaHandsHelping className="service-icon" /> },
  ];

  const coreServices = [
    {
      title: "Life Insurance",
      description:
        "Helping customers secure their family's future with comprehensive life insurance plans tailored to their needs and financial goals.",
      icon: <FaHeartbeat className="service-icon" />,
    },
    {
      title: "Health Insurance",
      description:
        "Offering a wide range of health insurance options to protect customers and their loved ones from unexpected medical expenses.",
      icon: <FaUserShield className="service-icon" />,
    },
    {
      title: "Financial Planning",
      description:
        "Providing expert financial advice and solutions to help customers achieve their short-term and long-term financial objectives.",
      icon: <FaChartLine className="service-icon" />,
    },
    {
      title: "Fire Insurance",
      description:
        "Protecting properties against fire damage with affordable and comprehensive coverage.",
      icon: <FaHome className="service-icon" />,
    },
  ];

  const products = [
    {
      category: "Personal Insurance",
      items: [
        { title: "Free of Cost Term Life Insurance", icon: <FaGavel /> },
        { title: "Term Plans with Return of Premium", icon: <FaClipboardList /> },
        { title: "Term Life Insurance (Women)", icon: <FaFemale /> },
        { title: "Term Life Insurance (Self Employed)", icon: <FaUserTie /> },
        { title: "Term Life Insurance (NRIs)", icon: <FaGlobe /> },
      ],
    },
    {
      category: "Investment Plans",
      items: [
        { title: "LIC Plans", icon: <FaBuilding /> },
        { title: "Investment", icon: <FaCoins /> },
        { title: "Child Savings Plan", icon: <FaUserShield /> },
        { title: "Guaranteed Return Plans", icon: <FaMoneyBillWave /> },
        { title: "Retirement Plan", icon: <FaUserAlt /> },
        { title: "Tax Saving Investment", icon: <FaRegCreditCard /> },
        { title: "Pension for Life", icon: <FaBalanceScale /> },
        { title: "Smart Deposit", icon: <FaPiggyBank /> },
        { title: "ULIPs", icon: <FaChartLine /> },
        { title: "Cancer Insurance", icon: <FaHeartBroken /> },
      ],
    },
    {
      category: "Health Insurance",
      items: [
        { title: "Health", icon: <FaHeartbeat /> },
        { title: "OPD", icon: <FaClinicMedical /> },
        { title: "1 Cr Health Cover", icon: <FaHospitalAlt /> },
        { title: "Family Health Insurance", icon: <FaUserShield /> },
        { title: "Cancer Insurance", icon: <FaHeartBroken /> },
      ],
    },
    {
      category: "Other Plans",
      items: [
        { title: "Car Insurance", icon: <FaCar /> },
        { title: "Brand New Car", icon: <FaBolt /> },
        { title: "2 Wheeler Insurance", icon: <FaMotorcycle /> },
        { title: "Travel Insurance", icon: <FaPlane /> },
        { title: "Home Insurance", icon: <FaHome /> },
        { title: "Taxi Insurance", icon: <FaTruckMoving /> },
        { title: "Commercial Vehicle", icon: <FaWarehouse /> },
        { title: "Employee Group Health Insurance", icon: <FaPeopleCarry /> },
        { title: "Corporate Insurance", icon: <FaBriefcase /> },
        { title: "Pet Insurance", icon: <FaPaw /> },
      ],
    },
    {
      category: "Business Insurance - Marine & Property",
      items: [
        { title: "Marine Insurance", icon: <FaShip /> },
        { title: "Fire & Burglary", icon: <FaTools /> },
        { title: "Shop Owner Insurance", icon: <FaStoreAlt /> },
        { title: "Office Package Policy", icon: <FaBuilding /> },
      ],
    },
    {
      category: "Business Insurance - Liability",
      items: [
        { title: "Professional Indemnity for Doctors", icon: <FaUserMd /> },
        { title: "Professional Indemnity for Companies", icon: <FaBriefcaseMedical /> },
        { title: "Workmen Compensation", icon: <FaHandsHelping /> },
        { title: "General Liability", icon: <FaBalanceScale /> },
        { title: "Cyber Insurance", icon: <FaLock /> },
        { title: "Directors & Officers Liability", icon: <FaUserTie /> },
      ],
    },
  ];
  

  return (
    
    <div className="home-content">
      <h2 className="home-title">Why Choose Austra?</h2>
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card-alt">
            <div className="icon-container">{reason.icon}</div>
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
          </div>
        ))}
      </div>



      <h2 className="Services-title">Our Services</h2>
      <div className="services-container">
        <div className="services-description">
          <div className="image-header">
            <img src={Teamimage} alt="Team Discussion" />
          </div>
          <h3>Tailored solutions for every insurance need.</h3>
          <p>
            We specialize in providing tailored solutions that meet your unique
            needs. Whether it's securing your future, protecting your health,
            or planning for financial success, we are here to guide you at
            every step.
          </p>
        </div>

        <div className="services-icons">
          {services.map((service, index) => (
            <div key={index} className="service-icon-card">
              <div className="icon-container">{service.icon}</div>
              <p className="service-title">{service.title}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="Core-tittle">Core Services</h2>
      <div className="reasons-grid">
        {coreServices.map((service, index) => (
          <div key={index} className="reason-card-alt">
            <div className="icon-container">{service.icon}</div>
            <h3 className="reason-title">{service.title}</h3>
            <p className="reason-description">{service.description}</p>
          </div>
        ))}
      </div>

     

      {/* View All Products Button */}
      <div className="view-products-button-container">
        <button
          className="view-products-button"
          onClick={() => setShowProducts(!showProducts)}
        >
          {showProducts ? "Hide Products" : "View All Products"}
        </button>
      </div>

      {/* Products Section */}
{showProducts && (
  <div className="products-section">
    {products.map((category, index) => (
      <div key={index} className="product-category">
        {/* Category Title */}
        <h3 className="product-category-title">{category.category}</h3>
        <div className="product-items">
          {/* Product Items */}
          {category.items.map((product, idx) => (
            <div key={idx} className="product-item">
              <div className="icon-container">{product.icon}</div>
              <p className="product-title">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)}

<MessageComponent />
<ContactInfo/>
<Partners/>


    </div>
  );
};

export default Home;

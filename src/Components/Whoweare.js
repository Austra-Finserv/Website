import React from "react";
import { FaUserTie, FaLightbulb, FaHandshake, FaChartLine, FaUsers, FaCogs } from "react-icons/fa";
import "../Styles/WhoWeAre.css"; // Link to the CSS file
import AG from "../Images/AG.jpg";

const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <h1 className="who-we-are-title">Who We Are</h1>
        <div className="who-we-are-content">
          <div className="who-we-are-card">
            <FaUserTie className="icon" />
            <h3>Industry Veterans</h3>
            <p>
              <strong>AUSTRA FINSERV</strong> is led by industry veterans with over
              <strong> 23 years of experience</strong> in the insurance and financial sectors.
            </p>
          </div>
          <div className="who-we-are-card">
            <FaCogs className="icon" />
            <h3>Skilled Professionals</h3>
            <p>
              Our dedicated team consists of highly skilled professionals, each with a minimum
              of <strong>15 years of experience</strong> in the IT industry.
            </p>
          </div>
          <div className="who-we-are-card">
            <FaChartLine className="icon" />
            <h3>Combined Expertise</h3>
            <p>
              By combining decades of expertise in both finance and technology, we deliver
              cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <h2 className="mission-vision-title">Mission and Vision</h2>
        <div className="mission-vision-grid">
          <div className="mission-card">
            <FaUserTie className="icon" />
            <h3>Mission</h3>
            <p>
              To become a trusted partner in providing best-in-class insurance and financial solutions,
              empowering individuals and businesses with tailored services that perfectly align with their needs.
            </p>
          </div>
          <div className="vision-card">
            <FaLightbulb className="icon" />
            <h3>Vision</h3>
            <p>
              At <strong>AUSTRA FINSERV</strong>, our mission is to simplify the process of accessing
              insurance and financial services by delivering personalized and adaptable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Work Philosophy Section */}
      <section className="work-philosophy-section">
        <h2 className="work-philosophy-title">Our Work Philosophy</h2>
        <p className="section-description">Empowering your future with smarter strategies.</p>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <FaChartLine className="icon" />
            <h3>Policy Stress Testing</h3>
            <p>
              We investigate loss scenarios, including mitigation options and insurance coverage,
              to identify your risk exposures and help craft suitable policy options.
            </p>
          </div>
          <div className="philosophy-card">
            <FaCogs className="icon" />
            <h3>Risk Identification and Assessment</h3>
            <p>
              Our team conducts comprehensive risk assessments to create accurate risk profiles
              and provide advice on risk retention and transfer solutions.
            </p>
          </div>
          <div className="philosophy-card">
            <FaHandshake className="icon" />
            <h3>Customized Solutions</h3>
            <p>
              We prioritize understanding your business, listening to your problems,
              and solving them with innovative and customized insurance programs.
            </p>
          </div>
          <div className="philosophy-card">
            <FaUsers className="icon" />
            <h3>Claims Servicing</h3>
            <p>
              We ensure seamless claims servicing, from the appointment of the surveyor to claims settlement,
              making us the "Broker of Choice" for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="target-audience-section">
        <div className="target-audience-content">
          {/* Left side for image */}
          <div className="target-audience-image">
            <img src={AG} alt="Target Audience" />
          </div>
          {/* Right side for text */}
          <div className="target-audience-text">
            <h2 className="target-audience-title">Target Audience</h2>
            <p className="target-description">
              Our primary focus is on <strong>salaried individuals</strong>, helping them secure
              their financial future with tailored insurance and financial solutions. However,
              <strong> AUSTRA FINSERV</strong> is committed to serving people from all walks of life,
              offering comprehensive support and adaptable services to meet diverse needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
import React from "react";
import "../Styles/InsuranceSolutions.css"; // Link to the updated CSS file
import meetSameerImg from "../Images/meet-sameer.jpeg";
import boughtPolicyImg from "../Images/Policy.jpeg";
import unfortunateDeathImg from "../Images/unfortunate-death.jpeg";
import claimImg from "../Images/claim.png";
import afterClaimImg from "../Images/after-claim.jpeg";


const InsuranceSolutions = () => {
  const steps = [
    {
      title: "Meet Sameer",
      description: "Sameer, a healthy and non-smoking male.",
      image: meetSameerImg, // Replace with actual image paths
    },
    {
      title: "Bought Policy",
      description: "Sameer bought ₹1 crore Term Insurance for a 25-year policy term to secure his wife financially.",
      image: boughtPolicyImg,
    },
    {
      title: "Unfortunate Death",
      description: "In the 9th policy year, Sameer suffered an unfortunate death.",
      image: unfortunateDeathImg,
    },
    {
      title: "Claim",
      description: "His wife received a ₹1 crore death benefit from the insurer.",
      image: claimImg,
    },
    {
      title: "After Claim",
      description: "His wife can use the benefit & maintain her current quality of life.",
      image: afterClaimImg,
    },
  ];

  const categories = [
    {
      title: "Individual Insurance",
      icon: "fas fa-user-shield",
      items: ["Motor", "Travel", "Home Insurance", "Health Insurance", "Personal Accident", "Education Insurance", "Critical Illness Insurance"],
    },
    {
      title: "Marine",
      icon: "fas fa-ship",
      items: [
        "Marine Cargo Insurance",
        "Marine Hull Insurance",
        "Freight Insurance",
        "Ship Repairer's Liability Insurance",
        "Marine Liability Insurance",
        "Offshore Energy Insurance",
        "Fishing Vessel Insurance",
      ],
    },
    {
      title: "Liability Solutions",
      icon: "fas fa-briefcase",
      items: [
        "Liability Act only (Compulsory Public Liability)",
        "Professional Indemnity",
        "Public Liability (General)",
        "Public Liability (Industrial)",
        "Directors and Officers Liability (D&O)",
        "Commercial General Liability (CGL)",
        "Fidelity Guarantee Insurance",
      ],
    },
    {
      title: "Engineering Insurance",
      icon: "fas fa-tools",
      items: [
        "Contractors All Risk Policy (CAR)",
        "Electronic Equipment Insurance (EEI)",
        "Fire and Allied Perils",
        "Machinery Breakdown (MBD)",
        "Machinery Loss of Profit (MLOP)",
      ],
    },
    {
      title: "Miscellaneous Solutions",
      icon: "fas fa-box-open",
      items: [
        "Money Insurance",
        "Workman's Compensation (WC)",
        "Plate Glass Insurance",
        "All Risk Policy",
        "Burglary Insurance",
      ],
    },
  ];

  return (
    <div className="solutions-container">
      {/* Introduction Section */}
      <div className="intro-section">
        <div className="intro-text">
          <h1>Understanding Term Insurance</h1>
          <p>
            Term insurance is a straightforward and affordable way to provide financial security for your loved ones. 
            It offers coverage for a defined period and requires the policyholder to pay fixed premiums. 
            If the insured person passes away during the policy term, their family or nominee receives a lump sum amount to ensure financial stability.
          </p>
          <p>
            Additionally, term insurance policies often include benefits like tax exemptions under specific government provisions, critical illness coverage, and optional add-ons for enhanced protection.
          </p>
        </div>
        <div className="example-section">
          <h2>How Term Insurance Works – An Example</h2>
          <div className="example-steps">
            <div className="step">
              <h3>Step 1: Policy Purchase</h3>
              <p>
                Sameer, a 30-year-old non-smoker, purchases a term insurance plan with a coverage amount of ₹1 crore for 25 years. 
                His annual premium is ₹9,000.
              </p>
            </div>
            <div className="step">
              <h3>Step 2: Unfortunate Event</h3>
              <p>
                In the 9th year of the policy, Sameer passes away due to an unfortunate event. 
                The policy ensures his wife receives the entire coverage amount of ₹1 crore.
              </p>
            </div>
            <div className="step">
              <h3>Step 3: Financial Security</h3>
              <p>
                The lump sum payment allows Sameer's wife to maintain her quality of life and meet financial responsibilities without stress.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Steps Section */}
      <div className="steps-container">
  <h2>How It Works: An Illustration</h2>
  <div className="steps-grid">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <div className="step-card">
          <img src={step.image} alt={step.title} className="step-image" />
          <h3 className="step-title">{step.title}</h3>
          <p className="step-description">{step.description}</p>
        </div>
        {index !== steps.length - 1 && (
          <div className="step-arrow">→</div>
        )}
      </React.Fragment>
    ))}
  </div>
</div>
<div className="insurance-container">
  <div className="intro-section">
    <div className="intro-text">
      <h1> Understanding Health Insurance</h1>
      <p>
        In simple terms, when you buy health insurance, you get a financial cover up to a certain amount for the medical expenses you may incur in a year. 
        It covers emergency and planned expenses for hospitalization, day-care treatments, surgeries, pre and post-hospitalization, ambulance charges. 
        Hence, a right health insurance policy helps you ward off unnecessary financial burden when a medical situation or emergency arises. 
        Moreover, it also offers tax savings under Section 80D of the Income Tax, 1961 on the premium amount you pay to the insurer.
      </p>
    </div>
    <div className="coverage-section">
      <h2><i className="fas fa-shield-alt"></i> What is the Ideal Coverage for Health Insurance?</h2>
      <p>
        Health insurance coverage should be tailored to individual medical needs and circumstances. 
        An ideal health insurance plan is usually suggested to have a sum insured equal to at least half of your annual income. 
        You must check if it is sufficient to meet your medical expenses. 
        Experts suggest buying a health cover of at least ₹10 lakhs to combat rising healthcare costs easily.
      </p>
      <p>
        You must consider the following three factors to decide the ideal coverage for your health insurance plan:
      </p>
      <ul>
        <li><i className="fas fa-city"></i> City of residence (i.e., tier-1, tier-2, or tier-3 city)</li>
        <li><i className="fas fa-user-md"></i> Age or life stage of the insured</li>
        <li><i className="fas fa-inflation"></i> Future healthcare costs (while considering medical inflation)</li>
      </ul>
    </div>
  </div>

  <div className="benefits-section">
    <h2><i className="fas fa-thumbs-up"></i> Benefits of Buying Health Insurance Plans Online</h2>
    <p>Buying a health insurance policy online comes with several benefits. Take a look at them below:</p>
    <ul>
      <li><i className="fas fa-check-circle"></i> <strong>Easier to Compare Plans:</strong> It is easier to compare health insurance plans from different insurers online at websites like Policybazaar.com to make an informed decision.</li>
      <li><i className="fas fa-laptop"></i> <strong>More Convenient:</strong> It is more convenient to buy the policy online as you do not have to visit the branch of the insurance company or take an appointment to meet an insurance agent.</li>
      <li><i className="fas fa-tags"></i> <strong>Online Discounts:</strong> It allows you to avail discount on premiums for buying the policy online.</li>
      <li><i className="fas fa-money-bill-wave"></i> <strong>Lower Premiums:</strong> Health plans are available for a lower premium online as insurance companies save a lot on operational costs.</li>
      <li><i className="fas fa-file-alt"></i> <strong>Minimal Paperwork:</strong> The process of buying a health insurance policy online involves minimum to zero paperwork.</li>
      <li><i className="fas fa-clock"></i> <strong>Policy Available 24x7:</strong> A health insurance policy can be purchased online any time of the day, even on public holidays, which is not possible in offline buying.</li>
      <li><i className="fas fa-credit-card"></i> <strong>Digital Payment Options:</strong> It allows you to avoid cash payments and use digital payment methods to pay the premium online safely.</li>
      <li><i className="fas fa-hourglass-half"></i> <strong>Time-saving:</strong> It saves you a lot of time as the policy is issued within a few minutes of buying.</li>
    </ul>
  </div>

  <div className="coverage-details">
    <h2><i className="fas fa-medkit"></i> What is Covered in a Health Insurance Plan?</h2>
    <p>Most health insurance plans in India cover the following medical expenses:</p>
    <ul>
      <li><i className="fas fa-hospital"></i> <strong>In-patient Hospitalization Expenses:</strong> The hospitalization expenses incurred during the treatment of an illness or injury are covered, provided the hospitalization is for more than 24 hours.</li>
      <li><i className="fas fa-user-injured"></i> <strong>Pre-existing Illnesses or Diseases:</strong> After the completion of the waiting period, you can file a claim for the expenses incurred on the treatment of any pre-existing illness or condition.</li>
      <li><i className="fas fa-clinic-medical"></i> <strong>Pre and Post Hospitalization Expenses:</strong> Medical expenses incurred on blood tests, x-rays, and other medical check-ups required before hospitalization are covered by the insurance company. Similarly, the cost of medicines and preventive health check-ups done to ascertain your recovery after discharge from the hospital is also covered under most health insurance plans.</li>
      <li><i className="fas fa-ambulance"></i> <strong>Ambulance Charges:</strong> Although the coverage amount varies from insurer to insurer, most medical insurance plans cover emergency ambulance charges.</li>
      <li><i className="fas fa-baby-carriage"></i> <strong>Maternity Cover:</strong> Medical expenses incurred during the pregnancy and delivery are covered along with newborn baby expenses.</li>
      <li><i className="fas fa-stethoscope"></i> <strong>Preventive Health Check-ups:</strong> Regular health check-up facilities are also made available in most health insurance plans in India.</li>
      <li><i className="fas fa-calendar-day"></i> <strong>Day-Care Procedures:</strong> Day care treatments are covered by health plans where hospitalization of more than 24 hours is not required. It includes eye surgery, dialysis, and other common day care surgeries, as mentioned in your policy document.</li>
      <li><i className="fas fa-home"></i> <strong>Home Treatment Cover:</strong> It also covers the expenses incurred on getting medical treatment at home on the advice of a medical practitioner.</li>
      <li><i className="fas fa-leaf"></i> <strong>AYUSH Benefit:</strong> A health insurance plan also reimburses the hospitalization costs incurred on availing Ayurveda, Unani, Siddha, Yoga or Homeopathy treatment up to the specified limit.</li>
      <li><i className="fas fa-brain"></i> <strong>Mental Healthcare Cover:</strong> All health plans in India cover mental illnesses as per the Mental Healthcare Act, 2017. IRDAI had directed all insurers to amend health policies to cover the in-patient treatment of mental illnesses, like acute depression, bipolar affective disorder, schizophrenia, etc., by 31st October 2022.</li>
    </ul>
  </div>

  <div className="exclusions-section">
    <h2><i className="fas fa-times-circle"></i> What is Not Covered in a Health Insurance Plan?</h2>
    <p>The following medical expenses and situations are usually not covered in a health insurance plan:</p>
    <ul>
      <li><i className="fas fa-calendar-times"></i> Unless there is an accidental emergency, claims arising during the initial 30 days of buying a health insurance plan are not covered.</li>
      <li><i className="fas fa-medkit"></i> Coverage of pre-existing diseases is subject to a waiting period of 2 to 4 years.</li>
      <li><i className="fas fa-hourglass-start"></i> Critical illnesses coverage usually comes with a 90-day waiting period.</li>
      <li><i className="fas fa-bomb"></i> Injuries caused by war/terrorism/nuclear activity.</li>
      <li><i className="fas fa-user-times"></i> Self-inflicted injuries or suicide attempts.</li>
      <li><i className="fas fa-bed"></i> Terminal illnesses and other diseases of a similar nature.</li>
      <li><i className="fas fa-cut"></i> Cosmetic/plastic surgery and replacement of hormone surgery.</li>
      <li><i className="fas fa-tooth"></i> Non-accidental dental treatments.</li>
      <li><i className="fas fa-bed"></i> Bed rest and rehabilitation.</li>
      <li><i className="fas fa-search"></i> Diagnostic tests.</li>
      <li><i className="fas fa-running"></i> Claims arising out of adventure sports injuries.</li>
    </ul>
  </div>
</div>

<div className="insurance-container">
  <div className="intro-section">
    <div className="intro-text">
      <h1>Understanding Motor Insurance</h1>
      <p>
        Motor insurance or vehicle insurance covers various vehicle types, including cars, two-wheelers, trucks, autorickshaws, and electric vehicles (EVs). 
        It safeguards you against third-party liabilities arising from an accident involving your insured vehicle. 
        Moreover, a motor insurance policy provides financial coverage for damages to your own vehicle from accidents, natural disasters, theft, and fire. 
        In India, you should have at least third-party motor insurance to drive legally in public spaces.
      </p>
    </div>

    <div className="benefits-section">
      <h2><i className="fas fa-car"></i> Features of Motor Insurance</h2>
      <ul>
        <li><i className="fas fa-shopping-cart"></i> <strong>Easy Online Purchase:</strong> Compare quotes from top insurers and buy motor insurance online hassle-free.</li>
        <li><i className="fas fa-redo"></i> <strong>Convenient Renewal:</strong> Renew your vehicle insurance policy online from anywhere.</li>
        <li><i className="fas fa-plus-circle"></i> <strong>Customizable Add-ons:</strong> Enhance your coverage by adding optional benefits at the time of purchase or renewal.</li>
        <li><i className="fas fa-car-crash"></i> <strong>Comprehensive Coverage:</strong> Protects against accidents, theft, fire, vandalism, natural disasters, and manmade calamities.</li>
        <li><i className="fas fa-tools"></i> <strong>Cashless Claim Facility:</strong> Get your vehicle repaired at network garages without paying upfront.</li>
        <li><i className="fas fa-star"></i> <strong>No Claim Bonus (NCB):</strong> Enjoy discounts on renewal premiums for claim-free years.</li>
      </ul>
    </div>
  </div>

  <div className="coverage-details">
    <h2><i className="fas fa-car-side"></i> Types of Motor Insurance</h2>
    <ul>
      <li><i className="fas fa-car"></i> <strong>Car Insurance:</strong> Covers own car damages from accidents, theft, fire, and natural disasters, along with third-party liabilities.</li>
      <li><i className="fas fa-motorcycle"></i> <strong>Bike Insurance:</strong> Provides financial protection for two-wheelers against own damages and third-party liabilities.</li>
      <li><i className="fas fa-truck"></i> <strong>Commercial Vehicle Insurance:</strong> Covers trucks, auto-rickshaws, and goods carriers against damages, theft, and third-party losses.</li>
    </ul>
  </div>

  <div className="exclusions-section">
    <h2><i className="fas fa-file-alt"></i> Types of Vehicle Insurance Policies in India</h2>
    <ul>
      <li><i className="fas fa-user-shield"></i> <strong>Third-Party Insurance:</strong> Mandatory by law, covering third-party injuries, death, or property damage.</li>
      <li><i className="fas fa-car-battery"></i> <strong>Standalone Own Damage (OD) Insurance:</strong> Covers damages to the insured vehicle due to accidents, fire, theft, or natural calamities.</li>
      <li><i className="fas fa-shield-alt"></i> <strong>Comprehensive Insurance:</strong> A complete plan covering both own damages and third-party liabilities.</li>
    </ul>
  </div>
</div>


      {/* Solutions Section */}
      <h1 className="solutions-title">Explore Insurance Solutions</h1>
      <div className="solutions-grid">
        {categories.map((category, index) => (
          <div key={index} className="solution-card">
            <div className="solution-header">
              <i className={category.icon + " solution-icon"}></i>
              <h2 className="solution-title">{category.title}</h2>
            </div>
            <ul className="solution-list">
              {category.items.map((item, idx) => (
                <li key={idx} className="solution-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceSolutions;

import React from "react";
import "../Styles/Partners.css";
import DigitLifeInsurance from "../Images/Digit-Life-Insurance.png";
import Digit from "../Images/Digit.png";
import CholaMS from "../Images/Chola-Ms.png";
import CanaraHSBC from "../Images/Canara-HSBC-Life-Insurance.jpg";
import Bharti from "../Images/Bharti.png";
import BandhanLife from "../Images/Bandhan-Life.jpg";
import BajajCaringlyYours from "../Images/Bajaj-Allianz-Caringly-Yours.png";
import BajajLife from "../Images/Bajaj-Allianz-Life.png";
import AxisMaxLife from "../Images/Axis-Max-Life-Insurance.png";
import AvivaLife from "../Images/Aviva-Life-Insurance.png";
import AgeasFederal from "../Images/AgeasFederal.png";
import AdityaBirlaLife from "../Images/Adithya-Birla-Life.jpeg";
import AdityaBirlaHealth from "../Images/Adithya-Birla-Health.jpeg";
import CareHealth from "../Images/Care-Health-Insurance.jpeg";
import Futuregeneral from "../Images/Future-Generali.png";
import edelweiss from "../Images/edelweiss-life-insurance.jpeg"
import Hdfclife from "../Images/HDFC-LIFE.png";
import Icicilombard from "../Images/ICICI-Lombard.jpeg";
import IciciPrudential from "../Images/ICICI-Prudential.jpg";
import IFCOTOKIO from "../Images/IFCO-TOKIO.png";
import Indiafirst from "../Images/Indiafirst.jpeg";
import Kotak from "../Images/Kotak-Life.png";
import Liberty from "../Images/Liberty-Insurance.jpeg";
import Lic from "../Images/lic.png";
import Manipal from "../Images/Manipal.png";
import Magma from "../Images/Magma.png";
import Reliance from "../Images/Reliance-General.png";
import NationalInsurance from "../Images/National-insurance.jpeg";
import NivaBupa from "../Images/NivaBupa.png";
import OrientalInsurance from"../Images/Oriental.png";
import Pramerica from "../Images/pramerica.png";
import Pnb from "../Images/Pnb-met-life.png";
import Sbigeneral from "../Images/SBI-general.png";
import Sbilife from "../Images/SBI-life.png";
import ShriramLife from "../Images/Shriram-Life-Insurance.png";
import Shriramgeneral from "../Images/Shriram-Insurance.jpeg";
import Tataaia from "../Images/Tata-aia.png";
import Tataaig from "../Images/Tata-aig-insurance.png";
import Newindia from "../Images/New-India.jpeg";
import UnitedIndia from "../Images/United-India-Insurance.jpeg";
import Unitedsompo from "../Images/United-sompo.png";
import Zuno from "../Images/Zuno.png";
import Sundaram from "../Images/Sundaram-Insurance.png";
import StarHealth from "../Images/Star-Health.png";
import StarUnion from "../Images/Start-Union.png";

const partners = [
    { name: "Reliance", img: Reliance},
    { name: "Lic", img: Lic},
    { name: "Future Generali", img: Futuregeneral},
    { name: "Aditya Birla Health", img: AdityaBirlaHealth },
    { name: "National Insurance", img: NationalInsurance},
    { name: "Sundaram Insurance", img: Sundaram},
    { name: "Star Health", img: StarHealth},
    { name: "Digit Life Insurance", img: DigitLifeInsurance },
    { name: "Sbilife", img:Sbilife},
    { name: "United India", img: UnitedIndia },
    { name: "Shriramgeneral", img:Shriramgeneral},
    { name: "IFCOTOKIO", img: IFCOTOKIO},
    { name: "Star Union", img: StarUnion},
    { name: "Tata aig", img:Tataaig},
    { name: "ICICI-Lombard", img:Icicilombard},
    { name: "Pramerica", img:Pramerica},
    { name: "Tata aia", img:Tataaia},
    { name: "Niva-Bupa", img:NivaBupa},
    { name: "United Sompo", img: Unitedsompo },
    { name: "Shriramlife", img:ShriramLife},
    { name: "Manipal", img:Manipal},
    { name: "Sbigeneral", img:Sbigeneral},
    { name: "Oriental", img: OrientalInsurance},
    { name: "edelweiss", img:edelweiss},
    { name: "New India", img: Newindia},
    { name: "Chola MS", img: CholaMS },
    { name: "HDFC Life", img:Hdfclife},
    { name: "Indiafirst", img:Indiafirst},
    { name: "Pnb met life", img:Pnb},
    { name: "ICICI-Prudential", img:IciciPrudential},
    { name: "Canara HSBC Life Insurance", img: CanaraHSBC },
    { name: "Kotak Life", img: Kotak},
    { name: "Bharti", img: Bharti },
    { name: "Bandhan Life", img: BandhanLife },
    { name: "Bajaj Allianz Caringly Yours", img: BajajCaringlyYours },
    { name: "Bajaj Allianz Life", img: BajajLife },
    { name: "Axis Max Life Insurance", img: AxisMaxLife },
    { name: "Aviva Life Insurance", img: AvivaLife },
    { name: "Ageas Federal", img: AgeasFederal },
    { name: "Magma", img: Magma},
    { name: "Liberty Insurance", img: Liberty},
    { name: "Digit", img: Digit },
    { name: "Aditya Birla Life", img: AdityaBirlaLife },
    { name: "Care Health Insurance", img: CareHealth },
    { name: "Zuno", img: Zuno}


  ];
  
const Partners = () => {
  return (
    <div className="partners-container">
      <h2 className="partners-title">Our Partners</h2>
      <p className="partners-subtitle">Leading insurers for your financial freedom</p>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.img} alt={partner.name} className="partner-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

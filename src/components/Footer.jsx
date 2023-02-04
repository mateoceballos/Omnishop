import React from "react";
import omniP from "../assets/img/OmniP.svg";
const Footer = () => {
  return (
    <div className="footerDiv">
      <p className="pNewsFooter">Newsletter</p>
      <div className="footerTxts">
        <p>Todos los derechos reservados</p>
        <p>2023</p>
        <p>Omnishop</p>
      </div>
      <img src={omniP} alt="" />
    </div>
  );
};

export default Footer;

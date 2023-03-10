import { useContext, useState } from "react";
import HandLogo from "../assets/img/LogoG2x.png";
import BigOLogo from "../assets/img/LogoOm2x.png";
import { ProcessBase } from "../components/ProcessBase";
import { validContext } from "../App";
export default function PrincipalPage() {
  const [process, setProcess] = useState("Log");
  const processSesion = (proc) => {
    setProcess(proc);
  };
  const { loading } = useContext(validContext);
  return (
    <>
      <div className={`${loading[0].regis ? "imgGenComplete imgReg" : "dn"} `}>
        <div>
          <img src={BigOLogo} alt="" />
          <p className="">Registro completo</p>
        </div>
      </div>
      <div className={`${loading[0].log ? "imgGenComplete imgLog " : "dn"} `}>
        <div>
          <img src={BigOLogo} alt="" />
          <p className="">Ingresando</p>
        </div>
      </div>
      <div className="baseDivSession">
        <img src={BigOLogo} alt="" className="imgLogoB" />
        <img src={HandLogo} alt="" className="imgLogoH" />
        <p className="pMainView">
          Bienvenido <span className="pColorPerso">a Omnishop</span>
        </p>
        <p className="pSecondTxt">Ingresa o regístrate en Omniapp</p>
        <div className="containerProcess">
          <div
            className={`genBTP ${process === "Log" ? "first" : "second"}`}
            onClick={() => processSesion("Log")}
          >
            Ingreso
          </div>
          <div
            className={`genBTP ${process === "Reg" ? "first" : "second"}`}
            onClick={() => processSesion("Reg")}
          >
            Registro
          </div>
          <ProcessBase state={process} />
        </div>
      </div>
    </>
  );
}

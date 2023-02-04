import burger from "../assets/img/Burg.svg";
import omni from "../assets/img/OmniP.svg";
import { ProdSlider } from "../components/products/ProdSlider";
import { InfoProds } from "../components/products/InfoProds";
import Footer from "../components/Footer";

export function Product() {
  return (
    <div className="baseProds">
      <img className="imgBurger" src={burger} alt="" />
      <div className="divImgOmni">
        <img src={omni} alt="" />
      </div>
      <div className="divContainerProdGen">
        <ProdSlider />
        <InfoProds />
        <Footer />
      </div>
    </div>
  );
}

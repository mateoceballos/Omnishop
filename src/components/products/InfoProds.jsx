import React from "react";

import stars from "../../assets/img/Stars.svg";
import heart from "../../assets/img/Hea.svg";

import { prods } from "../../store/products/ProductsDB";

export const InfoProds = () => {
  const prod = prods();

  return (
    <div className="infoProsBase">
      <div className="newBtn">NEW</div>
      <img className="imgHeart" src={heart} alt="" />
      <div className="infoGrid">
        <p className="pTitleProd">{`${prod[0].title}`}</p>
        <img className="imgStars" src={stars} alt="" />
        <div className="priceDivP">
          <p className="pNormalP">{`${prod[0].price}`}</p>
          <p className="pOfertP">{`${prod[0].ofert}`}</p>
        </div>
        <div className="sizes">
          <div
            className={` boxSizes ${
              prod[0].size === "XXS" ? "borderSelec" : ""
            }`}
          >
            XXS
          </div>
          <div
            className={` boxSizes ${
              prod[0].size === "XS" ? "borderSelec" : ""
            }`}
          >
            XS
          </div>
          <div
            className={` boxSizes ${prod[0].size === "S" ? "borderSelec" : ""}`}
          >
            S
          </div>
          <div
            className={` boxSizes ${prod[0].size === "M" ? "borderSelec" : ""}`}
          >
            M
          </div>
          <div
            className={` boxSizes ${prod[0].size === "L" ? "borderSelec" : ""}`}
          >
            L
          </div>
          <div
            className={` boxSizes ${
              prod[0].size === "XL" ? "borderSelec" : ""
            }`}
          >
            XL
          </div>
          <div className={` boxSizes ${prod[0].size === "XXL" ? "" : ""}`}>
            XXL
          </div>
        </div>
        <div className="btnsProd">
          <div className="inventaryP">
            <p className="coloredP">-</p>
            <p>1</p>
            <p className="coloredP">+</p>
          </div>
          <div className="addCar">Agregar al carrito</div>
        </div>
        <div className="descBox">
          <p className="titleDesc">DESCRIPCIÓN:</p>
          <p className="descProduct">{`${prod[0].description}`}</p>
          <p className="readMore">Leer más</p>
        </div>
        <div className="moreP">
          <p className="pMoreProds">TAMBIÉN TE PODRÍA GUSTAR</p>
          <div className="sliderMoreProds">
            {prod.map((data, index) => {
              return (
                <div className="productItem" key={index}>
                  <img src={data.unicImg} alt="" />
                  <p className="titlePMore">{data.titleP}</p>
                  <p className="pPriceP">{data.price}</p>
                </div>
              );
              // return "";
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

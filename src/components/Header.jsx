import React from "react";

export default function Header() {
  return (
    <div className="header-content">
      <div className="header-text">
        <span className="header-p">
          <img  src="img/foiz.png" alt="" /> 20%     
          <span className=" opasity bg-color"> DISCOUNT FOR </span>1 MONTH
          <span className=" opasity bg-color"> ACCOUNT</span>
        </span>
        <h1>
          The Next <span className="gradient">Generation</span> Payment Method.
        </h1>
        <p className="opasity">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <span className="get-sterted gradient">
          Get <br /> Started
        </span>
      </div>
      <img className="header-img" src="img/header.png" alt="" />    
    </div>
  );
}

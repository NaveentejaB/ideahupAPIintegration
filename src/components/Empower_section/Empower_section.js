import React from "react";
import "./Empower_section.css";
// custom icons
import { LiaAwardSolid } from "react-icons/lia";
import { TiStarFullOutline } from "react-icons/ti";
const EmpowerSection = () => {
  return (
    <section className="empower_section">
      <div className="empower_section_container container_padding">
        <div className="empower_section_title">
          <h1 className="empower_title">
            Empowering your ideas<span className="yellow_color">!</span>
          </h1>
        </div>
        <div className="empower_section_content">
          <div className="empower_section_prices">
            <LiaAwardSolid className="icons" />
            <span className="price_text">Win amazing Prices</span>
          </div>
          <div className="empower_section_prices">
            <TiStarFullOutline className="icons" />
            <span className="price_text">Inspire Change</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpowerSection;

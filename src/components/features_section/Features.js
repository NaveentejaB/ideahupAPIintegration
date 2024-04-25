import React from "react";
import "./Features.css";

import SideImg from "../../assets/svg_files/side.svg";
import { FeaturesData } from "../../constants";

const Features = () => {
  return (
    <section className="features_section">
      <div className="features_section_container container">
        <div className="features_heading">
          <h1 className="heading">Features That Celebrate Your Innovations</h1>
        </div>
        <div className="features_section_cards">
          {FeaturesData.map((item) => (
            <div className="feature_card">
              <div className="card_icon">{item.icon}</div>
              <div className="card_text">
                <h3 className="card_head">{item.title}</h3>
                <span className="card_sub_text">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="feat_side_img">
        <img src={SideImg} alt="side_image" className="feat_section_img" />
      </div>
    </section>
  );
};

export default Features;

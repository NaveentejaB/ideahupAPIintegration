import React from "react";
import "./Evaluating.css";

import EvaluatingImage from "../../assets/svg_files/evaluating.svg";

const Evaluating = () => {
  return (
    <section className="evaluating">
      <div className="evaluating_section_container container">
        <div className="evaluating_image">
          <img
            src={EvaluatingImage}
            alt="person_phone"
            className="evaluating_img"
          />
        </div>
        <div className="evaluating_content">
          <h1 className="heading full_w">
            Evaluating Innovation Impact and Success
          </h1>
          <span className="sub_text">
            Our metrics showcase extensive community growth, engagement, and the
            successful realization of innovative ideas.
          </span>
          <div className="members">
            <div className="submitted_members_text">
              <div className="members_text">
                <h3 className="number_text">100</h3>
                <span className="plus">+</span>
              </div>
              <span className="sub_text sm_text">Ideas Submitted</span>
            </div>
            <div className="submitted_members_text">
              <div className="members_text">
                <h3 className="number_text">50</h3>
                <span className="plus">+</span>
              </div>
              <span className="sub_text">Awards Given</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluating;

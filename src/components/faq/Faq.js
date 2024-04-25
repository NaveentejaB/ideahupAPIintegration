import React from "react";
import "./Faq.css";

import FaqImage from "../../assets/svg_files/faq.svg";
import { FaqQuestions } from "../../constants";
const Faq = () => {
  return (
    <section className="faq_section" id="faq">
      <div className="faq_section_container container">
        <div className="faq_section_content">
          {FaqQuestions.map((item) => (
            <div className="faq_question_section">
              <div className="question">
                <h3 className="question_q1">Q</h3>
                <h2 className="question_head">{item.q}</h2>
              </div>
              <div className="ans">
                <h3 className="question_q1 ans_head">Ans</h3>
                <span className="ans_line">{item.ans}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="faq_section_image">
          <img src={FaqImage} alt="faq" className="faq_img" />
        </div>
      </div>
    </section>
  );
};

export default Faq;

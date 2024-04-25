import React, { useState, useEffect } from "react";
import "./HomePage.css";

// custom imports
import BulbImg from "../../assets/svg_files/idea-bulb.svg";
import EmpowerSection from "../../components/Empower_section/Empower_section";
import CompeteSection from "../../components/compete_section/CompeteSection";
import Features from "../../components/features_section/Features";
import Evaluating from "../../components/Evaluationg_section/Evaluationg";
import Faq from "../../components/faq/Faq";
import Navbar from "../../components/NavBar/NavBar";

const HomePage = () => {
  useEffect(() => {
    document.title = "IdeaHub ";
  }, []);
  // Assume isLoggedIn is a state that indicates whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle the login status (for demonstration purposes)
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Navbar />
      <section className="header_section">
        <div className="header_section_container container">
          <div className="header_section_content">
            <div className="header_section_text">
              <h1 className="heading">
                Unleash Your Ideas Here<span className="yellow_color">!</span>
              </h1>
              <p className="sub_text">
                At the heart of innovation, your unique ideas have the power to
                shape the future. Share your brilliance, inspire change, and win
                exciting prizes!
              </p>
            </div>
            <div className="header_section_btn">
              {isLoggedIn ? (
                <a href="/ideahub" className="link">
                  Submit Your Idea
                </a>
              ) : (
                <a href="/signup" className="link" onClick={toggleLoginStatus}>
                  Enroll Now
                </a>
              )}
            </div>
          </div>
          <div className="header_section_bulb_image">
            <img src={BulbImg} alt="bulb_image" className="bulb_img" />
          </div>
        </div>
      </section>
      <EmpowerSection />
      <CompeteSection />
      <Features />
      <Evaluating />
      <Faq />
    </>
  );
};

export default HomePage;

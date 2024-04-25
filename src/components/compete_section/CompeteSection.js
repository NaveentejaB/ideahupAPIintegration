import React, { useState, useEffect } from "react";
import "./CompeteSection.css";
// custom imports
import CompeteImages from "../../assets/svg_files/compete.svg";
const CompeteSection = () => {
  const initialCountdown = {
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [countdownState, setCountdown] = useState(initialCountdown);
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const { days, hours, minutes, seconds } = prevCountdown;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          setShowCountdown(false);
          return prevCountdown;
        }

        let updatedDays = days;
        let updatedHours = hours;
        let updatedMinutes = minutes;
        let updatedSeconds = seconds;

        if (updatedSeconds === 0) {
          if (updatedMinutes === 0) {
            if (updatedHours === 0) {
              updatedDays -= 1;
              updatedHours = 23;
              updatedMinutes = 59;
              updatedSeconds = 59;
            } else {
              updatedHours -= 1;
              updatedMinutes = 59;
              updatedSeconds = 59;
            }
          } else {
            updatedMinutes -= 1;
            updatedSeconds = 59;
          }
        } else {
          updatedSeconds -= 1;
        }

        return {
          days: updatedDays,
          hours: updatedHours,
          minutes: updatedMinutes,
          seconds: updatedSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="compete_section" id="">
      <div className="compete_section_container container">
        <div className="compete_section_image">
          <img className="compete_img" src={CompeteImages} alt="compete" />
        </div>
        <div className="compete_section_text">
          <div className="countdown_time">
            <span className="countdown_time_heading">
              Count Down to submit your ideas
            </span>
            {showCountdown ? (
              <div className="countdown_time_left">
                <div className="days_text">
                  <span className="timer_dates">{countdownState.days}</span>
                  <span className="timer_text">Days</span>
                </div>
                <div className="days_text">
                  <span className="timer_dates">{countdownState.hours}</span>
                  <span className="timer_text">Hours</span>
                </div>
                <div className="days_text">
                  <span className="timer_dates">{countdownState.minutes}</span>
                  <span className="timer_text">Minutes</span>
                </div>
                <div className="days_text">
                  <span className="timer_dates">{countdownState.seconds}</span>
                  <span className="timer_text">Seconds</span>
                </div>
              </div>
            ) : (
              <div>
                <h1>
                  Results are out <span className="yellow_color">!</span>
                </h1>
              </div>
            )}
          </div>
          <div className="compete_text">
            <h1 className="heading">Compete & win</h1>
            <span className="sub_text compete_sub">
              Got a game-changing idea? Participate in our idea competition.
              Share your unique insights, stand out, and win amazing rewards.
              Spark change, inspire, and be recognized for your innovation.
            </span>
          </div>
          <div className="compete_section_results_text">
            {showCountdown ? (
              <div>
                <div className="days_timer_left">
                  {" "}
                  {countdownState.days} Days Left
                </div>
              </div>
            ) : (
              <div className="">
                {/* Render your results here */}
                <a href="/results" className="link">
                  Check Results
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompeteSection;

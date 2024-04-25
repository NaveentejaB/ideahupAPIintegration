import React, { useState, useEffect } from "react";
import style from "./signup.module.css";
import Logoimg from "../../assets/image.png";
import signupImage from "../../assets/Sign_up_rightsignup.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BadgeIcon from "@mui/icons-material/Badge";
import IconButton from "@mui/material/IconButton";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ideahub from "../../assets/IdeaHubideahub_logo.jpg";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showWhiteCard, setShowWhiteCard] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Timer starts from 30 seconds

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Function to generate a random 6-digit OTP
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp.toString();
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming email address is retrieved from the form
    const enteredEmail = e.target.elements.emailSignup.value;
    setEmail(enteredEmail);
    const generatedOTP = generateOTP();
    setOtp(generatedOTP);
    // Call API to send OTP to the user's email
    // Placeholder code for sending OTP via email
    console.log(`Sending OTP ${generatedOTP} to ${enteredEmail}`);
    // Show the white card
    setShowWhiteCard(true);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleClose = () => {
    setShowWhiteCard(false);
    setAccountCreated(false);
  };

  const handleWhiteCardSubmit = (e) => {
    e.preventDefault();
    // Placeholder for handling OTP submission
    // Here you can verify the OTP and proceed accordingly
    // For demonstration, I'm setting the accountCreated state to true
    setAccountCreated(true);
  };

  useEffect(() => {
    let timerId;

    // Decrement timer every second
    if (showWhiteCard && resendTimer > 0) {
      timerId = setTimeout(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Clear timer when it reaches 0
    if (resendTimer === 0) {
      clearTimeout(timerId);
    }

    return () => clearTimeout(timerId);
  }, [showWhiteCard, resendTimer]);

  const handleResendOTP = () => {
    // Handle resend OTP action here
    // For demonstration, you can reset the timer
    const generatedOTP = generateOTP();
    setOtp(generatedOTP);
    setResendTimer(30);
  };

  const [mobile, setMobile] = useState("");

  const handleMobileChange = (event) => {
    const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (input.length <= 10) {
      // Restrict input to 10 characters
      setMobile(input);
    }
  };
  useEffect(() => {
    document.title = "Sign up";
  }, []);

  return (
    <div className={style.signupMain}>
      <div className={style.signupLeftDiv}>
        <div className={style.signupBox}>
          <div className={style.LogoAndTxtBox}>
            <div className={style.IdeaHubDiv}>
              <div className={style.logoDiv}>
                <img src={Logoimg} alt="logo" />
              </div>
              <div className={style.txt}>
                <img src={ideahub} alt="ideahub_logo" />
              </div>
            </div>
            <div className={style.signupTxtDiv}>
              <div className={style.signupTxt}>Sign Up</div>
              <div className={style.signupExtraTxt}>Register, Stay Linked</div>
            </div>
          </div>
          <div className={style.inputParDiv}>
            <form action="" onSubmit={handleSubmit}>
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="nameSignup">
                  <span className={style.starMark}>*</span>
                  <span>Full Name</span>
                </label>
                <OutlinedInput
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="outlined-adornment-weight"
                  placeholder="Enter Your Full Name"
                  endAdornment={
                    <InputAdornment position="end">
                      <BadgeIcon sx={{ color: "#0407446E", fontSize: 20 }} />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{ "aria-label": "Name" }}
                />
              </FormControl>
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="emailSignup">
                  <span className={style.starMark}>*</span>
                  <span>Email</span>
                </label>
                <OutlinedInput
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="emailSignup"
                  name="emailSignup"
                  placeholder="email@gmail.com"
                  endAdornment={
                    <InputAdornment position="end">
                      <MailOutlineIcon
                        sx={{ color: "#0407446E", fontSize: 20 }}
                      />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{ "aria-label": "email" }}
                />
              </FormControl>
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="mobileSignup">
                  <span className={style.starMark}>*</span>
                  <span>Mobile Number</span>
                </label>
                <OutlinedInput
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="outlined-adornment-weight"
                  placeholder="+91-12345-67890"
                  value={mobile}
                  onChange={handleMobileChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <StayCurrentPortraitIcon
                        sx={{ color: "#0407446E", fontSize: 20 }}
                      />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{ "aria-label": "mobile" }}
                />
              </FormControl>
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="outlined-adornment-password">
                  <span className={style.starMark}>*</span>
                  <span>Password</span>
                </label>
                <OutlinedInput
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: "#0407446E", fontSize: 20 }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="outlined-adornment-password">
                  <span className={style.starMark}>*</span>
                  <span>Confirm Password</span>
                </label>
                <OutlinedInput
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: "#0407446E", fontSize: 20 }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
              </FormControl>
              <button type="submit" className={style.Signupbtn}>
                Sign Up
              </button>
            </form>

            <div className={style.ParOfDirectToSignIn}>
              <span>Already have an account?</span>
              <Link to={"/"}>
                <span className={style.DarkBlueTxt}>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* White card */}
      {showWhiteCard && !accountCreated && (
        <div className={style.whiteCard}>
          <button className={style.closeBtn} onClick={handleClose}>
            <CloseIcon />
          </button>
          <div className={style.otpContainer}>
            <div className={style.otpMessage}>
              Please enter OTP to reset your password
            </div>
            <div className={style.email}>
              A One-Time Password has been sent to {email}
            </div>
            <form className={style.otpForm} onSubmit={handleWhiteCardSubmit}>
              {/* <input type="text" placeholder="Enter OTP" value={otp} /> */}
              <div className={style.otpInput}>
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    value={otp[index] || ""}
                    autoFocus={index === 0} // Autofocus on the first input box
                  />
                ))}
              </div>
              <div className={style.timeLeft}>
                Didn't receive?{" "}
                <span onClick={handleResendOTP}>Resend OTP</span>{" "}
                <span className={style.timer}>
                  Time :{" "}
                  <span className={style.timeValue}>{resendTimer} sec</span>
                </span>
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
      {accountCreated && (
        <div className={style.successMessage}>
          <button className={style.closeBtn} onClick={handleClose}>
            <CloseIcon />
          </button>
          <p>Account successfully created!</p>
        </div>
      )}
      <div className={style.signupRightDiv}>
        <img src={signupImage} alt="background_image" />
      </div>
    </div>
  );
};

export default Signup;

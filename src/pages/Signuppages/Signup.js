


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
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showWhiteCard, setShowWhiteCard] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Timer starts from 30 seconds
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClose = () => {
        setShowWhiteCard(false);
        setAccountCreated(false);
      };

  // Function to generate a random 6-digit OTP
  // const generateOTP = () => {
  //   const otp = Math.floor(100000 + Math.random() * 900000);
  //   return otp.toString();
  // };

  // Function to send OTP request
  const sendOtpRequest = async (email) => {
    try {
      const data = { email: email };
      const response = await fetch(
        "https://ideahubbackend.up.railway.app/auth/otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (!result.error && response.status === 200) {
        console.log("OTP sent to", email, ":", otp);
        console.log(result.message);
        // Show the white card
        setShowWhiteCard(true);
      }else{
        console.log("Error processing the request:", result.message);
      }
    } catch (err) {
      console.log("Error processing the request:", err.message);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (values) => {
    try {
      const otpResult = otp.join("");
      const data = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        otp:parseInt(otpResult),
      };
      const response = await fetch(
        "https://ideahubbackend.up.railway.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (!result.error && response.status === 201) {
        sessionStorage.setItem("access_token", result.accessToken);
        // Account created successfully
        setAccountCreated(true);
        navigate('/ideahub');
      } else {
        // Handle registration errors
        if (result.message === "invalid OTP") {
          // Handle invalid OTP error
          console.log("Invalid OTP. Please try again.");
          // You can update the UI to display an error message to the user
        } else {
          // Handle other registration errors
          console.log("Registration failed:", result.message);
        }
      }
    } catch (err) {
      console.log("Error processing the request:", err.message);
    }
  };

  // Function to handle OTP input change
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  // Function to handle white card submission
  const handleWhiteCardSubmit = async (e) => {
    e.preventDefault();
    // Assuming form values are retrieved using formik
    handleSubmit(formik.values);
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

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      // Send OTP request when form is submitted
      setEmail(values.email);
      // const generatedOTP = generateOTP();
      setOtp(otp);
      sendOtpRequest(values.email);
   
    },
  });

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
            {/* Formik form */}
            <form onSubmit={formik.handleSubmit}>
           <FormControl
               {...formik.getFieldProps("name")}
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
               >
                <label htmlFor="name">
                  <span className={style.starMark}>*</span>
                  <span>Full Name</span>
                </label>
                <OutlinedInput
                value={formik.values.name}
                onChange={formik.handleChange}
                  name = 'name'
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="name"
                  placeholder="Enter Your  Name"
                  endAdornment={
                    <InputAdornment position="end">
                      <BadgeIcon sx={{ color: "#0407446E", fontSize: 20 }} />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{ "aria-label": "name" }}
                />
              </FormControl>
              {formik.touched.name && formik.errors.name ? (
                <div className={style.error}>{formik.errors.name}</div>
              ) : null}
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="email">
                  <span className={style.starMark}>*</span>
                  <span>Email</span>
                </label>
                <OutlinedInput
                                  {...formik.getFieldProps("email")}

                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="email"
                  name="email"
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
              {formik.touched.email && formik.errors.email ? (
                <div className={style.error}>{formik.errors.email}</div>
              ) : null}
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="phone">
                  <span className={style.starMark}>*</span>
                  <span>Mobile Number</span>
                </label>
                <OutlinedInput
                {...formik.getFieldProps("phone")}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  name="phone"
                  id="phone"
                  placeholder="+91-12345-67890"
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
              {formik.touched.phone && formik.errors.phone ? (
                <div className={style.error}>{formik.errors.phone}</div>
              ) : null}
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="password">
                  <span className={style.starMark}>*</span>
                  <span>Password</span>
                </label>
                <OutlinedInput
                {...formik.getFieldProps("password")}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="password"
                  name = "password"
                  type={showPassword ? "text" : "password" }
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
              {formik.touched.password && formik.errors.password ? (
                <div className={style.error}>{formik.errors.password}</div>
              ) : null}
              <FormControl
                className={style.signupInput}
                size="medium"
                sx={{
                  width: "50ch",
                  "@media (max-width: 600px)": { width: "100%" },
                }}
                variant="standard"
              >
                <label htmlFor="confirmpassword">
                  <span className={style.starMark}>*</span>
                  <span>Confirm Password</span>
                </label>
                <OutlinedInput
                {...formik.getFieldProps("confirmpassword")}
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  name="confirmpassword"
                  className="borderless-input"
                  sx={{ background: "#F3F3F3" }}
                  id="confirmpassword"
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
              {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                <div className={style.error}>{formik.errors.confirmpassword}</div>
              ) : null}
              
              <button type="submit" className={style.Signupbtn}>
                Sign Up
              </button>
            </form>
            {/* Sign In link */}
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
      {showWhiteCard && (
        <div className={style.whiteCard}>
           <button className={style.closeBtn} onClick={handleClose}>
//             <CloseIcon />
//           </button>
          {/* OTP input form */}
          <form className={style.otpForm} onSubmit={handleWhiteCardSubmit}>
            <div className={style.otpInput}>
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  // value={otp[index] || ""}
                  value={otp[index] || ""}
                  // onChange={sendOtpRequest.otp}
                  autoFocus={index === 0} // Autofocus on the first input box

                />
              ))}
            </div>
            <div className={style.timeLeft}>
              Didn't receive?{" "}
              <span onClick={sendOtpRequest}>Resend OTP</span>{" "}
              <span className={style.timer}>
                Time : <span className={style.timeValue}>{resendTimer} sec</span>
              </span>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {/* Success message */}
      {accountCreated && (
        <div className={style.successMessage}>
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

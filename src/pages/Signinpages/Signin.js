import React, { useState } from "react";
import signInRightImg from "../../assets/signin.png";
import LogoImg from "../../assets/image.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import style from "./siginin.module.css";
import { Link } from "react-router-dom";
import ideahub from "../../assets/IdeaHubideahub_logo.jpg";
import "./MUI.css";
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={style.signinMain}>
      <div className={style.signInLeftDiv}>
        <div className={style.signInBox}>
          <div className={style.LogoAndTxtBox}>
            <div className={style.IdeaHubDiv}>
              <div className={style.logoDiv}>
                <img src={LogoImg} alt="logo_image" />
              </div>
              <div className={style.txt}>
                <img src={ideahub} alt="idea_logo" />
                {/* <span className='thick'>I</span>
                      <span>dea </span>
                      <span className='thick'>H</span>
                      <span>ub</span> */}
              </div>
            </div>
            <div className={style.SignInTxtDiv}>
              <div className={style.signInTxt}>Sign In</div>
              <div className={style.signInExtraTxt}>
                Login to stay connected
              </div>
            </div>
          </div>
          <div className={style.inputParDiv}>
            <FormControl
              className={style.signInInput}
              size="medium"
              sx={{
                width: "50ch",
                "@media (max-width: 600px)": {
                  width: "100%", // Change width for smaller screens
                },
              }}
              variant="standard"
            >
              <label htmlFor={style.emailSignin}>
                <span className={style.starMark}>*</span>
                <span>Email</span>
              </label>
              <OutlinedInput
                className="borderless-input"
                sx={{ background: "#F3F3F3" }}
                id="outlined-adornment-weight"
                placeholder="email@gmail.com"
                endAdornment={
                  <InputAdornment position="end">
                    <MailOutlineIcon
                      sx={{ color: "#0407446E", fontSize: 20 }}
                    />
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "email",
                }}
              />
            </FormControl>
            <FormControl
              className="signInInput"
              size="medium"
              sx={{
                width: "50ch",
                "@media (max-width: 600px)": {
                  width: "100%", // Change width for smaller screens
                },
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
            <div className={style.forgtPassTxt}>Forgot Password?</div>
            <button className={style.SignInbtn}>Sign In</button>
          </div>
          <div className={style.ParOfDirectToSignUp}>
            <span>Don't have an account?</span>
            <Link to={"/signup"}>
              <span className={style.DarkBlueTxt}>Register</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.signInRightDiv}>
        <img src={signInRightImg} alt="background_image" />
      </div>
    </div>
  );
};
export default Signin;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
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
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Context/UserContext";



const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // const userObj=useContext(UserContext)
  const { login } = useContext(UserContext);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignIn = async (values) => {
    try {
      const response = await axios.post('https://ideahubbackend.up.railway.app/auth/login', {
        email: values.email,
        password: values.password
      });
      if (!response.data.error && response.status === 200) {
        const accessToken = response.data.accessToken;
        sessionStorage.setItem('access_token', accessToken);
        axios.defaults.headers.common['authorization'] = accessToken; // Set default headers
        // Fetch user details after successful login
        const userResponse = await axios.get('https://ideahubbackend.up.railway.app/user/', {
          headers: {
            Authorization: accessToken,
            "Content-Type": "application/json",
          },
        });
//         if (userResponse.status === 200) {
//           const userData = userResponse.data.data;
//           login(userData);
//           navigate("/ideahub", { state: { userData } });
//           userObj.login(userData)
//           console.log(          userObj.login(userData)
// );
//           console.log("Userdata",userData);
//         } 
if (userResponse.status === 200) {
  const userData = userResponse.data.data;
  login(userData);
  navigate("/ideahub");
}
else {
          console.error("Failed to fetch user details:", userResponse.data.message);
          // Handle error
        }
      } else {
        console.error("Failed to login:", response.data.message);
        // Handle error
      }
    } catch (err) {
      console.error('Error processing the request:', err.message);
    }
  };
  

  useEffect(() => {
    document.title = "Sign In";
  }, []);
  
  const formik = useFormik({
    initialValues: {
      email:'',
      password:''
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 3) {
        errors.password = "Password must be at least 3 characters long";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await handleSignIn(values);
      } catch (error) {
        console.error('Error submitting form:', error);
        window.alert('An error occurred while submitting the form. Please try again later.');
      }
    },
  });

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
              <label htmlFor="email">
                <span className={style.starMark}>*</span>
                <span>Email</span>
              </label>
              <OutlinedInput
                className="borderless-input"
                name="email"
                id="email"
                value={formik.values.email}
                sx={{ background: "#F3F3F3" }}
                placeholder="email@gmail.com"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              {formik.touched.email && formik.errors.email && <div className={style.formErrors}>{formik.errors.email}</div>}
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
              <label htmlFor="password">
                <span className={style.starMark}>*</span>
                <span>Password</span>
              </label>
              <OutlinedInput
                name="password"
                id="password"
                value={formik.values.password}
                className="borderless-input"
                sx={{ background: "#F3F3F3" }}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              {formik.touched.password && formik.errors.password && <div className={style.formErrors}>{formik.errors.password}</div>}
            </FormControl>
            <div className={style.forgtPassTxt}>Forgot Password?</div>
            <button type="submit" className={style.SignInbtn} onClick={formik.handleSubmit}>Sign In</button>
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import signInRightImg from "../../assets/signin.png";
// import LogoImg from "../../assets/image.png";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import style from "./siginin.module.css";
// import { Link, useNavigate } from "react-router-dom";
// import ideahub from "../../assets/IdeaHubideahub_logo.jpg";
// import { useFormik } from "formik";

// const Signin = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
  
//   const handleSignIn = async (values) => {
//     try {
//       const response = await axios.post(
//         "https://ideahubbackend.up.railway.app/auth/login",
//         {
//           email: values.email,
//           password: values.password,
//         }
//       );

//       if (!response.data.error && response.status === 200) {
//         const accessToken = response.data.accessToken;
//         localStorage.setItem("access_token", accessToken); // Store access token in local storage
//         axios.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${accessToken}`; // Set default authorization header for Axios

//         // Check if token is expired and refresh if needed
//         if (isTokenExpired(accessToken)) {
//           await refreshToken(); // Implement token refresh logic
//         }

//         // Fetch user details after successful login
//         const userResponse = await axios.get(
//           "https://ideahubbackend.up.railway.app/user/",
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );

//         if (userResponse.status === 200) {
//           const userData = userResponse.data;
//           navigate("/ideahub", { state: { userData } });
//         } else {
//           console.error(
//             "Failed to fetch user details:",
//             userResponse.statusText
//           );
//           // Handle error
//         }
//       } else {
//         console.error("Failed to login:", response.data.message);
//         // Handle error
//       }
//     } catch (err) {
//       console.error("Error processing the request:", err.message);
//     }
//   };

//   const isTokenExpired = (token) => {
//     // Implement logic to check if the token is expired
//     // For example:
//     // const decodedToken = jwt_decode(token);
//     // const currentTime = Date.now() / 1000;
//     // return decodedToken.exp < currentTime;

//     return false; // Placeholder logic, replace with actual implementation
//   };

//   const refreshToken = async () => {
//     // Implement token refresh logic here
//     // For example, make a request to your backend to refresh the token
//     // Update the access token in localStorage and axios headers
//   };

//   useEffect(() => {
//     document.title = "Sign In";
//   }, []);



//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validate: (values) => {
//       const errors = {};
//       if (!values.email) {
//         errors.email = "Required";
//       } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
//         errors.email = "Invalid email address";
//       }
//       if (!values.password) {
//         errors.password = "Required";
//       } else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters long";
//       }
//       return errors;
//     },
//     onSubmit: async (values) => {
//       try {
//         await handleSignIn(values);
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         window.alert(
//           "An error occurred while submitting the form. Please try again later."
//         );
//       }
//     },
//   });

//   return (
//     <div className={style.signinMain}>
//       <div className={style.signInLeftDiv}>
//         <div className={style.signInBox}>
//           <div className={style.LogoAndTxtBox}>
//             <div className={style.IdeaHubDiv}>
//               <div className={style.logoDiv}>
//                 <img src={LogoImg} alt="logo_image" />
//               </div>
//               <div className={style.txt}>
//                 <img src={ideahub} alt="idea_logo" />
//               </div>
//             </div>
//             <div className={style.SignInTxtDiv}>
//               <div className={style.signInTxt}>Sign In</div>
//               <div className={style.signInExtraTxt}>
//                 Login to stay connected
//               </div>
//             </div>
//           </div>
//           <div className={style.inputParDiv}>
//             <FormControl
//               className={style.signInInput}
//               size="medium"
//               sx={{
//                 width: "50ch",
//                 "@media (max-width: 600px)": {
//                   width: "100%", // Change width for smaller screens
//                 },
//               }}
//               variant="standard"
//             >
//               <label htmlFor="email">
//                 <span className={style.starMark}>*</span>
//                 <span>Email</span>
//               </label>
//               <OutlinedInput
//                 className="borderless-input"
//                 name="email"
//                 id="email"
//                 value={formik.values.email}
//                 sx={{ background: "#F3F3F3" }}
//                 placeholder="email@gmail.com"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <MailOutlineIcon
//                       sx={{ color: "#0407446E", fontSize: 20 }}
//                     />
//                   </InputAdornment>
//                 }
//                 aria-describedby="outlined-weight-helper-text"
//                 inputProps={{
//                   "aria-label": "email",
//                 }}
//               />
//               {formik.touched.email && formik.errors.email && (
//                 <div className={style.formErrors}>{formik.errors.email}</div>
//               )}
//             </FormControl>
//             <FormControl
//               className="signInInput"
//               size="medium"
//               sx={{
//                 width: "50ch",
//                 "@media (max-width: 600px)": {
//                   width: "100%", // Change width for smaller screens
//                 },
//               }}
//               variant="standard"
//             >
//               <label htmlFor="password">
//                 <span className={style.starMark}>*</span>
//                 <span>Password</span>
//               </label>
//               <OutlinedInput
//                 name="password"
//                 id="password"
//                 value={formik.values.password}
//                 className="borderless-input"
//                 sx={{ background: "#F3F3F3" }}
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 endAdornment={
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={handleClickShowPassword}
//                       onMouseDown={handleMouseDownPassword}
//                       edge="end"
//                       sx={{ color: "#0407446E", fontSize: 20 }}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//                 label="Password"
//               />
//               {formik.touched.password && formik.errors.password && (
//                 <div className={style.formErrors}>
//                   {formik.errors.password}
//                 </div>
//               )}
//             </FormControl>
//             <div className={style.forgtPassTxt}>Forgot Password?</div>
//             <button
//               type="submit"
//               className={style.SignInbtn}
//               onClick={formik.handleSubmit}
//             >
//               Sign In
//             </button>
//           </div>
//           <div className={style.ParOfDirectToSignUp}>
//             <span>Don't have an account?</span>
//             <Link to={"/signup"}>
//               <span className={style.DarkBlueTxt}>Register</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className={style.signInRightDiv}>
//         <img src={signInRightImg} alt="background_image" />
//       </div>
//     </div>
//   );
// };

// export default Signin;


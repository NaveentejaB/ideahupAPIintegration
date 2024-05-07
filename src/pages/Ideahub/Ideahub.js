

// import React, { useState, useEffect, useContext, } from "react";
// import { useFormik } from "formik";
// import style from "./Ideahub.module.css";
// import ideahub from "../../assets/IdeaHubideahub_logo.jpg";
// import { Editor } from "primereact/editor";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import BadgeIcon from "@mui/icons-material/Badge";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import WorkIcon from "@mui/icons-material/Work";
// import axios from "axios";
// import { UserContext } from "../../components/Context/UserContext";
// import { useNavigate } from "react-router-dom";

// const Ideahub = () => {
  
//   const formik = useFormik({
//     initialValues: {
//       // name: "",
//       // email: "",
//       // phone: "",
//       userRole: " ",
//       idea: " ",
//       phone: " " ,
      
 
    
//     },
 
//     onSubmit: async (values) => {
//       try {
//         const token = sessionStorage.getItem("access_token");
//         // const postData = {
//         //   "userRole": values.userRole,
//         //   "idea": values.idea,
//         //   "phone": values.phone
//         // };
//         const response = await axios.post(
//           "https://ideahubbackend.up.railway.app/user/",
//           values,
//           {
//             headers: {
//               authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log(response.data);
//         // Handle success
//       } catch (error) {
//         console.error("Error submitting idea:", error.message);
//         // Handle error
//       }
//     },
//   });
//   //  const userObj=useContext(UserContext)
//   //  console.log(userObj);
//   const [text, setText] = useState("");
//   const [userData, setUserData] = useState({});

//   const fetchUserDetails = async () => {
//     try {
//       const token = sessionStorage.getItem("access_token");
      
//       if (!token) {
//         console.error("Access token is missing.");
//         return;
//       }
//       const response = await axios.get(
//         "https://ideahubbackend.up.railway.app/user/",
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.status === 200) {
//         setUserData(response.data.data);
//         console.log(response.data.message);
//       } else {
//         console.error("Failed to fetch user details:", response.data.message);
//       }
//     } catch (err) {
//       console.error("Error fetching user details:", err.message);
//     }
//   };
//  const navigate=useNavigate()
//  const signout = () => {
//   sessionStorage.removeItem("access_token");
//   navigate("/");
// };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);
  

//   return (
//     <>
//       <div className={style.main}>
//         <div className={style.nav}>
//           <div className={style.idea_hub}>
//             <p className={style.idea_txt}>
//               <a href="/">
//                 <img src={ideahub} alt="ideahub_logo" />
//               </a>
//             </p>
//             <div className={style.alaram}>
//               <p className={style.alaramcount}>3</p>
//             </div>
//             <div className={style.divider}></div>
//             <div className={style.profile}>
//               <div className={style.user_icon}></div>
//               <div className={style.profile_details}>
//                 <p className={style.profile_name}>{userData.userName}</p>
//                 <div className={style.profile_mailid}>
//                   <p className={style.profile_mail}>
//                     {userData.userEmail}
//                   </p>
//                   <select name="" id="">
//                     <option value="" onClick={signout()} >Singn out</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={style.forms}>
//           <form action="" onSubmit={formik.handleSubmit}>
//             <div className={style.form_row1}>
//               <div className={style.input_with_logo}>
//                 <BadgeIcon className={style.input_logo} />
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
                
//                 value={userData.userName}
//                   onChange={formik.handleChange}
//                   placeholder="Name"
                  
//                 />
//               </div>
//               <div className={style.input_with_logo}>
//                 <MailOutlineIcon className={style.input_logo} />
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={userData.userEmail}
//                   onChange={formik.handleChange}
//                   placeholder="Email Id"
//                 />
//               </div>
//             </div>
//             <div className={style.form_row2}>
//               <div className={style.input_with_logo}>
//                 <LocalPhoneIcon className={style.input_logo} />
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   placeholder="Mobile No"
//                 />
//               </div>
//               <div className={style.input_with_logo}>
//                 <WorkIcon className={style.input_logo} />
//                 <select
//                   name="userRole"
//                   id="userRole"
//                   value={formik.values.userRole}
//                   onChange={formik.handleChange}
//                 >
//                   <option value="select a option">Select a option</option>
//                   <option value="Pursing">Pursing</option>
//                   <option value="Experienced">Experienced</option>
//                   <option value="Fresher">Fresher</option>
//                 </select>
//               </div>
//             </div>
//             <div>
//               <div className="card">
//                 <Editor
//                 name="idea"
//                 id="idea"
//                   value={formik.values.idea}
//                   onTextChange={(e) => formik.setFieldValue('idea', e.htmlValue)}

//                   style={{ height: "320px" }}
//                 />
//               </div>
//             </div>
//             <input type="submit" className={style.submit_button} />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Ideahub;




// import React, { useState, useEffect, useContext } from "react";
// import { useFormik } from "formik";
// import style from "./Ideahub.module.css";
// import ideahub from "../../assets/IdeaHubideahub_logo.jpg";
// import { Editor } from "primereact/editor";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import BadgeIcon from "@mui/icons-material/Badge";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import WorkIcon from "@mui/icons-material/Work";
// import axios from "axios";
// import { UserContext } from "../../components/Context/UserContext";
// import { useNavigate } from "react-router-dom";

// const Ideahub = () => {
//   const [userData, setUserData] = useState({});
//   const navigate = useNavigate();
//   const { userName, userEmail, userPhone} = userData;

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   const fetchUserDetails = async () => {
//     try {
//       const token = sessionStorage.getItem("access_token");
//       if (!token) {
//         console.error("Access token is missing.");
//         navigate("/"); // Redirect to login page
//         return;
//       }
//       const response = await axios.get(
//         "https://ideahubbackend.up.railway.app/user/",
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.status === 200) {
//         setUserData(response.data.data);
//       } else {
//         console.error(
//           "Failed to fetch user details:",
//           response.data.message
//         );
//       }
//     } catch (err) {
//       console.error("Error fetching user details:", err.message);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       userRole: "",
//       idea: "",
//       phone:userPhone || "",
//         },
//     onSubmit: async (values) => {
//       try {
//         const token = sessionStorage.getItem("access_token");
//         const response = await axios.post(
//           "https://ideahubbackend.up.railway.app/user/",
//           {
//           ...values,
//           phone: values.phone,
//           },
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log(response.data);
//         console.log(values);

//       } catch (error) {
//         console.error("Error submitting idea:", error.message);
//       }
//     },
//   });

//   const signout = () => {
//     sessionStorage.removeItem("access_token");
//     navigate("/");
//   };
//   return (
//     <>
//       <div className={style.main}>
//         <div className={style.nav}>
//           <div className={style.idea_hub}>
//             <p className={style.idea_txt}>
//               <a href="/">
//                 <img src={ideahub} alt="ideahub_logo" />
//               </a>
//             </p>
//             <div className={style.alaram}>
//               <p className={style.alaramcount}>3</p>
//             </div>
//             <div className={style.divider}></div>
//             <div className={style.profile}>
//               <div className={style.user_icon}></div>
//               <div className={style.profile_details}>
//                 <p className={style.profile_name}>{userName}</p>
//                 <div className={style.profile_mailid}>
//                   <p className={style.profile_mail}>{userEmail}</p>
//                   <select name="" id="">
//                     <option value="" onClick={signout}>
//                       Sign out
//                     </option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={style.forms}>
//           <form action="" onSubmit={formik.handleSubmit}>
//             <div className={style.form_row1}>
//               <div className={style.input_with_logo}>
//                 <BadgeIcon className={style.input_logo} />
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   value={userName}
//                   onChange={formik.handleChange}
//                   placeholder="Name"
//                 />
//               </div>
//               <div className={style.input_with_logo}>
//                 <MailOutlineIcon className={style.input_logo} />
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={userEmail}
//                   onChange={formik.handleChange}
//                   placeholder="Email Id"
//                 />
//               </div>
//             </div>
//             <div className={style.form_row2}>
//               <div className={style.input_with_logo}>
//                 <LocalPhoneIcon className={style.input_logo} />
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   value={formik.values.phone}
//                   onChange={formik.handleChange}
//                   // onChange={(e) => formik.setFieldValue('phone', parseInt(e.target.value))}

//                   placeholder="Mobile No"
//                 />
//               </div>
//               <div className={style.input_with_logo}>
//                 <WorkIcon className={style.input_logo} />
//                 <select
//                   name="userRole"
//                   id="userRole"
//                   value={formik.values.userRole }
//                   onChange={formik.handleChange}
//                 >
//                   <option value="">Select an option</option>
//                   <option value="Pursing">Pursing</option>
//                   <option value="Experienced">Experienced</option>
//                   <option value="Fresher">Fresher</option>
//                 </select>
//               </div>
//             </div>
//             <div>
//               <div className="card">
//                 <Editor
//                   name="idea"
//                   id="idea"
//                   value={formik.values.idea}
//                   onTextChange={(e) =>
//                     formik.setFieldValue("idea", e.htmlValue)
//                   }
//                   style={{ height: "320px" }}
//                 />
//               </div>
//             </div>
//             <input type="submit" className={style.submit_button} />
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Ideahub;

// import React, { useState, useEffect, useContext } from "react";
// import { useFormik } from "formik";
// import style from "./Ideahub.module.css";
// import ideahub from "../../assets/IdeaHubideahub_logo.jpg";
// import { Editor } from "primereact/editor";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import BadgeIcon from "@mui/icons-material/Badge";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import WorkIcon from "@mui/icons-material/Work";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { InputAdornment, OutlinedInput } from "@mui/material";
// import { UserContext } from "../../components/Context/UserContext";

// const Ideahub = () => {
//   const [userData, setUserData] = useState({});
//   const navigate = useNavigate();
//   const login  = useContext(UserContext)
 
//   const { userName, userEmail, userPhone } = userData;
//   const signout = () => {
//     sessionStorage.removeItem("access_token");
//     navigate("/");
//   }; 

 

//   const fetchUserDetails = async () => {
//     try {
//       const token = sessionStorage.getItem("access_token");
//       if (!token) {
//         console.error("Access token is missing.");
//         navigate("/"); // Redirect to login page
//         return;
//       }
//       const response = await axios.get(
//         "https://ideahubbackend.up.railway.app/user/",
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.status === 200) {
//         setUserData(response.data.data);
//       } else {
//         console.error(
//           "Failed to fetch user details:",
//           response.data.message
//         );
//       }
//     } catch (err) {
//       console.error("Error fetching user details:", err.message);
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       userRole: "",
//       idea: "",
//       phone: userPhone || "", // Use userPhone if available, otherwise default to empty string
//     },
//     onSubmit: async (values) => {
//       try {
//         const token = sessionStorage.getItem("access_token");
//         const response = await axios.post(
//           "https://ideahubbackend.up.railway.app/user/",
//           values,
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log(response.data);
//         console.log(values);
//       } catch (error) {
//         console.error("Error submitting idea:", error.message);
//       }
//     },
//   });

//   useEffect(() => {
//     fetchUserDetails();
//   },[login]);



//   return (
//     <><div className={style.main}>
//     <div className={style.nav}>
//       <div className={style.idea_hub}>
//         <p className={style.idea_txt}>
//           <a href="/">
//             <img src={ideahub} alt="ideahub_logo" />
//           </a>
//         </p>
//         {/* <div className={style.alaram}>
//           <p className={style.alaramcount}>3</p>
//         </div> */}
//         <div className={style.divider}></div>
//         <div className={style.profile}>
//           <div className={style.profile_details}>
//             <p className={style.profile_name}>{userName}</p>
//             <div className={style.profile_mailid}>
//               <p className={style.profile_mail}>{userEmail}</p>
             
//                 <p style={{cursor:"pointer"}}  onClick={signout}>                      Sign out
// </p>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className={style.forms}>
//       <form action="" onSubmit={formik.handleSubmit}>
//         <div className={style.form_row1}>
//           <div className={style.input_with_logo}>
//             <BadgeIcon className={style.input_logo} />
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={userName}
//               onChange={formik.handleChange}
//               placeholder="Name"
//             />
//           </div>
//           <div className={style.input_with_logo}>
//             <MailOutlineIcon className={style.input_logo} />
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={userEmail}
//               onChange={formik.handleChange}
//               placeholder="Email Id"
//             />
//           </div>
//         </div>
//         <div className={style.form_row2}>
//           <div className={style.input_with_logo}>
//             <LocalPhoneIcon className={style.input_logo} />
//             <input
//               type="number"
//               name="phone"
//               id="phone"
//               value={formik.values.phone}
//               onChange={formik.handleChange}
//               placeholder="Mobile No"
//             />
//           </div>
//           <div className={style.input_with_logo}>
//             <WorkIcon className={style.input_logo} />
//             <select
//               name="userRole"
//               id="userRole"
//               value={formik.values.userRole}
//               onChange={formik.handleChange}
//             >
//               <option value="">Select an option</option>
//               <option value="Pursing">Pursing</option>
//               <option value="Experienced">Experienced</option>
//               <option value="Fresher">Fresher</option>
//             </select>
//           </div>
//         </div>
//         <div>
//           <div className="card">
//             <Editor
//               name="idea"
//               id="idea"
//               value={formik.values.idea}
//               onTextChange={(e) =>
//                 formik.setFieldValue("idea", e.htmlValue)
//               }
//               style={{ height: "320px" }}
//             />
//           </div>
//         </div>
//         <input type="submit" className={style.submit_button} />
//       </form>
//     </div>
//   </div>    </>
//   );
// };

// export default Ideahub;


import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import style from "./Ideahub.module.css";

import  ideahub from "../.././assets/IdeaHubideahub_logo.jpg"

import { Editor } from 'primereact/editor';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BadgeIcon from '@mui/icons-material/Badge';


import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';

import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../components/Context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';

import 'react-toastify/dist/ReactToastify.css';
const Ideahub = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const login  = useContext(UserContext)
  const notify = () => toast("Idea sucessfully submitted !");

 
  const { userName, userEmail, userPhone } = userData;
  const signout = () => {
    sessionStorage.removeItem("access_token");
    navigate("/");
  }; 

 

  const fetchUserDetails = async () => {
    try {
      const token = sessionStorage.getItem("access_token");
      if (!token) {
        console.error("Access token is missing.");
        navigate("/"); // Redirect to login page
        return;
      }
      const response = await axios.get(
        "https://ideahubbackend.up.railway.app/user/",
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setUserData(response.data.data);
      } else {
        console.error(
          "Failed to fetch user details:",
          response.data.message
        );
      }
    } catch (err) {
      console.error("Error fetching user details:", err.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      userRole: "",
      idea: "",
      phone: userPhone || "", // Use userPhone if available, otherwise default to empty string
    },
    validate: (values) => {
      const errors = {};
  
      if (!values.phone) {
        errors.phone = "Mobile No is required";
      }
      if (!values.userRole || values.userRole === "Select Option") {
        errors.userRole = "Please select a role";
      }
      if (!values.idea) {
        errors.idea = "Idea is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const token = sessionStorage.getItem("access_token");
        const response = await axios.post(
          "https://ideahubbackend.up.railway.app/user/",
          values,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        console.log(values);
        notify()

      } catch (error) {
        console.error("Error submitting idea:", error.message);
      }
    },
  });

  useEffect(() => {
    fetchUserDetails();
  },[login]);



  return (
    <>
      <div className={style.main}>
        <div className={style.nav}>
          <div className={style.idea_hub}>
            <p className={style.idea_txt}>
            <a href="/">
            <img src={ideahub} alt="ideahub_logo" />
          </a>
            </p>
          
            <div className={style.divider}></div>
            <div className={style.profile}>
              <div className={style.profile_details}>
                <p className={style.profile_name}>{userName}</p>
                <div className={style.profile_mailid}>
                  <p className={style.profile_mail}>
                  {userEmail}
                  </p>
                  <p style={{cursor:"pointer"}}  onClick={signout}>Sign out</p>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.forms}>
          <form action="" onSubmit={formik.handleSubmit}>
          <div className={style.form_row1}>
          <FormControl className={style.signupInput} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
              <label htmlFor="nameSignup">
              Name 
              </label>
              <OutlinedInput
                className='borderless-input'
                sx={{ background: '#F3F3F3' }}
                id="outlined-adornment-weight"
                placeholder='Enter Your Full Name'
                endAdornment={<InputAdornment position="end"><BadgeIcon sx={{ color: '#0407446E', fontSize: 20 }} /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'Name' }}
                value={userName}
                onChange={formik.handleChange}
                name="name"

              />
                              {/* {formik.errors.name ? <FormHelperText error>{formik.errors.name}</FormHelperText> : null} */}

            </FormControl>
            <FormControl className={style.signupInput} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
            <label htmlFor="nameSignup">
              Email
              </label>
              <OutlinedInput
                className='borderless-input'
                sx={{ background: '#F3F3F3' }}
                type="email"
                name="email"
                id="email"
                value={userEmail}
                onChange={formik.handleChange}
                
                placeholder="email@gmail.com"
                endAdornment={<InputAdornment position="end"><MailOutlineIcon sx={{ color: '#0407446E', fontSize: 20 }} /></InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{ 'aria-label': 'email' }}
              />
                              {/* {formik.errors.email ? <FormHelperText error>{formik.errors.email}</FormHelperText> : null} */}

            </FormControl>
            </div>
            <div className={style.form_row2}>
            <FormControl className={style.input_with_logo} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
            <label htmlFor="nameSignup">
              Mobile No
              </label>
      <OutlinedInput
        className='borderless-input'
        sx={{ background: '#F3F3F3' }}
        // id="outlined-adornment-weight"
        placeholder='+91-12345-67890'
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
                endAdornment={<InputAdornment position="end"><StayCurrentPortraitIcon sx={{ color: '#0407446E', fontSize: 20 }} /></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{ 'aria-label': 'mobile' }}
      />
                      {formik.errors.phone ? <FormHelperText error>{formik.errors.phone}</FormHelperText> : null}

    </FormControl>
    <FormControl className={style.input_with_logo} size='medium' sx={{ width: '100%', '@media (max-width: 600px)': { width: '100%' } }} variant="standard">
      <FormLabel id="select-field-demo-label" htmlFor="select-field-demo-button">
      </FormLabel>
      <Select
       name="userRole"
       id="userRole"
       value={formik.values.userRole}
       onChange={formik.handleChange}
        defaultValue="Select Option"
        slotProps={{
          button: {
            id: 'select-field-demo-button',
            // TODO: Material UI set aria-labelledby correctly & automatically
            // but Base UI and Joy UI don't yet.
          },
        }}
      >
                <MenuItem value="Select Option">Select Option</MenuItem>

        <MenuItem value="pursuing">Pursuing</MenuItem>
        <MenuItem value="experienced">Experienced</MenuItem>
        <MenuItem value="fresher">Fresher</MenuItem>
        
      </Select>
      {formik.errors.userRole ? <FormHelperText error>{formik.errors.userRole}</FormHelperText> : null}

      <FormHelperText id="select-field-demo-helper">
      </FormHelperText>
    </FormControl>
 
</div>
           
            <div>
        <div className="card">
        <Editor
              name="idea"
              id="idea"
              value={formik.values.idea}
              onTextChange={(e) =>
                formik.setFieldValue("idea", e.htmlValue)
              }
              style={{ height: "320px" }}
            />  
                            {formik.errors.idea ? <FormHelperText error>{formik.errors.idea}</FormHelperText> : null}
      </div>

    
            </div>
            <Button type="submit" variant="containedgit a" className={style.submit_button}>Submit</Button>

            <ToastContainer />

          </form>
        </div>
      </div>
    </>
  );
};

export default Ideahub;

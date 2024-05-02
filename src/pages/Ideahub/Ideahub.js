

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import style from "./Ideahub.module.css";
import ideahub from "../../assets/IdeaHubideahub_logo.jpg";
import { Editor } from "primereact/editor";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";
import axios from "axios";

const Ideahub = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      select: "Select a option",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.post(
          "https://ideahubbackend.up.railway.app/user/",
          values,
          {
            headers: {
              authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        // Handle success
      } catch (error) {
        console.error("Error submitting idea:", error.message);
        // Handle error
      }
    },
  });
  
  const [text, setText] = useState("");
  const [userData, setUserData] = useState({});

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("access_token");
      
      if (!token) {
        console.error("Access token is missing.");
        return;
      }
      const response = await axios.get(
        "https://ideahubbackend.up.railway.app/user/",
        {
          headers: {
            authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setUserData(response.data.data);
        console.log(response.data.message);
      } else {
        console.error("Failed to fetch user details:", response.data.message);
      }
    } catch (err) {
      console.error("Error fetching user details:", err.message);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  

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
            <div className={style.alaram}>
              <p className={style.alaramcount}>3</p>
            </div>
            <div className={style.divider}></div>
            <div className={style.profile}>
              <div className={style.user_icon}></div>
              <div className={style.profile_details}>
                <p className={style.profile_name}>Mohan Krishna</p>
                <div className={style.profile_mailid}>
                  <p className={style.profile_mail}>
                    guntikovelamohankrishna@gmail.com{" "}
                  </p>
                  <select name="" id="">
                    <option value="">Add new account</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.forms}>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className={style.form_row1}>
              <div className={style.input_with_logo}>
                <BadgeIcon className={style.input_logo} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  placeholder="Name"
                />
              </div>
              <div className={style.input_with_logo}>
                <MailOutlineIcon className={style.input_logo} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Email Id"
                />
              </div>
            </div>
            <div className={style.form_row2}>
              <div className={style.input_with_logo}>
                <LocalPhoneIcon className={style.input_logo} />
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  placeholder="Mobile No"
                />
              </div>
              <div className={style.input_with_logo}>
                <WorkIcon className={style.input_logo} />
                <select
                  name="select"
                  id="select"
                  value={formik.values.select}
                  onChange={formik.handleChange}
                >
                  <option value="select a option">Select a option</option>
                  <option value="Pursing">Pursing</option>
                  <option value="Experienced">Experienced</option>
                  <option value="Fresher">Fresher</option>
                </select>
              </div>
            </div>
            <div>
              <div className="card">
                <Editor
                  value={text}
                  onTextChange={(e) => setText(e.htmlValue)}
                  style={{ height: "320px" }}
                />
              </div>
            </div>
            <input type="submit" className={style.submit_button} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Ideahub;



  const fetchUserDetails = async() => {
    try{
      const token = localStorage.getItem('access_token');
      const response = await fetch('https://ideahubbackend.up.railway.app/user/',{
        method : 'GET',
        headers :{
            'authorization' : `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
      });
      if(response.status === 403){
        // navigate to login page
      }
      const result = await response.json();
      if(!result.error && response.status === 200){
        const data = result.data
        // set the default variables in the feilds like email, phone number,name
      }
      
      console.log(result.message);
    }catch(err){
      console.log('Error proccessing the request:',err.message)
    }
  }

// import { createContext, useState } from "react"

// export const UserContext = createContext({
//     email:"",
//     login: (email)=>{},
// })


// export const UserContextProvider = (props)=>{
//     const [email, setEmail] = useState("")

//     function login (email){
//         setEmail(email)
//     }
//     return (
//        <UserContext.Provider value={{email, login}}>
//             {props.children}
//        </UserContext.Provider> 
//     )
// }

// UserContext.js

// import React, { createContext, useState } from "react";

// // Create a new context
// export const UserContext = createContext();

// // Create a provider component
// export const UserProvider = ({ children }) => {
//   // State to store user information
//   const [user, setUser] = useState(null);

//   // Function to login the user
//   const login = (userData) => {
//     setUser(userData);
//   };

//   // Function to logout the user
//   const logout = () => {
//     setUser(null);
//     // Additional cleanup logic if needed
//   };

//   // Value to be provided to consumers of this context
//   const value = {
//     user,
//     login,
//     logout,
//   };

//   // Provide the context value to its children
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };


// UserContext.js
import React, { createContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const login = (data) => {
    setUserData(data);
  };

  const logout = () => {
    setUserData(null);
    sessionStorage.removeItem(userData)
    Navigate('/')

  };
  console.log(userData, login);

  return (
    <UserContext.Provider value={{ userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

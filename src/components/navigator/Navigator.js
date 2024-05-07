import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Signup from "../../pages/Signuppages/Signup.js";
import Signin from "../../pages/Signinpages/Signin";
import Ideahub from "../../pages/Ideahub/Ideahub.js";
// import { useContext } from "react";
// import { UserContext } from "../Context/UserContext.js";
import { UserProvider } from "../Context/UserContext.js";

function Navigator() {
  // const { user } = useContext(UserContext);
  // const isAuthenticated = sessionStorage.getItem('access_token') !== null;


  return (
    <>
            <UserProvider>

      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signin" element={isAuthenticated ? <Navigate to="/ideahub" /> : <Signin />} />
      <Route path="/ideahub" element={isAuthenticated ? <Ideahub /> : <Navigate to="/signin" />} /> */}
<Route path="/signin" element={<Signin/>}/>
<Route path="/ideahub" element={<Ideahub/>}/>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      </UserProvider>

    </>
  );
}

export default Navigator;

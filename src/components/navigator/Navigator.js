import HomePage from "../../pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../../pages/Signuppages/Signup.js";
import Signin from "../../pages/Signinpages/Signin";
import Ideahub from "../../pages/Ideahub/Ideahub.js";

function Navigator() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/ideahub" element={<Ideahub />} />
        </Routes>
      </Router>
    </>
  );
}

export default Navigator;

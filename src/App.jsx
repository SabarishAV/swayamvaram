import "./App.css";
import Pages from "./Pages";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      {/* <Pages/> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Pages />} />
          <Route exact path="Contact" element={<Contact />} />
          <Route exact path="Profile" element={<Profile />} />
          <Route exact path="Login" element={<Login />} />
          <Route exact path="SignUp" element={<SignUp />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

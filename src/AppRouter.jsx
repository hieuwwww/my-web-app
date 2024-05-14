import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Thêm Routes vào đây
import Home from "./Home";
import About from "./About";

import "./App.css";
import TAC from "./TermsAndConditions";
const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/about">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/terms">Terms and Condition</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TAC />} />
        </Routes>
      </div>
    </Router>
  );
};
export default AppRouter;

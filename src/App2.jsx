import "./App.css";
import React from "react";
import Filter from "./component/Filter";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Page404 from "./component/Page404";
import User from "./component/User";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Channel from "./component/Channel";
import Other from "./component/Other";
import Login from "./component/Login";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Cmp={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Cmp={About} />} />
          {/* <Route path="/*" element={<Page404 />} /> */}
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/filter" element={<Protected Cmp={Filter} />} />
          <Route path="/contact/" element={<Contact />} />
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Tasks from "../tasks/tasks";
import About from "../about/about";
import Home from "../home/home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Router;

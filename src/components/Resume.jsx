import React from "react";
import resume from "../assets/ChiuMing_Lam_Resume.jpg";
import Banner from "./Banner";

const Resume = () => (
  <div id="resume-div">
    <Banner styleclass="ResumePageBanner" h1text="My Resume" />
    <div className="resumePage">
      <div id="resume">
        <img src={resume} alt="ChiuMing-Lam Resume" />
      </div>
    </div>
  </div>
);

export default Resume;

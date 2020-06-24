import React, { lazy, Suspense } from "react";
import resume from "../assets/ChiuMing_Lam_Resume.jpg";

// const resume = lazy(() => import("../assets/ChiuMing_Lam_Resume.jpg"));
const Banner = lazy(() => import("./Banner"));

const Resume = () => (
  <Suspense fallback={<div className="loading"></div>}>
    <div id="resume-div">
      <Banner styleclass="ResumePageBanner" h1text="My Resume" />
      <div className="resumePage">
        <div id="resume">
          <img src={resume} alt="ChiuMing-Lam Resume" />
        </div>
      </div>
    </div>
  </Suspense>
);

export default Resume;

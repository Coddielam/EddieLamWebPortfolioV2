import React from "react";
import { HashLink } from "react-router-hash-link";
import Banner from "./Banner";

const About = () => (
  <div id="about-page">
    <Banner styleclass="about-banner" h1text="About me" />
    <div className="about-content">
      <h3>My education</h3>
      <p>
        I studied Big Data and Business Analytics at Suffolk University, and
        have graduated summa cum laude on 4th May, 2020.
      </p>
      <h3>Some of My Experiences</h3>
      <p>
        I've worked as a data analyst to generate sales forecasts, building
        dashboards, creating data visuals, along with other tasks. I've worked
        as a peer tutor, study group leader, and a workshop scholar tutoring
        students how to use Excel/ Python for data analytics.
      </p>
      <h3>What I do</h3>
      <p>
        I leverage data and technologies to solve problems. I can forecast or
        predict the probability of an event. I can tell stories with data.
      </p>
      <h3>Currently</h3>
      <p>
        I am currently looking for data analyst/ junior web developer jobs,
        while continuously learning about web programming and working on my data
        analytics skills.
      </p>

      <HashLink className="anchor-btn" to="/#project-section">
        Check out projects
      </HashLink>
    </div>
  </div>
);

export default About;

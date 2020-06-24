// package imports
import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Aos from "aos";
// components import
import Banner from "./Banner";
import ProjectList from "./ProjectList";
// components containing information
import mlprojectInfo from "./MLProjectInformation";
import webprojectInto from "./WebProjectInformation";

function Home(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div id="home-page">
      <Banner
        styleclass="hero-image"
        h1text="Hello, I am Eddie."
        h2text="I analyze data and build websites."
        btntext="Check out projects"
        href="#project-section"
      />
      <div id="project-section"></div>
      <BrowserRouter>
        <ul className="project-navigation" data-aos="flip-left">
          <NavHashLink
            to="/EddieLamWebPortfolioV2"
            strict
            className="switch-view-btn "
            activeClassName="active-projsec"
          >
            Machine Learning Projects
          </NavHashLink>
          <NavHashLink
            to="/web-project"
            className="switch-view-btn"
            activeClassName="active-projsec"
          >
            Front-End Web Projects
          </NavHashLink>
        </ul>

        <Route exact path="/EddieLamWebPortfolioV2">
          <div className="projects">
            <ProjectList data={mlprojectInfo} />
          </div>
        </Route>
        <Route path="/web-project">
          <div className="projects">
            <ProjectList data={webprojectInto} />
          </div>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default Home;

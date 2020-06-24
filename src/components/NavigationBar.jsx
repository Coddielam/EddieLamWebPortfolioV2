import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import WalmartTimeSeriesAnalysis from "../assets/WalmartTimeSeriesAnalysisProjectView.jpg";
import NYAirbnb from "../assets/NYAirBNBPCA_ChiuMingLam.slides.jpg";
import Titanic from "../assets/TitanicProjectView.jpg";

// components
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));
const ViewProject = lazy(() => import("./ViewProject"));

// import About from "./About";
// import Resume from "./Resume";
// import ViewProject from "./ViewProject";
// project views

class NavigationBar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul className="NavigationBar">
          <NavHashLink
            to="/EddieLamWebPortfolioV2"
            activeClassName="active-nav"
            className="nav"
          >
            Home
          </NavHashLink>

          <NavHashLink
            to="/about#about-page"
            activeClassName="active-nav"
            className="nav"
          >
            About
          </NavHashLink>

          <NavHashLink
            to="/resume"
            activeClassName="active-nav"
            className="nav"
          >
            Resume
          </NavHashLink>
        </ul>
        <Switch>
          <Suspense fallback={<div className="loading">Still Loading...</div>}>
            <Route exact path="/EddieLamWebPortfolioV2" component={Home} />

            <Route path="/services"></Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />

            <Route
              path="/WalmartTimeSeriesAnalysis"
              render={() => (
                <ViewProject projectImage={WalmartTimeSeriesAnalysis} />
              )}
            />
            <Route
              path="/NYAirbnbPrincipalComponentAnalysis"
              render={() => <ViewProject projectImage={NYAirbnb} />}
            />
            <Route
              path="/LearningThroughDisaster"
              render={() => <ViewProject projectImage={Titanic} />}
            />
          </Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default NavigationBar;

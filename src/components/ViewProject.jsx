import React from "react";
import { withRouter } from "react-router-dom";

function ViewProject(props) {
  const style = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
  };

  return (
    <div style={style} className="ProjectPage">
      <div id="ProjectView">
        <img src={props.projectImage} alt="ChiuMing-Lam Resume" />
      </div>
    </div>
  );
}

export default withRouter(ViewProject);

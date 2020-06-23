import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Aos from "aos";

function Project(props) {
  const style = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "15px",
    height: "35vh",
  };
  function toPage() {
    if (!props.to) {
      window.location = props.href;
      window.scrollTo(0, 0);
    }
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Link to={props.href} onClick={toPage} data-aos="fade-up">
      <div className="project">
        <div style={style} className="proj-thumbnails"></div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}

export default withRouter(Project);

import React from "react";

function Banner(props) {
  return (
    <div
      className={props.styleclass}
      h1text={props.h1text}
      h2text={props.h2text}
      btntext={props.btntext}
    >
      <div className="banner-content-region">
        <h1>{props.h1text}</h1>
        <h2>{props.h2text}</h2>
        <a className="banner-btn" href={props.href}>
          {props.btntext}
        </a>
      </div>
    </div>
  );
}

export default Banner;

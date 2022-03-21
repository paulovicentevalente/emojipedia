import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.nameEmoji}>
          {props.imgEmoji}
        </span>
        <span>{props.nameEmoji}</span>
      </dt>
      <dd>{props.meaningEmoji}</dd>
    </div>
  );
}

export default Entry;

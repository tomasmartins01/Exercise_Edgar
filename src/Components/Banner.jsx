import React, { Fragment, useLayoutEffect, useState } from "react";
import "../Styles/banner.less";
function Banner(props) {
  let banner_color;
  const [visible, setVisible] = useState(true);
  const [clicked, setClicked] = useState(false);

  useLayoutEffect(() => {
    banner_color = document.getElementsByClassName("banner_message")[0];
    banner_color.style.backgroundColor = props.bColor;
  });

  return (
    <Fragment>
      <div id="banner_container">
        <button
          className={`banner_button ${visible ? "" : "button_remove"}`}
          onClick={() => {
            setVisible(false);
            setClicked(true);
            setTimeout(() => setVisible(true), 3000);
            setTimeout(() => setClicked(false), 3000);
          }}
        >
          X
        </button>
        <div className={`banner_message ${clicked ? "message_remove" : ""}`}>
          <p>{props.children}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Banner;
// button OnClick

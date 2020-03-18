import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ selected }) => {
  useLayoutEffect(() => {
    const a = document.querySelector(".selected");
    const b = document.querySelector(".partialline");
    b.style.left = `${a.offsetLeft}px`;
    b.style.width = `${a.offsetWidth}px`;
  });

  return (
    <div>
      <div className="topline"> </div>

      <div className="partialline"> </div>

      <div className="menu">
        <ul>
          <li className="react">
            <Link className={selected === "react" ? "selected" : null} to="/">
              React
            </Link>
          </li>

          <li className="exercise">
            <Link
              className={selected === "exercise" ? "selected" : null}
              to="/exercise"
            >
              Exercise
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

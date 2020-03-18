import React, {useState} from "react";
import "../dropdown.less";

function Dropdown({ title, selected, items }) {
  const [open, changeOpen] = useState(false);

  function DropDownMenu(){
    changeOpen(!open)
  }

  return (
    <div className="dropdown">
      <h1>{title}</h1>
      <div className="button" onClick={DropDownMenu}>
        <div className={"chevron" + open ? "up" : "down"}></div>
      </div>
    </div>
  );
}

export default Dropdown;

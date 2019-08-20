import React from "react";

import "./SideDrawer.css";

const SideDrawer = props => {
  let drawlerClasses = "side-drawer";

  if (props.show) {
    drawlerClasses = "side-drawer open";
  }

  return (
    <nav className={drawlerClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;

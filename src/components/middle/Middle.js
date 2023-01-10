import React from "react";
import Center from "../center/Center";
import Leftcomponents from "../leftComponent/Leftcomponents";
import RightComponents from "../rightComponent/RightComponents";
function Middle() {
  return (
    <div style={{ display: "flex" }}>
      <Leftcomponents />
      <Center />
    </div>
  );
}

export default Middle;

import React from "react";
import Mockup from "./Mockup";
import Cta from "./Cta";

function MainArea() {
  return (
    <div className="mainarea">
      <Mockup className="mockup" />
      <Cta />
    </div>
  );
}

export default MainArea;

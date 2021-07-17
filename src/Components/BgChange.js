import React, { useState, useEffect } from "react";
import "./BgChange.css";

const BgChange = () => {
  const [show, setshow] = useState(false);

  return (
    <div className={`Background__one ${show && "Background__two"}`}>
      <h1>Change Background</h1>
      <button onClick={() => setshow(!show)}>Click Me!</button>
    </div>
  );
};

export default BgChange;

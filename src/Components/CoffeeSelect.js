import React, { useState, useEffect } from "react";
import CoffeeSelectIcons from "./CoffeeSelectIcons";
import "../styles.css";

export default function CoffeeSelect(props) {
  const [testVal, setTestVal] = useState(0);

  return (
    <div className="CoffeeSelect">
      <h4>Select Coffee</h4>
      <CoffeeSelectIcons />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "../styles.css";

export default function CoffeeSelect(props) {
  const [testVal, setTestVal] = useState(0);

  return (
    <div>
      <button className="CoffeeIcon" onClick={showCoffee}>one</button>
      <button className="CoffeeIcon" onClick={showCoffee}>two</button>
      <button className="CoffeeIcon" onClick={showCoffee}>three</button>
      <button className="CoffeeIcon" onClick={showCoffee}>four</button>
      <button className="CoffeeIcon" onClick={showCoffee}>five</button>
    </div>
  );

  function showCoffee() {
    console.log("click");
  }
}

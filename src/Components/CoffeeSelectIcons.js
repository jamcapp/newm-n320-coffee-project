import React, { useState, useEffect } from "react";
import "../styles.css";

export default function CoffeeSelect(props) {
  const [testVal, setTestVal] = useState(0);

  return (
    <div>
      <button className="CoffeeIcon" onClick={showCoffee}>Tanzania Peaberry</button>
      <button className="CoffeeIcon" onClick={showCoffee}>Hawaii Kona</button>
      <button className="CoffeeIcon" onClick={showCoffee}>Nicaraguan Coffee</button>
      <button className="CoffeeIcon" onClick={showCoffee}>Sumatra Mandheling</button>
      <button className="CoffeeIcon" onClick={showCoffee}>Yirgacheffe</button>
    </div>
  );

  function showCoffee() {
    fetch("data/coffee.json")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  }
}

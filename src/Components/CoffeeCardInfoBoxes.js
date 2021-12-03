import React, { useState, useEffect } from "react";
import "../styles.css";

export default function CoffeeCardInfoBoxes(props) {
  const [testVal, setTestVal] = useState(0);

  return (
    <div className="InfoBoxes">
      <div className="SmallBoxes">
        <div className="InfoBox one">Roast: {props.bean.roast}</div>
        <div className="InfoBox two">Origin: {props.bean.origin}</div>
        <div className="InfoBox three">Flavor: {props.bean.flavor}</div>
        <div className="InfoBox four">Brew: {props.bean.brew}</div>
      </div>

      <div className="LargeBox">
        <div className="LargeBoxText">
          Brewing Methods: {props.bean.brewingMethods.join(", ")}
        </div>
      </div>
    </div>
  );
}

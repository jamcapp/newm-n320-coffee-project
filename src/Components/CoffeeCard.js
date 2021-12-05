import React, { useState, useEffect } from "react";
import CoffeeCardInfoBoxes from "./CoffeeCardInfoBoxes";
import "../styles.css";
import { CSSTransition } from "react-transition-group";

export default function CoffeeCard(props) {
  const [testVal, setTestVal] = useState(0);

  // use effect transition

  return (
    <div className="CoffeeCard">
      {/* IMAGE AND DESCRIPTION */}
      <div className="LeftSide">
        <div className="CoffeeImage">
          <img src={props.bean.image} />
        </div>
        <div className="CoffeeDescription">
          Description: {props.bean.description}
        </div>
      </div>

      <div className="RightSide">
        {/* CARD HEADER */}
        <div className="CardHeader">
          <div className="CoffeeName">
            {props.bean.name}
            <div className="CoffeeSubtext">{props.bean.subText}</div>
          </div>
        </div>

        {/* INFORMATION BOXES */}
        <CoffeeCardInfoBoxes bean={props.bean} />
      </div>
    </div>
  );
}

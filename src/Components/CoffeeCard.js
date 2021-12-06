import React, { useState, useEffect } from "react";
import CoffeeCardInfoBoxes from "./CoffeeCardInfoBoxes";
import "../styles.css";
import { CSSTransition } from "react-transition-group";

export default function CoffeeCard(props) {
  const [testVal, setTestVal] = useState(0);
  const [cardState, setCardState] = useState(true);
  const [animationLength, setAnimationLength] = useState(1250);

  // on effect, set cardstate back to true after slide animation is complete.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardState(true)
    }, animationLength);
  })

  return (
    <CSSTransition key={testVal} in={cardState} timeout={animationLength} classNames="Coffee-Slide">
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
        <button onClick={() => {setCardState(false); console.log(cardState);}}>[DEBUG] coffee state false</button>
      </div>
    </CSSTransition>
  );
}

import React, { useState, useEffect } from "react";
import CoffeeSelectIcons from "./CoffeeSelectIcons";
import "../styles.css";

export default function CoffeeSelect(props) {
  return (
    <div className="CoffeeSelect">
      <h4>Select Coffee</h4>
      <CoffeeSelectIcons
        setBean={props.setBean}
        testVal={props.testVal}
        setTestVal={props.setTestVal}
        cardState={props.cardState}
        setCardState={props.setCardState}
        animationLength={props.animationLength}
        setAnimationLength={props.setAnimationLength}
      />
    </div>
  );
}

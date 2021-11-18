import React, { useState, useEffect } from "react";
import CoffeeCardInfoBoxes from "./CoffeeCardInfoBoxes";
import "../styles.css";

export default function CoffeeCard(props) {
  const [testVal, setTestVal] = useState(0);

  return (
    <div className="CoffeeCard">
      {/* IMAGE AND DESCRIPTION */}
      <div className="LeftSide">
        <div className="CoffeeImage">IMAGE</div>
        <div className="CoffeeDescription">
          this is a test sentence and more words to test the styling.
        </div>
      </div>

      <div className="RightSide">
        {/* CARD HEADER */}
        <div className="CardHeader">
          <div className="CoffeeName">
            {props.beanName}
            <div className="CoffeeSubtext">coffee subtext</div>
          </div>
        </div>

        {/* INFORMATION BOXES */}
        <CoffeeCardInfoBoxes />
      </div>
    </div>
  );
}

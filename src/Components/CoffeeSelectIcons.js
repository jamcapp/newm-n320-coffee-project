import React, { useState, useEffect } from "react";
import "../styles.css";

export default function CoffeeSelect(props) {
  const [testVal, setTestVal] = useState(0);

  return (
    <div>
      <div className="CoffeeIcon">one</div>
      <div className="CoffeeIcon">two</div>
      <div className="CoffeeIcon">three</div>
      <div className="CoffeeIcon">four</div>
      <div className="CoffeeIcon">five</div>
    </div>
  );
}

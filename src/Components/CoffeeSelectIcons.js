import React, { useState, useEffect } from "react";
import "../styles.css";

export default function CoffeeSelect(props) {
  const [testVal, setTestVal] = useState(0);

  return (
    <div>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(0);
        }}
      >
        Tanzania Peaberry
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(1);
        }}
      >
        Hawaii Kona
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(2);
        }}
      >
        Nicaraguan Coffee
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(3);
        }}
      >
        Sumatra Mandheling
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(4);
        }}
      >
        Yirgacheffe
      </button>
    </div>
  );

  function showCoffee(beanID) {
    // beanID is passed in as argument.
    console.log(beanID);
    fetch("data/coffee.json")
      .then((result) => result.json())
      .then((data) => {
        // log the data for the beanID.
        console.log(data[beanID]);
        props.setBean(data[beanID]);
      });
  }
}

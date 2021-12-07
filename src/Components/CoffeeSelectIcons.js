import React, { useState, useEffect } from "react";
import "../styles.css";

export default function CoffeeSelect(props) {
  return (
    <div>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(0);
          props.setCardState(false);
          console.log(props.cardState);
        }}
      >
        Tanzania Peaberry
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(1);
          props.setCardState(false);
          console.log(props.cardState);
        }}
      >
        Hawaii Kona
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(2);
          props.setCardState(false);
          console.log(props.cardState);
        }}
      >
        Nicaraguan Coffee
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(3);
          props.setCardState(false);
          console.log(props.cardState);
        }}
      >
        Sumatra Mandheling
      </button>
      <button
        className="CoffeeIcon"
        onClick={() => {
          showCoffee(4);
          props.setCardState(false);
          console.log(props.cardState);
        }}
      >
        Yirgacheffe
      </button>
    </div>
  );

  function showCoffee(beanID) {
    // beanID is passed in as argument.
    console.log(beanID);
    setTimeout(() => {
      fetch("data/coffee.json")
        .then((result) => result.json())
        .then((data) => {
          // log the data for the beanID.
          console.log(data[beanID]);
          props.setBean(data[beanID]);
        });
    }, 635);
  }
}

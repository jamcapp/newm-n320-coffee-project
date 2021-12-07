import React, { useState, useEffect } from "react";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import CoffeeSelect from "./Components/CoffeeSelect";

export default function App() {
  //hook for coffeeBeans
  const [coffeeBeans, setCoffeeBeans] = useState([]);
  //hook for current bean
  const [bean, setBean] = useState({ brewingMethods: [] });
  //hooks for css animation
  const [testVal, setTestVal] = useState(0);
  const [cardState, setCardState] = useState(true);
  const [animationLength, setAnimationLength] = useState(1250);

  //load json data
  useEffect(() => {
    fetch("data/coffee.json")
      .then((result) => result.json())
      .then((data) => {
        //store data
        setCoffeeBeans(data);
        //log data to console
        console.log(data);
        //set bean
        setBean(data[0]);
      });
  }, []);

  // on effect, set cardstate back to true after slide animation is complete.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCardState(true);
    }, animationLength);
  });

  return (
    <div className="App">
      <h1>Coffee App</h1>
      <div className="CoffeeStuff">
        <CoffeeSelect
          setBean={setBean}
          testVal={testVal}
          setTestVal={setTestVal}
          cardState={cardState}
          setCardState={setCardState}
          animationLength={animationLength}
          setAnimationLength={setAnimationLength}
        />
        <CoffeeCard
          bean={bean}
          testVal={testVal}
          setTestVal={setTestVal}
          cardState={cardState}
          setCardState={setCardState}
          animationLength={animationLength}
          setAnimationLength={setAnimationLength}
        />
      </div>
    </div>
  );
}

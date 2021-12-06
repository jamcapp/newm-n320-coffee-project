import React, { useState, useEffect } from "react";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import CoffeeSelect from "./Components/CoffeeSelect";

export default function App() {
  //hook for coffeeBeans
  const [coffeeBeans, setCoffeeBeans] = useState([]);
  //hook for current bean
  const [bean, setBean] = useState({ brewingMethods: [] });

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

  return (
    <div className="App">
      <h1>Coffee App</h1>
      <div className="CoffeeStuff">
        <CoffeeSelect setBean={setBean} />
        <CoffeeCard bean={bean} />
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import CoffeeSelect from "./Components/CoffeeSelect";

export default function App() {
  //hook for coffeeBeans
  const [coffeeBeans, setCoffeeBeans] = useState([]);
  //hook for beanName, just for testing for now
  const [beanName, setBeanName] = useState("");

  //load json data
  useEffect(() => {
    fetch("data/data.json")
      .then((result) => result.json())
      .then((data) => {
        //store data
        setCoffeeBeans(data);
        //log data to console
        console.log(data);
        //set bean name
        //this is just for testing
        setBeanName(data[0].name);
      });
  }, []);

  return (
    <div className="App">
      <h1>Coffee App</h1>
      <div className="CoffeeStuff">
        <CoffeeSelect />
        <CoffeeCard beanName={beanName} />
      </div>
    </div>
  );
}

import React from "react";
import './App.css'; 
import CoffeeCard from "./Components/CoffeeCard"; 
import CoffeeSelect from "./Components/CoffeeSelect";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Coffee App</h1> 
        <div className="CoffeeStuff">
          <CoffeeSelect />
          <CoffeeCard />
        </div>
      </div>
    );
  }
}

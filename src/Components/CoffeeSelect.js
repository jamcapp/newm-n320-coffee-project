import React, { useState, useEffect } from "react"; 
import CoffeeSelectIcons from "./CoffeeSelectIcons";
import "../styles.css"; 

export default function CoffeeSelect(props) {
    const [testVal, setTestVal] = useState(0);

    return(
        <div class="CoffeeSelect">Select Coffee
            <CoffeeSelectIcons />
        </div>
    )
}
import React, { useState, useEffect } from "react"; 
import "../styles.css"

export default function CoffeeCard(props) {
    const [testVal, setTestVal] = useState(0);

    return(
        <div className="CoffeeCard">
            <div className="CoffeeName">Coffee Name
                <div className="CoffeeSubtext">coffee subtext</div>
            </div>
            <div className="InfoBoxes">
                <div className="InfoBox one">hello1</div>
                <div className="InfoBox two">hello2</div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from "react"; 
import "../styles.css"

export default function CoffeeCard(props) {
    const [testVal, setTestVal] = useState(0);

    return(
        <div className="CoffeeCard">
            
            {/* CARD HEADER */}
            <div className="CoffeeName">Coffee Name
                <div className="CoffeeSubtext">coffee subtext</div>
            </div>

            {/* INFORMATION BOXES */}
            <div className="InfoBoxes">
                <div className="InfoBox one">hello1</div>
                <div className="InfoBox two">hello2</div>
                <div className="InfoBox three">hello3</div>
                <div className="InfoBox four">hello4</div>
            </div>
        </div>
    )
}
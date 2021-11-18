import React, { useState, useEffect } from "react"; 
import "../styles.css"

export default function CoffeeCard(props) {
    const [testVal, setTestVal] = useState(0);

    return(
        <div className="CoffeeCard">coffee card
            <div className="CoffeeName">Coffee Name
                <div className="CoffeeSubtext">coffee subtext</div>
            </div>
        </div>
    )
}
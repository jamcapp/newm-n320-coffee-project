import React, { useState, useEffect } from "react"; 
import "../styles.css"

export default function CoffeeCard(props) {
    const [testVal, setTestVal] = useState(0);

    return(
        <div className="CoffeeCard">

            {/* IMAGE AND DESCRIPTION */}
            <div className="LeftSide">
                <div className="CoffeeImage">IMAGE</div>
                <div className="CoffeeDescription">
                    this is a test sentence and more words to test the styling.
                </div>
            </div>
            
            <div className="RightSide">
                {/* CARD HEADER */}
                <div className="CardHeader">
                    <div className="CoffeeName">Coffee Name
                        <div className="CoffeeSubtext">coffee subtext</div>
                    </div>
                </div>
                

                {/* INFORMATION BOXES */}
                <div className="InfoBoxes">

                    <div className="SmallBoxes">
                        <div className="InfoBox one">hello1</div>
                        <div className="InfoBox two">hello2</div>
                        <div className="InfoBox three">hello3</div>
                        <div className="InfoBox four">hello4</div>
                    </div>

                    <div className="LargeBox">
                        content
                    </div>
                </div>
            </div>    
        </div>
    )
}
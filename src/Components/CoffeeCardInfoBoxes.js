import React, { useState, useEffect } from "react"; 
import "../styles.css"

export default function CoffeeCardInfoBoxes(props) {
    const [testVal, setTestVal] = useState(0);

    return(
        <div className="InfoBoxes">

            <div className="SmallBoxes">
                <div className="InfoBox one">hello1 asdf af Coffee Beans</div>
                <div className="InfoBox two">hello2 more text than box one</div>
                <div className="InfoBox three">hello3</div>
                <div className="InfoBox four">hello4</div>
            </div>

            <div className="LargeBox">
                <div className="LargeBoxText">
                    this is where some text would go afioejwf test 1 2 3  3 4 4  24 24 24 4 
                </div>
            </div>
        </div>
    )
}
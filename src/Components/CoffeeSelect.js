import React, { useState, useEffect } from "react"; 
import "../styles.css"; 

export default function CoffeeSelect(props) {
    const [testVal, setTestVal] = useState(0);

    return(
        <div class="CoffeeSelect">coffee select
            <div class="CoffeeIcon">one</div>
            <div class="CoffeeIcon">two</div>
            <div class="CoffeeIcon">three</div>
            <div class="CoffeeIcon">four</div>
            <div class="CoffeeIcon">five</div>
        </div>
    )
}
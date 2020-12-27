import React from 'react';
import NavigationItem from "../NavigationItem/NavigationItem"

import "./NavigationItems.css"

function NavigationItems() {
    return (
        <ul className = "NavigationItems">
            <NavigationItem target = "/" active>Burger Builder</NavigationItem>
            <NavigationItem target = "/">Checkout</NavigationItem>
        </ul>
    );
}

export default NavigationItems;
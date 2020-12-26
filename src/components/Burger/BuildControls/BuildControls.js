import React from 'react';
import BuildControl from "./BuildControl/BuildControl";

import "./BuildControls.css"

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"},

]

const BuildControls = (props) => {
    return ( 
        <div className="BuildControls">
            <p><strong>Current price: {props.price}&#8377;</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                disabled = {props.disabledinfo[ctrl.type]}
                //type = {ctrl.type}
                // added = {props.ingredientAdded}
                added = {() => props.ingredientAdded(ctrl.type)}
                removed = {() => props.ingredientRemoved(ctrl.type)}/>
            ))}
        </div>
     );
}
 
export default BuildControls;
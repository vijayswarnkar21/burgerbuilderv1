import React from 'react';
import "./BurgerIngredient.css"
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredients = null;

    switch(props.type) {
        case ('bread-bottom'): 
            ingredients = <div className = "BreadBottom"></div>
            break;
        case ('bread-top'):
            ingredients = (
                <div className = "BreadTop">
                    <div className = "Seeds1"></div>
                    <div className = "Seeds2"></div>
                </div>
            )
            break;
        case ('meat'):
            ingredients = <div className = "Meat"></div>
            break;  
        case ('cheese'):
            ingredients = <div className = "Cheese"></div>
            break;  
        case ('bacon'):
            ingredients = <div className = "Bacon"></div>
            break;  
        case ('salad'):
            ingredients = <div className = "Salad"></div>
            break;   
        default:
            ingredients =  null;          
    }
    return ingredients;
}
burgerIngredient.protoTypes = {
    type: PropTypes.string.isRequired
}  
export default burgerIngredient;
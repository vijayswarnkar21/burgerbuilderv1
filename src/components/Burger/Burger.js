import React from 'react';
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient"

import "./Burger.css"
import { array } from 'prop-types';


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_,i) => {
               return  <BurgerIngredient key = {ingredient + i} type={ingredient}/>;
            })
        }).reduce((arr,el) => {
            return arr.concat(el);
        },[]);

    if(!transformedIngredients.length){
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }    
    return (
        <div className = "Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
      );
}
 
export default burger;
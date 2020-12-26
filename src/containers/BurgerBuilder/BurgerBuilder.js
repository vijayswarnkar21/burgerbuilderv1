import React , { Component }from "react";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

const INGREDIENT_PRICES = {
    salad: 10, 
    bacon: 20,
    cheese: 20,
    meat: 5
}
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {  }
    // }
    //modern way
    state = { 
        ingredients : {
            salad: 0, 
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice :10
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition + oldPrice;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(!oldCount){
            return
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    }

    render() { 
        const disabledinfo = {
            ...this.state.ingredients
        }

        for(let key in disabledinfo){
            disabledinfo[key] = disabledinfo[key] == 0; 
        }

        return ( 
            <React.Fragment>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler}
                price = {this.state.totalPrice}
                disabledinfo = {disabledinfo}/>
            </React.Fragment>
         );
    }
}
 
export default BurgerBuilder;
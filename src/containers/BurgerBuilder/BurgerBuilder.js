import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";

const INGREDIENT_PRICES = {
  salad: 10,
  bacon: 20,
  cheese: 20,
  meat: 5,
};
class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props)
  //     this.state = {  }
  // }
  //modern way
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 10,
    purchaseable: false,
    purchasing : false
  };

  purchaseHandler = () => {
    this.setState({purchasing : true})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (!oldCount) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState = (updatedIngredients) => {
    const ingredients = { ...updatedIngredients };
    const disableCheckOut = Object.values(ingredients).reduce(
      (acc, current) => acc + current,
      0
    );
    if (disableCheckOut) {
      this.setState({ purchaseable: true });
    } else {
      this.setState({ purchaseable: false });
    }
  };

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }

  purchaseContinuelHandler = () => {
    alert("Abee Bhuke ja Daliya kha");
  }

  render() {
    const disabledinfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledinfo) {
      disabledinfo[key] = disabledinfo[key] == 0;
    }

    return (
      <React.Fragment>
        <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
          <OrderSummery ingredients={this.state.ingredients} 
          modalClosed = {this.purchaseCancelHandler}
          price={this.state.totalPrice}
          purchaseContinued = {this.purchaseContinuelHandler}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
          disabledinfo={disabledinfo}
          ordered = {this.purchaseHandler}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;

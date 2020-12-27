import { string } from "prop-types";
import React from "react";
import Button from "../../UI/Button/Button"

const orderSummery = (props) => {
  const ingredientsSummery = Object.keys(props.ingredients).map(igkey => {
      return <li key = {igkey}><span>{igkey}</span> : {props.ingredients[igkey]}</li>
  });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicioud burger with following ingredients:</p>
      <ul>
        {ingredientsSummery}
      </ul>
      <p><strong>Total Price: {props.price}&#8377;</strong></p>
      <p>Continue To checkout?</p>
      <Button btnType = "Danger" clicked = {props.modalClosed}>CANCEL</Button>
      <Button btnType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
    </React.Fragment>
  );
};

export default orderSummery;

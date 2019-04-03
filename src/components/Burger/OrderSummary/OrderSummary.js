import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

export default class OrderSummary extends Component {
  // This cuold be a functional component. Only for demo purpose the life cycle is set up here
  componentWillUpdate() {
    console.log("[OrderSummary] Willupdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(i => {
      return (
        <li key={i}>
          <span style={{ textTransform: "capitalize" }}>{i}</span>:
          {this.props.ingredients[i]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>
            Total Price: {this.props.price.toFixed(2)} {this.props.currency}
          </strong>
        </p>
        <p>Continue to checkout</p>

        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

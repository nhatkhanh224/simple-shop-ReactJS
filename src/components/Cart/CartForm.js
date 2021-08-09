import React from "react";
import classes from "./CartForm.module.css";
const CartForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = 1;
    const enteredAmountNumber = +enteredAmount;
    
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form onSubmit={submitHandler}>
      <button className={classes["card-button"]}>Add to cart</button>
    </form>
  );
};

export default CartForm;

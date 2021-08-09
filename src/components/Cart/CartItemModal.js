import React from "react";
import classes from "./CartItemModal.module.css";
const CartItemModal = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes["card-img"]} src={props.img} alt="" />
      <div className={classes["card-information"]}>
        <p className={classes["card-title"]}>{props.name}</p>
        <p className={classes["card-price"]}>{props.price} $</p>
      </div>
      <div className={classes["card-amount"]}>{props.amount}</div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
};

export default CartItemModal;

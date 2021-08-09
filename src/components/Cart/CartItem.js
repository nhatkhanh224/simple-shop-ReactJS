import { useContext } from "react";
import React from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
import CartForm from "./CartForm";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      img: props.img,
      name: props.name,
      amount: amount,
      price: props.price,
    });
    
  };
  return (
    <div className={classes.card}>
      <img className={classes["card-img"]} src={props.img} alt="" />
      <div className={classes["card-information"]}>
        <p className={classes["card-title"]}>{props.name}</p>
        <p className={classes["card-price"]}>{props.price} $</p>
      </div>
      <CartForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default CartItem;

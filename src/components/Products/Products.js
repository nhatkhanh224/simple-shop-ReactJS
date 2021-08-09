import React from "react";
import classes from "./Product.module.css";
import tshirt1 from "../../assets/t-shirt-1.jpg";
import tshirt2 from "../../assets/t-shirt-2.jpg";
import tshirt3 from "../../assets/t-shirt-3.jpg";
import CartItem from "../Cart/CartItem";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "T-SHIRT-1",
    img: tshirt1,
    price: 20,
  },
  {
    id: 2,
    name: "T-SHIRT-2",
    img: tshirt2,
    price: 30,
  },
  {
    id: 3,
    name: "T-SHIRT-3",
    img: tshirt3,
    price: 30,
  },
];
const Products = () => {
  
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <CartItem 
      key={product.id}
      id={product.id}
      img={product.img}
      name={product.name}
      price={product.price}
    />
  ));
  return <div className={classes.cards}>{productsList}</div>;
};

export default Products;

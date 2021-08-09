import React from "react";
import { Fragment } from 'react';
import headerImage from '../../assets/product.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div className={classes['header-brand']}>
          <h1>SimpleShop</h1>
        </div>
        <div className={classes['header-cart']}>
          <HeaderCartButton onClick={props.onShowCart}/>
        </div>
      </header>
      <div className={classes['header-image']}>
        <img
          src={headerImage}
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default Header;

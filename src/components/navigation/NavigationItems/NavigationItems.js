import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default function NavigationItems(props) {
  return (
    <div>
      <ul className={classes.NavigationItems}>
        <NavigationItem link='/'>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
      </ul>
    </div>
  );
}

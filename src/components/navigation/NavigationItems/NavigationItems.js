import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default function NavigationItems(props) {
  return (
    <div>
      <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>
          Burger Builder
        </NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/auth'>Authenticate</NavigationItem>
      </ul>
    </div>
  );
}

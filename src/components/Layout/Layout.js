import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../navigation/Toolbar/Toolbar';
import SideDrawer from '../navigation/SideDrawer/SideDrawer';

export default function Layout(props) {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

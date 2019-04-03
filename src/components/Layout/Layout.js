import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../navigation/Toolbar/Toolbar';

export default function Layout(props) {
  return (
    <Aux>
      <Toolbar>{props.children}</Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

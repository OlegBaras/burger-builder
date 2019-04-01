import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

export default function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(c => {
        return (
          <BuildControl
            key={c.label}
            label={c.label}
            added={() => props.ingredientAdded(c.type)}
            removed={() => props.ingredientRemoved(c.type)}
            disabled={props.disabled[c.type]}
          />
        );
      })}
    </div>
  );
}

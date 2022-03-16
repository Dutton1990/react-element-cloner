import { useState } from 'react';
import React, { cloneElement } from 'react';

export const ToggleInputs = ({ children }) => {
  const [disabled, setDisabled] = useState(false);

  const childrenArray = React.Children.toArray(children);

  const clonedChildren = childrenArray.map((child) => {
    if (disabled) {
      const clone = cloneElement(child, { disabled: true });
      return clone;
    } else {
      return child;
    }
  });

  return (
    <>
      <button
        onClick={() => {
          setDisabled(!disabled);
        }}
      >
        Disable
      </button>
      <div>{clonedChildren}</div>
    </>
  );
};

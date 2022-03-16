import React, { cloneElement } from 'react';

export const Breakfast = ({ children, overwrite }) => {
  const childrenArray = React.Children.toArray(children);

  const clonedChildren = childrenArray.map((child) => {
      if (overwrite){
          return cloneElement(child, { foodName: overwrite})
      }
    const clone = cloneElement(child, { foodName: 'coffee' });

    return clone;
  });

  return <div>{clonedChildren}</div>;
};

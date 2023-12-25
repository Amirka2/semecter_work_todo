import React, {ComponentPropsWithoutRef} from 'react';

import {ArrowDown} from "../ArrowDown";

export const ArrowUp = (props: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <ArrowDown
      style={{
        rotate: '180deg'
      }}
      {...props}
    />
);
};

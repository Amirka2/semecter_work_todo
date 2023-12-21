import React, {ComponentPropsWithoutRef} from 'react';

import * as Styles from './styles';

export const Input = ({width, height, ...restProps}: ComponentPropsWithoutRef<'input'>) => (
  <Styles.Input
    width={width}
    height={height}
    {...restProps}
  />
);

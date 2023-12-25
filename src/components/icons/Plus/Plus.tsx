import React, {ComponentPropsWithoutRef} from 'react';

export const Plus = ({width = 30, height = 30, color = '#000', ...restProps}: ComponentPropsWithoutRef<'svg'>) => {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 448 512" {...restProps}>
    <path
      opacity="1"
      fill={color}
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
    />
  </svg>
  );
};

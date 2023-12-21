import React, {PropsWithChildren} from 'react';

import {ITodoItem} from "interfaces";

export const TodoItem = (props: PropsWithChildren<ITodoItem>) => {
  return (
    <div>
      {props.children}
      <input type={"checkbox"} checked={props.isChecked}/>
    </div>
  );
};

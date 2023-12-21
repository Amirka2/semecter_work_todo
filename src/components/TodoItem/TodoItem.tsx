import React, {PropsWithChildren} from 'react';

import {ITodoItem} from "interfaces";

import * as Styles from './styles';
export const TodoItem = (props: PropsWithChildren<ITodoItem>) => {
  return (
    <Styles.Wrapper>
      <Styles.Text>
        {props.children}
      </Styles.Text>
      <Styles.CheckBox
        type={"checkbox"}
        checked={props.isChecked}
      />
    </Styles.Wrapper>
  );
};

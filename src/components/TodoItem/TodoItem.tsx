import React, {PropsWithChildren} from 'react';

import {ITodoItem} from "interfaces";

import * as Styles from './styles';

interface TodoItemProps {
  handleDelete: () => void;
  toggleIsChecked: () => void;
}

export const TodoItem = ({
  children,
  isChecked,
  toggleIsChecked,
  handleDelete
}: PropsWithChildren<ITodoItem & TodoItemProps>) => {

  return (
    <Styles.Wrapper>
      <Styles.Text>
        {children}
      </Styles.Text>
      <Styles.ButtonsWrapper>
        <Styles.CheckBox
          type={"checkbox"}
          checked={isChecked}
          onClick={toggleIsChecked}
        />
        <Styles.Delete
          onClick={handleDelete}
        >
          x
        </Styles.Delete>
      </Styles.ButtonsWrapper>
    </Styles.Wrapper>
  );
};

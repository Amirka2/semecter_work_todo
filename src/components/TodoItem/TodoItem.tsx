import React, {PropsWithChildren} from 'react';

import {ITodoItem} from "interfaces";

import * as Styles from './styles';
import {Close} from "../icons";

interface TodoItemProps {
  handleDelete: () => void;
  toggleIsChecked: () => void;
}

export const TodoItem = ({
  children,
  isChecked,
  toggleIsChecked,
  handleDelete,
  id
}: PropsWithChildren<ITodoItem & TodoItemProps>) => {

  return (
    <Styles.Wrapper>
      <Styles.Text>
        {children}
      </Styles.Text>
      <Styles.ButtonsWrapper>
        <Styles.CheckBox
          name={`checkbox_${id}`}
          type={"checkbox"}
          defaultChecked={isChecked}
          onClick={toggleIsChecked}
        />
        <Styles.Delete
          onClick={handleDelete}
        >
          <Close width={'16px'} height={'16px'}/>
        </Styles.Delete>
      </Styles.ButtonsWrapper>
    </Styles.Wrapper>
  );
};

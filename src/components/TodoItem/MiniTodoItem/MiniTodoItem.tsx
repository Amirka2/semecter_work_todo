import React, {PropsWithChildren} from 'react';

import {Close} from "components/icons";
import {ITodoItem} from "interfaces";

import * as Styles from "./styles";

interface MiniTodoItemProps {
  todoItem: Omit<ITodoItem, 'description' | 'text'>;
  handleClickTodo: () => void;
  handleCheckboxToggle: (e: React.MouseEvent<HTMLInputElement>) => void;
  handleDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MiniTodoItem = ({
  handleClickTodo,
  handleCheckboxToggle,
  handleDeleteTodo,
  todoItem,
  children
}: PropsWithChildren<MiniTodoItemProps>) => {
  return (
    <Styles.Wrapper
      onClick={handleClickTodo}
    >
      <Styles.Text>
        {children}
      </Styles.Text>
      <Styles.ButtonsWrapper>
        <Styles.CheckBox
          name={`checkbox_${todoItem.id}`}
          type={"checkbox"}
          defaultChecked={todoItem.isChecked}
          onClick={handleCheckboxToggle}
        />
        <Styles.Delete
          onClick={(e) => handleDeleteTodo(e)}
        >
          <Close width={'16px'} height={'16px'}/>
        </Styles.Delete>
      </Styles.ButtonsWrapper>
    </Styles.Wrapper>
  );
};

import React from 'react';

import {ITodoItem} from 'interfaces';
import {TodoItem} from "components";

import * as Styles from './styles';

interface TodoListProps {
  todoItems: ITodoItem[];
}

export const BaseTodoList = ({
    todoItems,
  }: TodoListProps) => {
  return (
    <Styles.Wrapper>
      {todoItems.map(item => (
        <TodoItem
          {...item}
          key={item.id}
        >
          {item.text}
        </TodoItem>
      ))
      }
    </Styles.Wrapper>
  );
};

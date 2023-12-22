import React from 'react';

import {ITodoItem} from 'interfaces';
import {TodoItem} from "components";

import * as Styles from './styles';

interface TodoListProps {
  todoItems: ITodoItem[];
  handleDeleteItem: (id: number) => void;
  handleToggleItem: (id: number) => void;
}

export const BaseTodoList = ({
    todoItems,
    handleDeleteItem,
    handleToggleItem
  }: TodoListProps) => {
  return (
    <Styles.Wrapper>
      {todoItems.map(item => (
        <TodoItem
          {...item}
          handleDelete={() => handleDeleteItem(item.id)}
          toggleIsChecked={() => handleToggleItem(item.id)}
          key={item.id}
        >
          {item.text}
        </TodoItem>
      ))
      }
    </Styles.Wrapper>
  );
};

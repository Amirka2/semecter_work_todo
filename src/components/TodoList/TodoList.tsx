import React from 'react';

import {ITodoItem} from 'interfaces';

import {TodoItem} from "components/TodoItem/TodoItem";
import {Multiplicator} from "components/Multiplicator";

import * as Styles from './styles';

interface TodoListProps {
  todoItems: ITodoItem[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>}

export const TodoList = ({ todoItems, setLoading }: TodoListProps) => {
  return (
    <Styles.Wrapper>
      <Multiplicator setLoading={setLoading}/>
      {todoItems.map(item => (
        <TodoItem {...item}>
          {item.text}
        </TodoItem>
      ))
      }
    </Styles.Wrapper>
  );
};

import React from 'react';

import {ITodoItem} from 'interfaces';

import {TodoItem} from "components/TodoItem/TodoItem";
import {Multiplicator} from "components/Multiplicator";

interface TodoListProps {
  todoItems: ITodoItem[];
  setLoading: React.Dispatch<React.SetStateAction<boolean>>}

export const TodoList = ({ todoItems, setLoading }: TodoListProps) => {
  return (
    <div>
      <Multiplicator setLoading={setLoading}/>
      {todoItems.map(item => (
        <TodoItem {...item}>
          {item.text}
        </TodoItem>
      ))
      }
    </div>
  );
};

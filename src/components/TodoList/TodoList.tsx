import React from 'react';
import {TodoItem} from "components/TodoItem/TodoItem";
import {ITodoItem} from 'interfaces';

interface TodoListProps {
  todoItems: ITodoItem[];
}

export const TodoList = ({ todoItems }: TodoListProps) => {
  return (
    <div>
      {todoItems.map(item => (
        <TodoItem {...item}>
          {item.text}
        </TodoItem>
      ))
      }
    </div>
  );
};

import React from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {ITodoItem} from 'interfaces';

import {TodoItem} from "components";
import {Multiplicator} from "components";
import {deleteTodoItem, toggleTodoItem} from "helpers";

import * as Styles from './styles';

interface TodoListProps {
  todoItems: ITodoItem[];
}

export const TodoList = ({ todoItems }: TodoListProps) => {
  const queryClient = useQueryClient();

  const mutationToggle = useMutation({
    mutationFn: toggleTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const mutationDelete = useMutation({
    mutationFn: deleteTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <Styles.Wrapper>
      <Multiplicator/>
      {todoItems.map(item => (
        <TodoItem
          {...item}
          handleDelete={() => mutationDelete.mutate(item.id)}
          toggleIsChecked={() => mutationToggle.mutate(item.id)}
          key={item.id}
        >
          {item.text}
        </TodoItem>
      ))
      }
    </Styles.Wrapper>
  );
};

import React, {useEffect, useState} from 'react';

import {MainLayout} from "components/Layout";
import {TodoList} from "components/TodoList";

import {getTodos} from "helpers/todoItems";
import {ITodoItem} from "interfaces";

export const MainPage = () => {
  let todoItems: ITodoItem[] = [];
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    todoItems = getTodos();
    setTodos(todoItems);
    console.log('got todos', todoItems)
  }, [isLoading]);

  return (
    <MainLayout>
      <TodoList todoItems={todos} setLoading={setLoading}/>
    </MainLayout>
  );
};

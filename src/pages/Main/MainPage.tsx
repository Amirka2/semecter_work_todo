import React, {useEffect, useState} from 'react';

import {MainLayout} from "components/Layout";
import {TodoList} from "components/TodoList";

import {getTodos} from "helpers/todoItems";
import {ITodoItem} from "interfaces";

export const MainPage = () => {
  let todoItems: ITodoItem[] = [];
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    todoItems = getTodos();
  }, [isLoading]);

  return (
    <MainLayout>
      <TodoList todoItems={todoItems} setLoading={setLoading}/>
    </MainLayout>
  );
};

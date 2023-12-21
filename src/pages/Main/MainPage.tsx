import React from 'react';
import {useQuery} from "@tanstack/react-query";

import {MainLayout} from "components/Layout";
import {TodoList} from "components/TodoList";

import {getTodosFromStorage} from "helpers";

import {ITodoItem} from "interfaces";

export const MainPage = () => {
  const { data : todos, isLoading} = useQuery<ITodoItem[]>({
    queryKey: ['todos'],
    queryFn: getTodosFromStorage,
  });

  if (isLoading) {
    return <p>loading</p>
  }

  return (
    <MainLayout>
      <TodoList todoItems={todos || []}/>
    </MainLayout>
  );
};

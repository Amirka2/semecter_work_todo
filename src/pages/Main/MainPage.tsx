import React from 'react';
import {useQuery} from "@tanstack/react-query";

import {MainLayout} from "components";
import {TodoList} from "components";

import { getTodos } from "helpers";

import {ITodoItem} from "interfaces";

export const MainPage = () => {
  const { data : todos, isLoading} = useQuery<ITodoItem[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  }) || [];

  if (isLoading) {
    return <p>loading</p>
  }

  return (
    <MainLayout>
      <TodoList todoItems={todos || []}/>
    </MainLayout>
  );
};

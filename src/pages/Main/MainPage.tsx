import React from 'react';

import {MainLayout} from "components/Layout";
import {TodoList} from "components/TodoList";

import {TODO_ITEMS_MOCK} from "mock";

export const MainPage = () => {
  return (
    <MainLayout>
      <TodoList todoItems={TODO_ITEMS_MOCK}/>
    </MainLayout>
  );
};

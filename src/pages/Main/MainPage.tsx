import React from 'react';

import {MainLayout} from "components";

import {FilteredTodoItems} from "components/FilteredTodoItems";

export const MainPage = () => {
  return (
    <MainLayout>
      <FilteredTodoItems/>
    </MainLayout>
  );
};

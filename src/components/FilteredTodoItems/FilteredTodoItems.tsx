import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";

import {Multiplicator, Search, BaseTodoList} from "components";
import {ITodoItem} from "interfaces";

import {getTodos} from "helpers";

import * as Styles from './styles';

export const FilteredTodoItems = () => {
  const { data: allTodos, isLoading} = useQuery<ITodoItem[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const [searchQuery, setSearchQuery] = useState('');

  return isLoading ? (
    <p>loading</p>
    ) : (
    <Styles.Wrapper>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Multiplicator />
      <BaseTodoList
        todoItems={allTodos?.filter(item => item.text.includes(searchQuery)) || []}
        // FIXME засунуть в useCallback
      />
    </Styles.Wrapper>
    )
};

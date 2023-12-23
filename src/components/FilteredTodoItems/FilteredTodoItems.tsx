import React, {useMemo, useState} from 'react';
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

  const filteredItems = useMemo(() => {
    return allTodos?.filter(item => item.text.includes(searchQuery)) || []
  }, [allTodos, isLoading, searchQuery]);

  const checkedFilteredItems = useMemo(() => {
    return filteredItems.filter(item => item.isChecked)
  }, [filteredItems])

  const uncheckedFilteredItems = useMemo(() => {
    return filteredItems.filter(item => !item.isChecked)
  }, [filteredItems])

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
        title={'К выполнению'}
        titleColor={'lightPink'}
        todoItems={uncheckedFilteredItems}
      />
      <BaseTodoList
        title={'Выполнено'}
        titleColor={'lightGreen'}
        todoItems={checkedFilteredItems}
      />
    </Styles.Wrapper>
    )
};

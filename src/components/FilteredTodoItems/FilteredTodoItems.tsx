import React, {useMemo, useState} from 'react';
import {useQuery} from "@tanstack/react-query";

import {AddTodo, Search, BaseTodoList} from "components";
import {ITodoItem} from "interfaces";

import {QUERY_KEYS} from "constants/reactQuery";
import {getTodos} from "helpers";

import * as Styles from './styles';

export const FilteredTodoItems = () => {
  const { data: allTodos, isLoading, isSuccess } = useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos,
    initialData: [],
  });

  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    if (allTodos && isSuccess)
      return allTodos.filter(item => item.text.includes(searchQuery)
        || item?.description.includes(searchQuery));

    return [];
  }, [allTodos, isLoading, searchQuery]);

  const checkedFilteredItems = useMemo(
    () => filteredItems?.filter(item => item.isChecked),
    [filteredItems]);

  const uncheckedFilteredItems = useMemo(
    () => filteredItems?.filter(item => !item.isChecked),
    [filteredItems]);

  return isLoading ? (
    <p>loading</p>
    ) : (
    <Styles.Wrapper>
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <AddTodo />
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

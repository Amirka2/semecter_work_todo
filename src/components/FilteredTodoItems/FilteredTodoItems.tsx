import React, {useState} from 'react';

import {Multiplicator, Search, BaseTodoList} from "components";
import {ITodoItem} from "interfaces";

import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deleteTodoItem, getTodos, toggleTodoItem} from "helpers";

import * as Styles from './styles';

export const FilteredTodoItems = () => {
  const queryClient = useQueryClient();
  const { data: allTodos, isLoading} = useQuery<ITodoItem[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

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
        handleDeleteItem={mutationDelete.mutate}
        handleToggleItem={mutationToggle.mutate}
      />
    </Styles.Wrapper>
    )
};

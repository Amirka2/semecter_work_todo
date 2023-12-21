import React, {FormEvent, useState} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {saveTodo} from "helpers/todoItems";

import * as Styles from './styles';


export const Multiplicator = () => {
  const [text, setText] = useState('');
  const queryClient = useQueryClient();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutation.mutate(text);
    setText('');
  }

  const mutation = useMutation({
    mutationFn: saveTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <Styles.Wrapper
      onSubmit={handleSubmit}
    >
      <Styles.Input
        type='text'
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <Styles.AddButton
        type='submit'
      >
        +
      </Styles.AddButton>
    </Styles.Wrapper>
  );
};

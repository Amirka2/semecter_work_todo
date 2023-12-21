import React, {FormEvent, useState} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {Input} from "components";
import {saveTodo} from "helpers";

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
      <Input
        name='new_todo_text'
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

import React, {FormEvent, useState} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {Input} from "components";
import {saveTodo} from "helpers";

import * as Styles from './styles';


export const Multiplicator = () => {
  const queryClient = useQueryClient();
  const [text, setText] = useState('');

  const mutation = useMutation({
    mutationFn: saveTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutation.mutate(text);
    setText('');
  }


  return (
    <Styles.Wrapper
      onSubmit={handleSubmit}
    >
      <Input
        name='new_todo_text'
        placeholder='Введите текст для нового дела'
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

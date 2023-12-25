import React, {useState} from 'react';
import {useMutation, useQueryClient} from "@tanstack/react-query";

import {Input, Modal, Ok, Plus} from "components";
import {saveTodo} from "helpers";

import * as Styles from './styles';

export const Multiplicator = () => {
  const queryClient = useQueryClient();
  const [text, setText] = useState('');
  const [description, setDescription] = useState<string>('');
  const [isAddTodoOpen, setAddTodoOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: saveTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  const handleSubmit = () => {
    mutation.mutate({
      text,
      description: description === ''
        ? undefined
        : description
    });

    setAddTodoOpen(false);
    setText('');
    setDescription('');
  }


  return (
    <Styles.Wrapper>
      <Modal isOpen={isAddTodoOpen} onClose={() => setAddTodoOpen(false)}>
        <Styles.ContentWrapper onSubmit={handleSubmit}>
          <Input
            name='new_todo_text'
            placeholder='Введите текст для нового дела'
            type='text'
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <Input
            name='new_todo_description'
            placeholder='Введите описание нового дела'
            type='text'
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <Styles.AddButton
            type="submit"
          >
            <Ok />
          </Styles.AddButton>
        </Styles.ContentWrapper>
      </Modal>
      <Styles.AddButton
        type="button"
        onClick={() => setAddTodoOpen(true)}
      >
        <Plus />
      </Styles.AddButton>
    </Styles.Wrapper>
  );
};

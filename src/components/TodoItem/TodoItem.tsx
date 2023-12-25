import React, {PropsWithChildren, useState} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";

import {ITodoItem} from "interfaces";

import {Input, Modal, Ok} from "components";
import {deleteTodoItem, editTodoItem, toggleTodoItem} from "helpers";

import {MiniTodoItem} from "./MiniTodoItem";
import {ExtendedTodoItem} from "./ExtendedTodoItem";

import * as Styles from './styles';

export const TodoItem = ({
  children,
  isChecked,
  id,
  text,
  description
}: PropsWithChildren<ITodoItem>) => {
  const queryClient = useQueryClient();

  const [editedText, setEditedText] = useState(text);
  const [editedDescription, setEditedDescription] = useState<string | undefined>(description);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isExtended, setIsExtended] = useState(false);

  const handleClickTodo = () => {
    setEditModalOpen(true);
  }

  const handleSubmitEdit = () => {
    mutationEdit.mutate({
      id,
      editedText,
      editedDescription
    });

    setEditModalOpen(false);
  }

  const handleSubmitDelete = () => {
    mutationDelete.mutate(id);

    setDeleteModalOpen(false);
  }

  const handleDeleteTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setDeleteModalOpen(true)
  }

  const handleCheckboxToggle = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();

    mutationToggle.mutate(id);
  }

  const handleExtendClick = () => {
    setIsExtended(prev => !prev);
  }

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

  const mutationEdit = useMutation({
    mutationFn: editTodoItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <>
      {isExtended ? (
        <ExtendedTodoItem
          handleClickTodo={handleClickTodo}
          handleCheckboxToggle={handleCheckboxToggle}
          handleDeleteTodo={handleDeleteTodo}
          handleExtendClick={handleExtendClick}
          { ...{
            id,
            text,
            isChecked,
            description
          }}
        />
      ) : (
        <MiniTodoItem
          handleClickTodo={handleClickTodo}
          handleCheckboxToggle={handleCheckboxToggle}
          handleDeleteTodo={handleDeleteTodo}
          isExtendable={!!description}
          handleExtendClick={handleExtendClick}
          { ...{
            id,
            isChecked
          }}
        >
          {children}
        </MiniTodoItem>
      )}

      {isEditModalOpen ? (
        <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
          <Styles.ModalContentWrapper>
            <Input
              value={editedText}
              onChange={(e) => setEditedText(e.currentTarget.value)}
            />
            <Styles.Description
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.currentTarget.value)}
            />
            <Styles.OkWrapper>
              <Ok
                onClick={handleSubmitEdit}
              />
            </Styles.OkWrapper>
          </Styles.ModalContentWrapper>
        </Modal>
      ) : null}

      {isDeleteModalOpen ? (
        <Modal isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
          <Styles.ModalContentWrapper>
            <Styles.TextWrapper>
              <p>Уверены, что хотите удалить?</p>
            </Styles.TextWrapper>
            <Ok onClick={handleSubmitDelete}/>
          </Styles.ModalContentWrapper>
        </Modal>
      ) : null}
    </>
  );
};

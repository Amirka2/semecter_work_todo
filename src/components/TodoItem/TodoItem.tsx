import React, {PropsWithChildren, useCallback, useMemo, useState} from 'react';
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

  const [isExtended, setIsExtended] = useState(false);

  const [editedText, setEditedText] = useState(text);
  const [editedDescription, setEditedDescription] = useState<string | undefined>(description);

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleTodoEdit = () => {
    setEditModalOpen(true);
  }

  const handleSubmitEdit = useCallback(() => {
    mutationEdit.mutate({
      id,
      editedText,
      editedDescription
    });

    setEditModalOpen(false);
  }, [id, editedText, editedDescription, isEditModalOpen]);

  const handleDeleteTodo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setDeleteModalOpen(true)
  }, [isDeleteModalOpen]);

  const handleSubmitDelete = () => {
    mutationDelete.mutate(id);

    setDeleteModalOpen(false);
  }

  const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();

    mutationToggle.mutate(id);
  }

  const handleExtendClick = () => {
    setIsExtended(prev => !prev);
  }

  const todoProps = useMemo(() => {
    return {
      handleClickTodo: handleTodoEdit,
      handleCheckboxToggle,
      handleDeleteTodo,
      handleExtendClick,
      ...{
        id,
        text,
        isChecked,
        description
      }
    }
  }, [isChecked, text, description])

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
        <ExtendedTodoItem { ...todoProps } />
      ) : (
        <MiniTodoItem { ...todoProps } >
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
            <Styles.CheckboxWrapper>
              Выполнено:
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxToggle}
              />
            </Styles.CheckboxWrapper>
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

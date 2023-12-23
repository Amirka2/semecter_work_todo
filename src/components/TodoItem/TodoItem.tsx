import React, {PropsWithChildren, useState} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";

import {ITodoItem} from "interfaces";

import {Close, Input, Modal, Ok} from "components";
import {deleteTodoItem, editTodoItem, toggleTodoItem} from "helpers";

import * as Styles from './styles';


export const TodoItem = ({
  children,
  isChecked,
  id,
  text
}: PropsWithChildren<ITodoItem>) => {
  const queryClient = useQueryClient();

  const [editedText, setEditedText] = useState(text);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleTodoClick = () => {
    setEditModalOpen(true);
  }

  const handleSubmitEdit = () => {
    mutationEdit.mutate({
      id,
      editedText
    });

    setEditModalOpen(false);
  }

  const handleSubmitDelete = () => {
    mutationDelete.mutate(id);

    setDeleteModalOpen(false);
  }

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setDeleteModalOpen(true)
  }

  const handleToggle = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();

    mutationToggle.mutate(id);
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
      <Styles.Wrapper
        onClick={handleTodoClick}
      >
        <Styles.Text>
          {children}
        </Styles.Text>
        <Styles.ButtonsWrapper>
          <Styles.CheckBox
            name={`checkbox_${id}`}
            type={"checkbox"}
            defaultChecked={isChecked}
            onClick={handleToggle}
          />
          <Styles.Delete
            onClick={(e) => handleDelete(e)}
          >
            <Close width={'16px'} height={'16px'}/>
          </Styles.Delete>
        </Styles.ButtonsWrapper>
      </Styles.Wrapper>

      {isEditModalOpen ? (
        <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
          <Styles.ContentWrapper>
            <Input
              value={editedText}
              onChange={(e) => setEditedText(e.currentTarget.value)}
            />
            <Styles.OkWrapper>
              <Ok
                onClick={handleSubmitEdit}
              />
            </Styles.OkWrapper>
          </Styles.ContentWrapper>
        </Modal>
      ) : null}

      {isDeleteModalOpen ? (
        <Modal isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
          <p>Уверены, что хотите удалить?</p>
          <Ok onClick={handleSubmitDelete}/>
        </Modal>
      ) : null}
    </>
  );
};

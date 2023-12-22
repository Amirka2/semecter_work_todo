import React, {PropsWithChildren, useState} from 'react';
import {useQueryClient} from "@tanstack/react-query";
import {useMutation} from "@tanstack/react-query";

import {ITodoItem} from "interfaces";

import {Close, Input, Modal, Ok} from "components";
import {editTodoItem} from "helpers";

import * as Styles from './styles';

interface TodoItemProps {
  handleDelete: () => void;
  toggleIsChecked: () => void;
}

export const TodoItem = ({
  children,
  isChecked,
  toggleIsChecked,
  handleDelete,
  id,
  text
}: PropsWithChildren<ITodoItem & TodoItemProps>) => {
  const queryClient = useQueryClient();

  const [editedText, setEditedText] = useState(text);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

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

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    handleDelete();
  }

  const handleToggle = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();

    toggleIsChecked();
  }

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
            onClick={handleDeleteClick}
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
                onClick={() => handleSubmitEdit()}
              />
            </Styles.OkWrapper>
          </Styles.ContentWrapper>
        </Modal>
      ) : null}
    </>
  );
};

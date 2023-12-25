import React, {PropsWithChildren} from 'react';

import {ITodoItem, TodoItemProps} from "interfaces";

import * as Styles from './styles';

export const ExtendedTodoItem = ({
  id,
  text,
  isChecked,
  description,
  handleClickTodo,
  handleCheckboxToggle,
  handleDeleteTodo,
  handleExtendClick
}: PropsWithChildren<TodoItemProps & ITodoItem>) => {
  return (
    <Styles.Wrapper>
      <Styles.Text>
        Номер задачи: {id + 1}
      </Styles.Text>
      <Styles.Text>
        Название задачи: {text}
      </Styles.Text>
      <Styles.Text>
        Описание задачи: {description}
      </Styles.Text>
      <Styles.Text>
        Выполнено ли:
        <input type="checkbox" checked={isChecked} />
      </Styles.Text>
    </Styles.Wrapper>
  );
};

import React, {PropsWithChildren} from 'react';

import {ITodoItem, TodoItemProps} from "interfaces";
import {Close} from "components/icons";

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
      <Styles.Header>
        <Styles.Text>
          №{id + 1}.
        </Styles.Text>
        <Styles.Text>
          {text}
        </Styles.Text>
        <Styles.ButtonsWrapper>
          <button
            onClick={handleClickTodo}
          >
            Edit
          </button>
          <button
            onClick={handleDeleteTodo}
          >
            <Close />
          </button>
        </Styles.ButtonsWrapper>
      </Styles.Header>
      <Styles.DescriptionWrapper>
        {description}
      </Styles.DescriptionWrapper>
      <Styles.Footer>
        <Styles.Text>
          {isChecked ? 'Выполнено' : 'Не выполнено'}
        </Styles.Text>
        <button onClick={handleExtendClick}>
          Свернуть
        </button>
      </Styles.Footer>
    </Styles.Wrapper>
  );
};

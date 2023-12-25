import React, {PropsWithChildren} from 'react';

import {ITodoItem, TodoItemProps} from "interfaces";
import {Close, ArrowUp, Edit} from "components/icons";

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
          <Styles.Button
            onClick={handleClickTodo}
          >
            <Edit />
          </Styles.Button>
          <Styles.Button
            onClick={handleDeleteTodo}
          >
            <Close />
          </Styles.Button>
        </Styles.ButtonsWrapper>
      </Styles.Header>
      <Styles.DescriptionWrapper>
        {description}
      </Styles.DescriptionWrapper>
      <Styles.Footer>
        <Styles.Text>
          {isChecked ? 'Выполнено' : 'Не выполнено'}
        </Styles.Text>
        <Styles.Button onClick={handleExtendClick}>
          <ArrowUp />
        </Styles.Button>
      </Styles.Footer>
    </Styles.Wrapper>
  );
};

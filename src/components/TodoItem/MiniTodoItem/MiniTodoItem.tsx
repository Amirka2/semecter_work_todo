import React, {PropsWithChildren} from 'react';

import {Close} from "components/icons";
import {ITodoItem, TodoItemProps} from "interfaces";

import * as Styles from "./styles";

export const MiniTodoItem = ({
  handleClickTodo,
  handleCheckboxToggle,
  handleDeleteTodo,
  isExtendable = false,
  handleExtendClick,
  id,
  isChecked,
  children
}: PropsWithChildren<TodoItemProps & Omit<ITodoItem, 'description' | 'text'>>) => {
  return (
    <Styles.Wrapper>
      <Styles.Text>
        <Styles.CheckBox
          name={`checkbox_${id}`}
          type={"checkbox"}
          defaultChecked={isChecked}
          onClick={handleCheckboxToggle}
        />

        {children}

      </Styles.Text>
      <Styles.ButtonsWrapper>
        {isExtendable ? (
          <button onClick={handleExtendClick}>
            Раскрыть
          </button>
        ) : null}
        <button onClick={handleClickTodo}>
          Edit
        </button>
        <Styles.Delete
          onClick={(e) => handleDeleteTodo(e)}
        >
          <Close width={'16px'} height={'16px'}/>
        </Styles.Delete>
      </Styles.ButtonsWrapper>
    </Styles.Wrapper>
  );
};

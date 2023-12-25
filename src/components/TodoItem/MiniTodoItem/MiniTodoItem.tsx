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
    <Styles.Wrapper
      onClick={handleClickTodo}
    >
      <Styles.Text>
        {isExtendable ? (
          <button onClick={handleExtendClick}>
            Раскрыть
          </button>
        ) : null}

        {children}

      </Styles.Text>
      <Styles.ButtonsWrapper>
        <Styles.CheckBox
          name={`checkbox_${id}`}
          type={"checkbox"}
          defaultChecked={isChecked}
          onClick={handleCheckboxToggle}
        />
        <Styles.Delete
          onClick={(e) => handleDeleteTodo(e)}
        >
          <Close width={'16px'} height={'16px'}/>
        </Styles.Delete>
      </Styles.ButtonsWrapper>
    </Styles.Wrapper>
  );
};

import React, {PropsWithChildren} from 'react';

import {Close, ArrowDown, Edit} from "components/icons";
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
          onChange={handleCheckboxToggle}
        />

        {children}

      </Styles.Text>
      <Styles.ButtonsWrapper>
        {isExtendable ? (
          <Styles.Button onClick={handleExtendClick}>
            <ArrowDown />
          </Styles.Button>
        ) : null}
        <Styles.Button onClick={handleClickTodo}>
          <Edit />
        </Styles.Button>
        <Styles.Button
          onClick={(e) => handleDeleteTodo(e)}
        >
          <Close width={'16px'} height={'16px'}/>
        </Styles.Button>
      </Styles.ButtonsWrapper>
    </Styles.Wrapper>
  );
};

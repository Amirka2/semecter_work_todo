import React from 'react';

import {ITodoItem} from 'interfaces';
import {TodoItem} from "components";

import * as Styles from './styles';

interface TodoListProps {
  title: string;
  titleColor?: string;
  todoItems: ITodoItem[];
}

export const BaseTodoList = ({
  title,
  titleColor = 'lightBlue',
  todoItems,
}: TodoListProps) => {
  return (
    <Styles.Wrapper>
      <Styles.LabelWrapper color={titleColor}>
        <Styles.Caption>
          {title}
        </Styles.Caption>
      </Styles.LabelWrapper>
      {todoItems.length > 0 ? (
        <Styles.ItemsList>
          {todoItems.map(item => (
            <Styles.ItemsListItem>
              <TodoItem
                {...item}
                key={item.id}
              >
                {item.text}
              </TodoItem>
            </Styles.ItemsListItem>
          ))
          }
        </Styles.ItemsList>
      ) : (
        <div>
          Cписок пуст 😕
        </div>
      )}
    </Styles.Wrapper>
  );
};

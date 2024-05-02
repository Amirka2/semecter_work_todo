import React from "react";

export interface ICreateTodoItem {
  text: string;
  description?: string;
}

export interface ITodoItem {
  id: number;
  text: string;
  isChecked: boolean;
  description?: string;
}

export interface TodoItemProps {
  handleClickTodo: () => void;
  handleCheckboxToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isExtendable?: boolean;
  handleExtendClick?: () => void;
}

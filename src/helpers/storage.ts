import {ITodoItem} from "interfaces";
import {STORAGE_KEYS} from "constants/todoItems";
// FIXME Почему импорт из директории контант не работает

export const setTodosToStorage = (todos: ITodoItem[]) => {
  localStorage.setItem(STORAGE_KEYS.TODO_ITEMS, JSON.stringify(todos));
}

export const getTodosFromStorage: () => ITodoItem[] = () => {
  let result: ITodoItem[] = [];
  const stringedTodos = localStorage.getItem(STORAGE_KEYS.TODO_ITEMS);

  if (stringedTodos !== null) {
    result = JSON.parse(stringedTodos);
  }

  return result;
}

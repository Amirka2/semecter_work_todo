import {deleteTodo, editTodo, getTodosFromApi, saveTodo as saveTodoToApi, toggleTodo} from "helpers/api";


export const getTodos = getTodosFromApi;

export const saveTodo = saveTodoToApi;

export const toggleTodoItem = toggleTodo;

export const deleteTodoItem = deleteTodo;

export const editTodoItem = editTodo;

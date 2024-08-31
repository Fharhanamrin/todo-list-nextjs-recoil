// pages/index.js
'use client';
import React, { useState } from 'react'
import { useSetRecoilState,useRecoilValue } from 'recoil'
import { todoListState } from "../recoil/atoms"
import TodoItemCreator from "../components/TodoItemCreator.js";
import TodoItem from "../components/TodoItem.js";

export default function Home() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

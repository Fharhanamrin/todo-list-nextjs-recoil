// pages/index.js
'use client';
import React, { useState,useEffect } from 'react'
import { useSetRecoilState,useRecoilValue } from 'recoil'
import { todoListState } from "../recoil/atoms"
import TodoItemCreator from "../components/TodoItemCreator.js";
import TodoItem from "../components/TodoItem.js";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const todoList = useRecoilValue(todoListState);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Sementara komponen belum ter-mount, tampilkan loading atau tidak ada render
    return null;
  }

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem:any) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

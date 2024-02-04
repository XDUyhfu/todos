import { useState } from "react";
import { TodoItem } from "../mock/data.ts";

export const useTest = () => {
  const [state, setState] = useState(0);
  return { state, setState };
};

export const useTodoList = () => {
  const [list, setList] = useState<TodoItem[]>([]);
  return {
    list,
    addUndoItem: (item: TodoItem) => setList([...list, item]),
    deleteItem: (item: TodoItem) =>
      setList(list.filter((it) => it.key !== item.key)),
  };
};

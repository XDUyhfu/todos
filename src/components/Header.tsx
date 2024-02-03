import { useState } from "react";
import { GenerateUndoItem, TodoItem } from "../mock/data.ts";

export const Header = ({
  addUndoItem,
}: {
  addUndoItem: (item: TodoItem) => void;
}) => {
  const [value, setValue] = useState("");
  return (
    <div role="header">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (!value) return;
            addUndoItem(GenerateUndoItem());
            setValue("");
          }
        }}
      />
    </div>
  );
};

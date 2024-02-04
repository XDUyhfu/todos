import { List } from "./components/List.tsx";
import { Header } from "./components/Header.tsx";
import { useTodoList } from "./hook";
import { Space } from "antd";

function App() {
  const { list, addUndoItem, deleteItem } = useTodoList();
  return (
    <Space direction="vertical">
      <Header addUndoItem={addUndoItem} />
      <List data={list} deleteItem={deleteItem}></List>
    </Space>
  );
}

export default App;

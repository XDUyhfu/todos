import { List } from "./components/List.tsx";
import { Header } from "./components/Header.tsx";
import { useTodoList } from "./hook";
import { Space } from "antd";

function App() {
  const { list, addUndoItem } = useTodoList();
  return (
    <Space direction="vertical">
      <Header addUndoItem={addUndoItem} />
      <List data={list}></List>
    </Space>
  );
}

export default App;

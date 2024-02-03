import { List } from "./components/List.tsx";
import { data } from "./mock/data.ts";

function App() {
  return (
    <>
      <List data={data}></List>
    </>
  );
}

export default App;

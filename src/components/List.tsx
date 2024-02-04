import { TodoItem } from "../mock/data.ts";

export const List = ({
  data,
  deleteItem,
}: {
  data: TodoItem[];
  deleteItem: (item: TodoItem) => void;
}) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.key}
            role="list-item"
            style={{ border: "1px solid #ccc", marginBottom: 10 }}
          >
            标题:
            <span>{item.title}</span>
            <br />
            内容: <span>{item.content}</span>
            <br />
            创建时间: <span>{item.createTime}</span>
            <br />
            状态:
            <span>{item.status}</span>
            <br />
            <button onClick={() => deleteItem(item)}>删除</button>
          </div>
        );
      })}
    </div>
  );
};

import { TodoItem } from "../mock/data.ts";

export const List = ({ data }: { data: TodoItem[] }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
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
          </div>
        );
      })}
    </div>
  );
};

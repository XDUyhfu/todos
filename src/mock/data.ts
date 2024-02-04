import dayjs from "dayjs";

export enum Status {
  DONE = "已完成",
  UNDONE = "未完成",
}

export interface TodoItem {
  title: string;
  content: string;
  createTime: string;
  status: Status;
  key: string;
}

export const GenerateUndoItem = () => ({
  title: "这是一个测试的todo",
  content: "我今天要完成这件事情",
  createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  status: Status.UNDONE,
  key: Math.random().toString(),
});

export const data: TodoItem[] = [
  {
    title: "这是一个测试的todo1",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.DONE,
    key: "1",
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.DONE,
    key: "2",
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.UNDONE,
    key: "3",
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.UNDONE,
    key: "4",
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.DONE,
    key: "5",
  },
];

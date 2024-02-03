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
}

export const GenerateUndoItem = () => ({
  title: "这是一个测试的todo",
  content: "我今天要完成这件事情",
  createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  status: Status.UNDONE,
});

export const data: TodoItem[] = [
  {
    title: "这是一个测试的todo1",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.DONE,
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.DONE,
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.UNDONE,
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.UNDONE,
  },
  {
    title: "这是一个测试的todo",
    content: "我今天要完成这件事情",
    createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    status: Status.DONE,
  },
];

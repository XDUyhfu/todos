import { beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "../components/List.tsx";
import { data, Status } from "../mock/data.ts";

describe("List组件测试", () => {
  beforeEach(() => {
    render(<List data={data} deleteItem={vi.fn()} />);
  });

  it("渲染数量", () => {
    const elements = screen.getAllByRole("list-item");
    expect(elements.length).toBe(data.length);
  });

  it("已完成数量", () => {
    const elements = screen.getAllByText(Status.DONE);
    expect(elements.length).toBe(
      data.filter((item) => item.status === Status.DONE).length,
    );
  });

  it("未完成数量", () => {
    const elements = screen.getAllByText(Status.UNDONE);
    expect(elements.length).toBe(
      data.filter((item) => item.status === Status.UNDONE).length,
    );
  });

  it("点击删除按钮", () => {
    cleanup();
    const deleteItem = vi.fn();
    render(<List data={data} deleteItem={deleteItem} />);
    const deleteButtons = screen.getAllByRole("button");
    fireEvent.click(deleteButtons[0]);
    expect(deleteItem).toHaveBeenCalledTimes(1);
    expect(deleteItem).toHaveBeenCalledWith(data[0]);
  });

  // it("快照测试", () => {
  //   const elements = screen.getAllByRole("list-item");
  //   expect(elements).toMatchSnapshot();
  // });
});

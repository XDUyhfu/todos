import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { List } from "../components/List.tsx";
import { data, Status } from "../mock/data.ts";

describe("List组件测试", () => {
  beforeEach(() => {
    render(<List data={data} />);
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

  it("快照测试", () => {
    const elements = screen.getAllByRole("list-item");
    expect(elements).toMatchSnapshot();
  });
});

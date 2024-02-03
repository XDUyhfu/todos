import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useTest, useTodoList } from "../hook";
import { GenerateUndoItem } from "../mock/data.ts";

describe("useTest测试", () => {
  it("useTest", () => {
    const { result } = renderHook(() => useTest());
    act(() => {
      result.current.setState(2);
    });
    expect(result.current.state).toBe(2);
  });
});

describe("todo list测试", () => {
  it("添加todo", () => {
    const { result } = renderHook(useTodoList);
    act(() => {
      result.current.addUndoItem(GenerateUndoItem());
    });
    expect(result.current.list.length).toBe(1);
  });
});

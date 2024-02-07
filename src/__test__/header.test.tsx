import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Header } from "../components/Header.tsx";
import "@testing-library/jest-dom";

const testText = "这是一个测试的TODO文案";

describe("header组件测试", () => {
  beforeEach(() => {
    render(<Header addUndoItem={vi.fn()} />);
  });

  it("header组件中包含一个input", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("input的值为空字符串", () => {
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
  });

  it("input的受控模式", () => {
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: testText } });
    expect(input).toHaveValue(testText);
  });

  it("input的回车触发事件", () => {
    cleanup();
    const addUndoItem = vi.fn();
    render(<Header addUndoItem={addUndoItem} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: testText } });
    fireEvent.keyDown(input, { keyCode: 13 });
    expect(addUndoItem).toBeCalledTimes(1);
  });

  it("input的回车清空输入框", () => {
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: testText } });
    fireEvent.keyDown(input, { keyCode: 13 });
    expect(input).toHaveValue("");
  });

  it("input的回车清空输入框", () => {
    cleanup();
    const addUndoItem = vi.fn();
    render(<Header addUndoItem={addUndoItem} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { keyCode: 13 });
    expect(addUndoItem).toBeCalledTimes(0);
  });
});

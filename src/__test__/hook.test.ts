import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useTest } from "../hook";

describe("useTest测试", () => {
  it("useTest", () => {
    const { result } = renderHook(() => useTest());
    act(() => {
      result.current.setState(2);
    });
    expect(result.current.state).toBe(2);
  });
});

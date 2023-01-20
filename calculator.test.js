import { add, subtract, divide, multiply } from "./calculator";

test("adds", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract", () => {
  expect(subtract(8, 1)).toBe(7);
});

test("divides", () => {
  expect(divide(14, 2)).toBe(7);
});

test("multiply", () => {
  expect(multiply(5, 10)).toBe(50);
});

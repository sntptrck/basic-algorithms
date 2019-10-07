import { selectionSort } from "./index";

test("selectionSort sorts correctly 1", () => {
  expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test("selectionSort sorts correctly 2", () => {
  expect(selectionSort([5, 10, 4, 6, 7, 3, 9, 8, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("selectionSort sorts correctly 3", () => {
  expect(selectionSort([5, -10, 4, 6, -7, 3, 9, 8, 2, -1])).toEqual([-10, -7, -1, 2, 3, 4, 5, 6, 8, 9]);
});

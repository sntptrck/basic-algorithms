import { mergeSort } from "./index";

test("mergeSort sorts correctly 1", () => {
  expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test("mergeSort sorts correctly 2", () => {
  expect(mergeSort([5, 10, 4, 6, 7, 3, 9, 8, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("mergeSort sorts correctly 3", () => {
  expect(mergeSort([5, -10, 4, 6, -7, 3, 9, 8, 2, -1])).toEqual([-10, -7, -1, 2, 3, 4, 5, 6, 8, 9]);
});
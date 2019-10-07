import { quickSort } from "./index";

test("quickSearch sorts correctly 1", () => {
  expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test("quickSearch sorts correctly 2", () => {
  expect(quickSort([5, 10, 4, 6, 7, 3, 9, 8, 2, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("quickSearch sorts correctly 3", () => {
  expect(quickSort([5, -10, 4, 6, -7, 3, 9, 8, 2, -1])).toEqual([-10, -7, -1, 2, 3, 4, 5, 6, 8, 9]);
});

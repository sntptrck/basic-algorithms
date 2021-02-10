import { binarySearch, binarySearchRecursive } from "./index";

test("Binary search works correctly 1", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 5)).toEqual(2);
});

test("Binary search works correctly 2", () => {
  expect(binarySearch([1, 3, 5, 7, 8, 9], 1)).toEqual(0);
});

test("Binary search works correctly 3", () => {
  expect(binarySearch([1, 3, 5, 7, 8, 9], 9)).toEqual(5);
});

test("Binary search works correctly 4", () => {
  expect(
    binarySearch([1, 3, 5, 7, 8, 9], 5)
  ).toEqual(2);
});

test("Recursive Binary search works correctly 1", () => {
  expect(
    binarySearchRecursive([1, 3, 5, 7, 9], 5)
  ).toEqual(2);
});

test("Recursive Binary search works correctly 3", () => {
  expect(
    binarySearchRecursive([1, 3, 5, 7, 8, 9], 1)
  ).toEqual(0);
});

test("Recursive Binary search works correctly 2", () => {
  expect(
    binarySearchRecursive([1, 3, 5, 7, 8, 9], 9)
  ).toEqual(5);
});

test("Recursive Binary search works correctly 4", () => {
  expect(
    binarySearchRecursive([1, 3, 5, 7, 8, 9], 5)
  ).toEqual(2);
});
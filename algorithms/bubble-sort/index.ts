import { swap } from "../helpers";
/** Bubble sort, sometimes referred to as sinking sort,
 * is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent pairs and swaps them if they are in the wrong order.
 */

export const bubbleSort = (array: number[]): number[] => {
  let swapped: boolean = false;
  for (let i: number = 0; i <= array.length - 2; i++) {
    swapped = false;
    for (let j: number = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
        swapped = true;
      }
    }
    if (!swapped) { break; }
  }
  return array;
};


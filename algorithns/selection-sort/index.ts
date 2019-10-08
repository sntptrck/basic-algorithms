import { getMinimal, swap } from "../helpers";

export const selectionSort = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        const minimalNumberIndex = getMinimal(array, i);
        swap(array, i, minimalNumberIndex);
    }
    return array;
};

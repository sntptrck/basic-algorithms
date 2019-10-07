import { getMinimal, swap } from "../helpers";

export const selectionSort = (array: number[]) => {
    for (let i = 0; i < array.length; i++) {
        const min = getMinimal(array, i);
        swap(array, i, min);
    }
    return array;
};

export const swap = (items: number[] = [], firstIndex: number, secondIndex: number) => {
    const temp: number = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

export const getMinimal = (array: number[], startIndex: number = 0) => {
    let min = startIndex;
    for (let j = startIndex + 1; j < array.length; j++) {
        if (array[min] > array[j]) {
            min = j;
        }
    }
    return min;
}
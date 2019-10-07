export const binarySearch = (list: number[], item: number): number => {
    let minIndex: number = 0;
    let maxIndex: number = list.length - 1;
    while (minIndex <= maxIndex) {
        const middleIndex: number = Math.floor((minIndex + maxIndex) / 2);
        const guessItem = list[middleIndex];
        if (guessItem === item) {
            return middleIndex;
        }
        if (guessItem > item) {
            maxIndex = middleIndex - 1;
        } else {
            minIndex = middleIndex + 1;
        }
    }
    return -1;
}

// tslint:disable-next-line: max-line-length
export const binarySearchRecursive = (list: number[], item: number, minIndex: number = 0, maxIndex: number = list.length - 1): number => {
    if (minIndex > maxIndex) { return -1 };
    const middleIndex: number = Math.floor((minIndex + maxIndex) / 2);
    if (list[middleIndex] === item) {
        return middleIndex;
    }
    if (list[middleIndex] > item) {
        return binarySearchRecursive(list, item, minIndex, middleIndex - 1);
    } else {
        return binarySearchRecursive(list, item, middleIndex + 1, maxIndex);
    }
};

// const arr: number[] = [1, 3, 5, 7, 9];

// console.log(binarySearch(arr, 5), binarySearchRecursive(arr, undefined, undefined, 5));

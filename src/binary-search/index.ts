const binarySearch = (list: number[], item: number) => {
    let minIndex: number = 0;
    let maxIndex: number = list.length - 1;
    while (minIndex <= maxIndex) {
        const midddleIndex = minIndex + maxIndex;
        const guessItem = list[midddleIndex];
        if (guessItem === item) {
            return midddleIndex;
        }
        if (guessItem > item) {
            maxIndex = midddleIndex - 1;
        } else {
            minIndex = midddleIndex + 1;
        }
    }
    return null;
}

const arr: number[] = [1, 3, 5, 7, 9];

console.log(binarySearch(arr, 5));

export const quickSort = (arr: number[] = []): number[] => {
    if (arr.length < 2) {
        return arr;
    }
    const [pivotNumber, ...restArray] = arr;
    const lessNumbersArr = restArray.filter((num) => num <= pivotNumber);
    const greaterNumbersArr = restArray.filter((num) => num > pivotNumber);
    return [...quickSort(lessNumbersArr), pivotNumber, ...quickSort(greaterNumbersArr)];
};

// console.log(quickSort([2, 6, 8, 17, 3, 7, 12, 42, 5, 12, 22]));

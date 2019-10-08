export const quickSort = (arr: number[] = []): number[] => {
    if (arr.length < 2) {
        return arr;
    }
    const [pivotNumber, ...restArray] = arr;
    const lessNumbersArr = restArray.filter((num) => num <= pivotNumber);
    const greaterNumbersArr = restArray.filter((num) => num > pivotNumber);
    return [...quickSort(lessNumbersArr), pivotNumber, ...quickSort(greaterNumbersArr)];
};

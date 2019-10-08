const merge = (left: number[], right: number[]): number[] => {
  const resultArray:number[] = [];
  let leftIndex:number = 0;
  let rightIndex:number = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

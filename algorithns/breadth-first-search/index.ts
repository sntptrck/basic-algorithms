export const BFS = (graph: { [key: string]: string[] }, startNode: string, endNote: string) => {
  let searchQueue = [...graph[startNode]];
  const searched: string[] = [];
  while (searchQueue.length) {
    const searchedNode = searchQueue.shift()!;
    if (!searched.includes(searchedNode)) {
      if (searchedNode === endNote) {
        return true;
      } else {
        searchQueue = [...searchQueue, ...graph[searchedNode]];
        searched.push(searchedNode);
      }
    }
  }
  return false;
};

import { BFS } from './index';

const graphMock = {
  you: ['alice', 'bob', 'claire'],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ['thom','jonny'],
  anuj: [],
  peggy: [],
  thom: [],
  alex: ['peggy'],
  jonny: []
}

test("BFS search works correctly correctly 1", () => {
  expect(BFS(graphMock, 'you', 'thom')).toEqual(true);
});

test("BFS search works correctly correctly 2", () => {
  expect(BFS(graphMock, 'you', 'alex')).toEqual(false);
});

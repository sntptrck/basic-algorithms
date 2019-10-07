module.exports = {
  transform: {
    "^.+\\.jsx?$": require.resolve("babel-jest"),
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["/build/", "/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true
};

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverage: true,
  coverageReporters: ["json", "text", "lcov", "clover"]
};
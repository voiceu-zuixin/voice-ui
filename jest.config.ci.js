// https://jestjs.io/docs/en/configuration.html
const base = require('./jest.config')
module.exports = Object.assign({}, base, {
  // 测试覆盖率
  collectCoverage: false,
  reporters: ["jest-junit"],
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
})
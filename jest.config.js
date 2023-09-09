const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  // transformIgnorePatterns: [
  //   "\"node_modules/(?!@toolz/allow)/\""
  // ],
  // testEnvironment: "jsdom",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
}

module.exports = createJestConfig(customJestConfig)

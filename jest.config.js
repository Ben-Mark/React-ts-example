const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
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
//
// const shit = {
//   "jest": {
//     "roots": [
//       "<rootDir>/src"
//     ],
//     "transform": {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//     "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//     "moduleFileExtensions": [
//       "ts",
//       "tsx",
//       "js",
//       "jsx",
//       "json",
//       "node"
//     ],
//     "setupFilesAfterEnv": [
//       "<rootDir>/src/setupTests.ts"
//     ],
//     "moduleNameMapper": {
//       "^@/(.*)$": "<rootDir>/src/$1"
//     }
//   }
// }

module.exports = createJestConfig(customJestConfig)

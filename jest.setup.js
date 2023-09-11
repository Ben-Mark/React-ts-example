import '@testing-library/jest-dom';
process.env.SYSTEM_UNDER_TEST = 'true'
import failOnConsole from 'jest-fail-on-console'

// fails a test if there is at least 1 warning
failOnConsole()

// or with options:
failOnConsole({ shouldFailOnWarn: false })

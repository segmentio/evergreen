import '@testing-library/jest-dom'

// eslint-disable-next-line no-undef
jest.mock('scheduler', () => require('scheduler/unstable_mock')) // Scheduler needs to be mocked for React 18.x

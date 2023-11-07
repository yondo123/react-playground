import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  projects: ['<rootDir>/jest.config.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@todolist/(.*)$': '<rootDir>/src/todolist/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1'
  }
};

export default config;

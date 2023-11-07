import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  projects: ['<rootDir>/jest.config.ts'],
  testEnvironment: 'jsdom'
};

export default config;

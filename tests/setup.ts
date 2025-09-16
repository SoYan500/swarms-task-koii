// Global test setup
import { beforeAll, afterAll } from 'vitest';

beforeAll(() => {
  // Global setup code
  console.log('Starting test suite...');
});

afterAll(() => {
  // Global teardown code
  console.log('Completed test suite.');
});
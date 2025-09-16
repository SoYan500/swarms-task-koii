// Global test setup file
import { beforeAll, afterAll } from 'vitest'

// Add any global test setup or teardown logic here
beforeAll(() => {
  // Global setup tasks
  console.log('Starting test suite...')
})

afterAll(() => {
  // Global cleanup tasks
  console.log('Test suite completed.')
})
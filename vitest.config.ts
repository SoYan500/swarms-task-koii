/// <reference types="vitest" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    include: ['**/tests/**/*.test.ts', '**/src/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: ['**/tests/**', '**/*.d.ts'],
      thresholds: {
        lines: 80,
        branches: 70,
        functions: 80,
        statements: 80
      }
    },
    setupFiles: ['./tests/setup.ts'],
    alias: {
      '@_koii/create-task-cli': './coordinator/middle-server/src/tests/mocks/koii.ts',
      '@_koii/web3.js': './coordinator/middle-server/src/tests/mocks/koii.ts'
    }
  }
})
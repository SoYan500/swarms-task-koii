# Node Tests Documentation

## Overview
This directory contains comprehensive test suites for the Node component, covering various aspects of the system including task processing, submissions, and auditing.

## Test Structure
```
tests/
├── config.ts           # Test configuration
├── debugger.ts         # Debugging utilities
├── main.test.ts        # Primary test suite
├── node-worker.test.ts # Node worker specific tests
└── integration.test.ts # Integration test suite
```

## Prerequisites
- Node.js (v16+ recommended)
- TypeScript
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Configure Environment
Create a `.env` file in the project root with the following variables:
```
# Add necessary environment variables
GITHUB_TOKEN=your_github_token
ANTHROPIC_API_KEY=your_anthropic_api_key
```

## Running Tests

### Run All Tests
```bash
npm test
# or
yarn test
```

### Run Specific Test Suites
```bash
# Run main test suite
npm run test:main

# Run node worker tests
npm run test:workers

# Run integration tests
npm run test:integration
```

### Test Configuration Options
Edit `tests/config.ts` to customize test parameters and environment settings.

## Test Coverage
```bash
npm run test:coverage
# Generates detailed coverage report
```

## Debugging
Use `tests/debugger.ts` for advanced debugging and test scenario generation.

## Best Practices
- Always run tests before committing changes
- Ensure 100% test coverage for critical paths
- Update tests when adding new features

## Troubleshooting
- Verify environment variables
- Check network connectivity
- Ensure all dependencies are installed
- Use verbose mode for detailed error messages

## Contributing
- Write clear, concise test cases
- Cover edge cases and error scenarios
- Maintain existing test structure
- Document any new test utilities
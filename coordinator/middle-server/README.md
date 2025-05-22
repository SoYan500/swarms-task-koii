# Coordinator Middle Server Test Configuration

## Overview
This document provides comprehensive guidance for testing the Coordinator Middle Server component.

## Testing Environment

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Docker (optional, for containerized testing)

### Test Dependencies
- Jest: Primary testing framework
- TypeScript: Type checking and compilation
- ESLint: Code quality and style enforcement

## Configuration Steps

### 1. Environment Setup
1. Copy `.env.example` to `.env`
2. Fill in all required environment variables
3. Install project dependencies:
   ```bash
   npm install
   ```

### 2. Running Tests
```bash
# Run all tests
npm test

# Run specific test suite
npm test -- path/to/specific/test

# Run tests with coverage
npm run test:coverage
```

## Test Types
- Unit Tests: Located in `src/tests/`
- Integration Tests: Validate component interactions
- Mock Tests: Simulated environment testing

## Configuration Files
- `jest.config.js`: Jest testing configuration
- `.env.test`: Test-specific environment variables
- `.eslintrc.json`: Linting rules
- `tsconfig.json`: TypeScript compiler configuration

## Troubleshooting
- Verify all environment variables are correctly set
- Check network connectivity
- Ensure correct Node.js and npm versions
- Review test logs for detailed error information

## Best Practices
- Keep tests isolated and independent
- Use meaningful test descriptions
- Cover edge cases and error scenarios
# Middle Server for Swarm Task Processing

## Overview
A middleware server for processing swarm tasks, managing job status, and storing results.

## Features
- Swarm job creation and management
- Status tracking and updates
- Result storage and retrieval
- MongoDB integration
- RESTful API endpoints
- Comprehensive test coverage

## Setup and Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- npm or yarn

### Installation
```bash
# Install dependencies
npm install
# or
yarn install
```

## Configuration

### Environment Variables
Create a `.env` file with the following configurations:
```
MONGODB_URI=mongodb://localhost:27017/middle-server
PORT=3000
ADMIN_KEY=your_secret_admin_key
```

## Testing

### Test Suite Overview
Our test suite covers multiple aspects of the middle server:
- Unit Tests
- Integration Tests
- API Endpoint Tests
- Error Handling Tests

### Running Tests

#### All Tests
```bash
npm test
# or
yarn test
```

#### Specific Test Types
```bash
# Unit Tests
npm run test:unit

# Integration Tests
npm run test:integration

# API Endpoint Tests
npm run test:api
```

### Test Coverage
```bash
npm run test:coverage
# Generates detailed coverage report
```

### Live Unit Tests
Located in `live_unit_tests/`, these scripts test against a running server instance:

```bash
# Start the server
npm run dev

# In another terminal, run live tests
npx ts-node live_unit_tests/controllers/createToDoTest.ts
npx ts-node live_unit_tests/controllers/createFetchAddPRTest.ts
```

### Test Configuration
- Jest is used as the primary test runner
- Configuration in `jest.config.js`
- TypeScript support via `ts-jest`

## Best Practices
- Always run tests before committing
- Aim for 90%+ test coverage
- Test edge cases and error scenarios
- Keep tests independent and idempotent

## Troubleshooting
- Verify MongoDB connection
- Check environment variables
- Ensure all dependencies are installed
- Use verbose mode for detailed error messages

## Development Commands
- `npm run dev`: Start development server
- `npm run build`: Compile TypeScript
- `npm run test`: Run test suite
- `npm run lint`: Check code quality

## Contributing
- Follow existing test structure
- Write clear, concise test cases
- Document new test utilities
- Maintain code coverage
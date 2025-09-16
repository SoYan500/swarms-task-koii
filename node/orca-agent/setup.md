# Orca Agent Setup and Testing Guide

## Local Development Setup

### Prerequisites
- Python 3.8+
- pip
- Optional: virtualenv or conda

### Environment Setup

1. Clone the repository
```bash
git clone <repository_url>
cd node/orca-agent
```

2. Create Virtual Environment
```bash
# Using venv
python3 -m venv .venv
source .venv/bin/activate

# Or using conda
conda create -n orca-agent python=3.8
conda activate orca-agent
```

3. Install Dependencies
```bash
pip install -r requirements.txt
```

## Testing

### Test Suite Overview
Our test suite covers:
- Unit Tests
- Integration Tests
- E2E Tests
- API Tests

### Running Tests

#### All Tests
```bash
# Run all tests
python -m pytest tests/

# Run with verbose output
python -m pytest -v tests/
```

#### Specific Test Types
```bash
# Unit Tests
python -m pytest tests/ -k "not integration and not e2e"

# Integration Tests
python -m pytest tests/ -k "integration"

# E2E Tests
python -m pytest tests/ -k "e2e"
```

### Test Coverage
```bash
# Generate coverage report
pip install coverage
coverage run -m pytest tests/
coverage report -m
coverage html  # Generate HTML report
```

### Test Configuration
- pytest is the primary test runner
- Configuration in `tests/config.yaml`
- Uses `conftest.py` for shared fixtures

### Specific Test Scenarios
```bash
# Test database operations
python -m pytest tests/test_db_operations.py

# Test logging
python -m pytest tests/test_logging.py

# Test middle server interactions
python -m pytest tests/test_middle_server.py
```

## Environment Variables for Testing
Create a `.env.test` file:
```
# Test-specific environment configurations
TEST_MONGODB_URI=mongodb://localhost:27017/orca-test
TEST_API_KEY=your_test_api_key
GITHUB_TEST_TOKEN=your_github_test_token
```

## Best Practices
- Always run tests before committing
- Write tests for new features
- Cover edge cases
- Mock external services
- Keep tests independent

## Troubleshooting
- Verify Python version compatibility
- Check network connectivity
- Ensure all dependencies are installed
- Use `-v` or `-vv` for verbose output

## Continuous Integration
Tests are automatically run on:
- Pull Requests
- Main branch commits
- Scheduled intervals

## Contributing
- Follow PEP8 guidelines
- Write clear test cases
- Document test utilities
- Maintain high test coverage
# Orca Agent Test Configuration

## Overview
This README provides comprehensive guidance for testing the Orca Agent, including setup, configuration, and test execution procedures.

## Prerequisites
- Python 3.8+
- `pip` or `poetry` for dependency management
- Docker (optional, for containerized testing)

## Test Environment Setup

### 1. Install Dependencies
```bash
# Using pip
pip install -r requirements.txt
pip install -r requirements-dev.txt

# Using poetry (recommended)
poetry install
```

### 2. Environment Configuration
Copy the example environment file and configure for testing:
```bash
cp .env.example .env.test
```

Edit `.env.test` with appropriate test configuration:
```
# Test-specific environment variables
TESTING=true
TEST_DATABASE_URL=sqlite://./test_database.db
MOCK_EXTERNAL_SERVICES=true
```

### 3. Test Configuration Files
Key test configuration files:
- `tests/config.yaml`: Global test configuration
- `tests/conftest.py`: Pytest fixtures and shared test resources

### 4. Running Tests

#### Run All Tests
```bash
# Using pytest
pytest tests/

# Using poetry
poetry run pytest tests/
```

#### Run Specific Test Suites
```bash
# Run database operation tests
pytest tests/test_db_operations.py

# Run logging tests
pytest tests/test_logging.py
```

### 5. Test Coverage
Generate test coverage report:
```bash
# Using pytest-cov
pytest --cov=src tests/
```

## Test Types

### Unit Tests
Located in `tests/` directory, covering individual function and method behaviors.

### Integration Tests
Validate interactions between components:
- `test_middle_server.py`: API integration tests
- `test_models.py`: Database model interactions

### E2E Tests
End-to-end workflow tests in `tests/stages/`:
- `worker_audit.py`
- `worker_check.py`
- `worker_fetch.py`
- `worker_submission.py`

## Mocking and Fixtures

### Using Fixtures
Pytest fixtures in `conftest.py` provide:
- Test database setup
- Mock service configurations
- Temporary file and directory management

Example fixture usage:
```python
def test_example(mock_database):
    # Use mock_database fixture for isolated testing
    assert mock_database is not None
```

## Best Practices
- Keep tests independent and isolated
- Use fixtures for shared test resources
- Mock external services
- Test both happy paths and edge cases
- Maintain high test coverage

## Troubleshooting
- Ensure all dependencies are installed
- Check `.env.test` configuration
- Verify Python and dependency versions
- Use verbose mode for detailed test output: `pytest -v`

## Continuous Integration
CI pipeline configured to run:
- All unit and integration tests
- Code coverage reporting
- Linting and type checking

## Performance Testing
Use `pytest-benchmark` for performance-critical components.

## Security Testing
- Static code analysis with `bandit`
- Dependency vulnerability scanning

## Contributing
1. Write tests before implementing features
2. Aim for > 90% test coverage
3. Document test cases thoroughly
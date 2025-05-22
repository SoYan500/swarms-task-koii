# Test Environment Setup and Prerequisites

## Overview
This document provides comprehensive guidelines for setting up test environments across Node, Coordinator, and Orca Agent components.

## Prerequisites
- Git
- Node.js (v16+ recommended)
- Python (3.8+)
- npm/yarn
- Docker (optional, but recommended)
- MongoDB (local or Docker instance)

## Environment Configuration

### Global Environment Variables
Create a `.env` file in each component's root directory with the following guidelines:

#### Node Component
Key environment variables:
- `DEFAULT_BOUNTY_MARKDOWN_FILE`: URL for testing markdown files
- `GITHUB_TOKEN`: GitHub authentication token
- `GITHUB_USERNAME`: GitHub username

#### Orca Agent
Required environment variables:
- `ANTHROPIC_API_KEY`: Anthropic API key
- `GITHUB_TOKEN`: GitHub authentication token
- `GITHUB_USERNAME`: GitHub username
- `UPSTREAM_GITHUB_TOKEN`: Separate token for upstream testing
- `UPSTREAM_GITHUB_USERNAME`: Upstream GitHub username
- `MIDDLE_SERVER_URL`: Local server URL for testing

#### Coordinator Middle Server
Essential environment variables:
- `MONGODB_URI`: MongoDB connection string
- `TASK_IDS`: Comma-separated task identifiers
- `GITHUB_TOKEN`: GitHub authentication token
- `GITHUB_USERNAME`: GitHub username
- `PORT`: Server port (default: 3008)
- `NODE_ENV`: Environment mode (development/production)

## Common Setup Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies
```bash
# Node and Coordinator
yarn install

# Orca Agent
pip install -r requirements.txt
```

### 3. Configure Environment Files
1. Copy `.env.example` to `.env`
2. Fill in required credentials and configuration values
3. Ensure sensitive information is not committed to version control

### 4. Running Tests
```bash
# Node Component
yarn test

# Orca Agent
pytest tests/

# Coordinator Middle Server
yarn test
```

## Testing Best Practices
- Never use production credentials in test environments
- Use mock services when possible
- Isolate test data
- Clean up test resources after execution

## Troubleshooting
- Verify all dependencies are correctly installed
- Check environment variable configurations
- Ensure network connectivity for external services
- Review logs for specific error messages

## Security Recommendations
- Use environment-specific `.env` files
- Rotate credentials regularly
- Never commit sensitive information to version control
- Use secret management tools in production

## Additional Resources
- [Project README](README.md)
- Component-specific documentation
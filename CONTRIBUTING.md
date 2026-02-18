# Contributing Guide

## Development Standards

### Code Style
- We use **Prettier** for formatting and **ESLint** for linting.
- These run automatically on `git commit`. You don't need to run them manually, but you can:
  ```bash
  npm run lint
  npx prettier --write .
  ```

### Testing
- We use **Vitest**.
- Run tests: `npm run test`
- Tests run automatically on `git push`.

### Security
- **Do not commit secrets.** The `security:check` script runs on commit and will block you if it detects patterns like API keys.
- **Dependencies.** `npm audit` runs on push to check for vulnerabilities.

### Commit Messages
- Keep them clear and concise.
- (Optional) Use Conventional Commits (e.g., `feat: login`, `fix: header alignment`).

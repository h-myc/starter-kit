# Starter Kit Template

A robust, security-first Next.js template for solo developers.
Includes pre-configured tools for code quality, security scanning, and developer experience.

## Features

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4, Shadcn UI
- **Testing**: Vitest, React Testing Library
- **Quality**: ESLint, Prettier, Husky, Lint-staged
- **Security**: Local secret scanning, NPM audit on push, Strict .gitignore
- **DX**: VS Code recommendations, Launch configs, Project rename script

## Getting Started

1. **Clone & Install**
   ```bash
   git clone <repo-url> my-new-app
   cd my-new-app
   npm install
   ```

2. **Rename Project**
   Run the helper script to update `package.json` and lockfiles with your new project name.
   ```bash
   ./scripts/rename-project.sh "my-awesome-app"
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```

## Development Workflow

- **Auto-Formatting**: Code is automatically formatted (Prettier) and linted (ESLint) when you commit.
- **Security Check**: Commits are blocked if secrets (API keys, tokens) are detected in staged files.
- **Pre-Push Check**: Tests (`npm run test`) and vulnerability audit (`npm audit`) run automatically before pushing.

### VS Code

This template includes recommended VS Code settings:
- **Format on Save**: Enabled by default.
- **Extensions**: Prompts to install ESLint, Prettier, Tailwind CSS, etc.
- **Debugging**: Launch configurations for Client/Server are included.

## Project Structure

- `scripts/`: Utility scripts (security check, rename).
- `.husky/`: Git hooks configuration.
- `.vscode/`: Editor settings.
- `src/`: Application source code.

## License

Private / Proprietary

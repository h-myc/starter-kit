# Starter Kit Improvement Design

**Date:** 2026-02-18
**Author:** Antigravity (on behalf of User)
**Topic:** starter-kit-improvements

## 1. Overview
Transform the current `starter-kit` into a "robust, security-first, solo-developer" template. This will allow the user to spin up new secure projects rapidly without configuring tools from scratch every time.

## 2. Design Principles
*   **Security First:** Prevent secret leakage and known vulnerabilities by default.
*   **Solo Optimized:** Automation that helps a single developer maintain high quality without overhead (e.g., auto-formatting, pre-push checks).
*   **Private & Local:** No assumptions of public GitHub workflows; rely on local hooks.

## 3. Proposed Changes

### A. Security Hardening (Highest Priority)
1.  **Robust `.gitignore`**:
    *   Ensure all environment files (`.env`, `.env.local`, etc.) are ignored.
    *   Ignore system files (`.DS_Store`) and debug logs.
2.  **Secret Scanning (Local)**:
    *   Add `git-secrets` or a simple Husky hook to scan for `sk-`, `ghp_`, and other key patterns before commit.
3.  **Dependency Security**:
    *   Add `npm audit` to the pre-push hook to prevent pushing code with critical vulnerabilities.

### B. Quality Automation (Husky + lint-staged)
*   **Pre-commit Hook**:
    *   Run `prettier --write` on staged files (don't waste time formatting manually).
    *   Run `eslint --fix` to catch issues early.
*   **Pre-push Hook**:
    *   Run `vitest run` (ensure tests pass before saving to repo).
    *   Run `npm audit` (security check).

### C. Developer Experience (VS Code)
*   **`.vscode/settings.json`**:
    *   Enable "Format On Save".
    *   Set default formatter to Prettier.
*   **`.vscode/extensions.json`**:
    *   Recommend: ESLint, Prettier, Tailwind CSS, VSCode-Icons.
*   **`.vscode/launch.json`**:
    *   Pre-configure debugger for Next.js server-side and client-side logging.

### D. Template Utilities
*   **`scripts/rename-project.sh`**:
    *   A shell script to easily replace "starter-kit" with a new project name in `package.json`, `README.md`, and other config files when starting a new project.

### E. Documentation
*   **Updated `README.md`**:
    *   Clear "Getting Started" guide.
    *   Explanation of the security features and hooks.

## 4. Implementation Steps (Draft)
1.  **Setup Git Hooks**: Install `husky` and `lint-staged`. Configure hooks.
2.  **Configure VS Code**: Create `.vscode` files.
3.  **Security Hardening**: Update `.gitignore` and add audit scripts.
4.  **Create Utilities**: Write the rename script.
5.  **Documentation**: Rewrite README.

## 5. Verification Plan
*   **Test Hooks**: Try to commit a file with bad formatting -> verify it auto-formats. Try to push with a failing test -> verify it blocks.
*   **Test Security**: Try to commit a dummy "secret" -> verify it warns/blocks (if implemented).
*   **Test Setup**: Run the rename script and verify all files update correctly.

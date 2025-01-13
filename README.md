# Next.js Starter Template

## Overview

This is a Next.js starter template designed for developers who value consistency and maintainability in their projects. With robust rules to enforce code style, this template ensures that your codebase remains clean, readable, and easy to scale.

## Features

- **Code Style Enforcement**: Strong linting and formatting rules powered by ESLint and Prettier.
- **TypeScript Ready**: Built-in support for TypeScript to ensure type safety.
- **Best Practices**: Pre-configured settings to align with industry standards.
- **Optimized Workflow**: Includes Husky and lint-staged for pre-commit checks.
- **Commit Message Linting**: Enforce conventional commits with Commitlint.
- **Tailwind CSS Integration**: Pre-configured with Tailwind CSS for rapid UI development.
- **Customizable**: Easily extend or modify configurations to suit your needs.

## Getting Started

### Prerequisites

- [Node.js 18.18](https://nodejs.org/pt) or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/viiniciusgs/nextjs-starter-template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nextjs-starter-template
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

To build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Linting and Formatting

- Run the linter:
  ```bash
  npm run lint
  # or
  yarn lint
  # or
  pnpm lint
  ```
- Format code with Prettier:
  ```bash
  npm run format
  # or
  yarn run format
  # or
  pnpm format
  ```

### Pre-commit Hooks

This template uses Husky and lint-staged to ensure code quality:

- Lint and format your code before committing.
- Automatically rejects commits with code style violations.

## Folder Structure

```
nextjs-starter-template/
├── public/                   # Static assets
├── src/                      # Source code
│   ├── components/           # Reusable components
│   ├── app/                  # Next.js pages
│   ├── styles/               # Global styles
├── eslint.config.mjs         # ESLint configuration
├── prettier.config.mjs       # Prettier configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

### Guidelines

- Follow the existing code style and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! If you have any questions or suggestions, feel free to open an issue.

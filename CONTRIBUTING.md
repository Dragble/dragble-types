# Contributing to dragble-types

Thank you for your interest in contributing. This guide will help you get started.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 16
- npm >= 8

## Getting Started

1. Fork and clone the repository:

```bash
git clone https://github.com/Dragble/dragble-types.git
cd dragble-types
```

2. Install dependencies:

```bash
npm install
```

3. Build the package:

```bash
npm run build
```

## Development

### Project Structure

```
dragble-types/
  src/
    index.ts          # All type definitions (single-file source of truth)
  dist/               # Build output (declarations + JS)
  tsconfig.json       # TypeScript configuration
```

This package is a **types-only** library. The entire public API is defined in `src/index.ts` — a single file containing 200+ exported types, interfaces, and enums covering the full Dragble Editor SDK surface.

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to `dist/` (declarations + JS) |
| `npm run clean` | Remove the `dist/` directory |

### Downstream Consumers

Changes to this package directly affect three framework wrappers:

- `dragble-react-editor` — re-exports all types via `export * from "dragble-types"`
- `dragble-vue-editor` — re-exports all types via `export * from "dragble-types"`
- `dragble-angular-editor` — re-exports all types via `export * from "dragble-types"`

After making changes here, rebuild the downstream packages to verify nothing breaks:

```bash
# In each wrapper package directory
npm run build
npm run typecheck
```

## Making Changes

1. Create a new branch from `main`:

```bash
git checkout -b feature/your-feature
```

2. Make your changes in `src/index.ts`. Follow the existing organization — types are grouped by category with section headers:

```typescript
// ============================================================================
// SECTION NAME
// ============================================================================
```

3. Verify your changes:

```bash
npm run build
```

4. If adding new types for a new SDK feature, add JSDoc comments explaining their purpose:

```typescript
/**
 * Description of what this type represents.
 *
 * @example
 * ```typescript
 * const config: MyNewConfig = { ... };
 * ```
 */
export interface MyNewConfig {
  /** Description of this property */
  property: string;
}
```

5. Commit your changes with a clear, descriptive message:

```bash
git commit -m "feat: add types for custom widget API"
```

### Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

- `feat:` — new types for a new SDK feature
- `fix:` — correct an existing type definition
- `docs:` — documentation or JSDoc changes
- `refactor:` — restructure types without changing the public API
- `chore:` — maintenance tasks (deps, CI, build config)

### Guidelines for Type Changes

- **Adding types** — add new types at the end of the relevant section with JSDoc comments.
- **Modifying types** — treat all exported types as public API. Adding optional properties is safe. Removing or renaming properties is a breaking change.
- **Breaking changes** — require a major version bump. Document the migration path in the commit message and PR description.
- **JSDoc** — all public interfaces and non-obvious type aliases should have JSDoc comments. Include `@example` blocks where helpful.

## Pull Requests

1. Push your branch to your fork.
2. Open a pull request against the `main` branch.
3. Provide a clear description of what types were added/changed and why.
4. Make sure the CI checks pass (build).

## Reporting Issues

- Use [GitHub Issues](https://github.com/Dragble/dragble-types/issues) to report type errors or request new type definitions.
- If a type doesn't match the actual SDK behavior, include the SDK method/property name and the expected vs. actual type.

## Code Style

- TypeScript strict mode is enabled.
- Use `interface` for object shapes and `type` for unions, intersections, and aliases.
- Group related types together under section headers.
- Use JSDoc comments for all public interfaces.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

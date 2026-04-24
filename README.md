<p align="center">
  <a href="https://dragble.com">
    <img src="logo.png" alt="Dragble - AI-Powered Email Editor SDK Types" width="300" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/dragble-types"><img src="https://img.shields.io/npm/v/dragble-types.svg" alt="npm version" /></a>
  <a href="https://github.com/Dragble/dragble-types/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license" /></a>
</p>

# dragble-types

Shared TypeScript type definitions for the [Dragble Editor](https://dragble.com) — the **AI-powered email builder** SDK. This is the **single source of truth** for all public API types used by the framework wrappers:

- [`dragble-react-editor`](https://www.npmjs.com/package/dragble-react-editor)
- [`dragble-vue-editor`](https://www.npmjs.com/package/dragble-vue-editor)
- [`dragble-angular-editor`](https://www.npmjs.com/package/dragble-angular-editor)

[Website](https://dragble.com) | [Documentation](https://docs.dragble.com) | [Dashboard](https://developers.dragble.com)

## Installation

```bash
# npm
npm install dragble-types

# yarn
yarn add dragble-types

# pnpm
pnpm add dragble-types
```

> **Note:** You typically don't need to install this package directly. It's included as a dependency of the framework wrappers (`dragble-react-editor`, `dragble-vue-editor`, `dragble-angular-editor`), and all types are re-exported from those packages.

## Usage

Import types directly when you need fine-grained control:

```typescript
import type {
  DragbleSDK,
  DragbleConfig,
  EditorOptions,
  DesignJson,
  EditorMode,
  ExportHtmlOptions,
  MergeTag,
  MergeTagGroup,
  Module,
  AIConfig,
  AppearanceConfig,
  ToolsConfig,
  FeaturesConfig,
  EditorEventName,
} from "dragble-types";
```

Or import from a framework wrapper (they re-export everything):

```typescript
// React
import type { EditorOptions, DesignJson } from "dragble-react-editor";

// Vue
import type { EditorOptions, DesignJson } from "dragble-vue-editor";

// Angular
import type { EditorOptions, DesignJson } from "dragble-angular-editor";
```

## What's Included

This package exports 200+ types covering the entire Dragble Editor SDK surface:

| Category               | Key Types                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**               | `EditorMode`, `ThemeMode`, `ViewMode`, `TextDirection`, `AccentColor`, `LocaleCode`                                                    |
| **Configuration**      | `DragbleConfig`, `EditorOptions`, `AppearanceConfig`, `ToolsConfig`, `FeaturesConfig`, `AIConfig`                                      |
| **Design data**        | `DesignJson`, `RowData`, `ColumnData`, `ContentData`, `BodyValues`                                                                     |
| **Export**             | `ExportHtmlOptions`, `ExportImageOptions`, `ExportImageData`, `ExportPdfOptions`, `ExportPdfData`, `ExportZipOptions`, `ExportZipData` |
| **Merge tags**         | `MergeTag`, `MergeTagGroup`, `MergeTagsConfig`                                                                                         |
| **Special links**      | `SpecialLink`, `SpecialLinkGroup`, `SpecialLinksConfig`                                                                                |
| **Modules**            | `Module`, `ModuleData`, `ModuleMetadata`, `ModuleType`                                                                                 |
| **Popup**              | `PopupConfig`, `PopupValues`, `PopupPosition`, `PopupOverlay`                                                                          |
| **Collaboration**      | `CollaborationFeaturesConfig`, `CommentAction`, `UserInfo`                                                                             |
| **Custom tools**       | `DragbleToolConfig`, `DragbleWidgetConfig`, `CustomToolConfig`                                                                         |
| **Asset storage**      | `ExternalStorageConfig`, `ExternalAsset`, `ExternalFolder`                                                                             |
| **Events & callbacks** | `EditorEventName`, `DragbleCallbacks`                                                                                                  |
| **Validation**         | `AuditResult`, `AuditOptions`, `ValidatorFunction`                                                                                     |
| **SDK interface**      | `DragbleSDK` (full interface for all public methods)                                                                                   |

## Project Structure

```
dragble-types/
  src/
    index.ts          # All type definitions (single-file source of truth)
  dist/               # Build output (declarations + JS)
  tsconfig.json       # TypeScript configuration
```

## Scripts

| Script          | Description                   |
| --------------- | ----------------------------- |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm run clean` | Remove the `dist/` directory  |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

[MIT](./LICENSE)

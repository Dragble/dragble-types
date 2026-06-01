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

| Category               | Key Types                                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Core**               | `EditorMode`, `ThemeMode`, `ViewMode`, `TextDirection`, `AccentColor`, `LocaleCode`                                                             |
| **Configuration**      | `DragbleConfig`, `EditorOptions`, `AppearanceConfig`, `ToolsConfig`, `FeaturesConfig`, `AIConfig`                                               |
| **Design data**        | `DesignJson`, `RowData`, `ColumnData`, `ContentData`, `BodyValues`                                                                              |
| **Export**             | `ExportHtmlOptions`, `ExportImageOptions`, `ExportImageData`, `ExportPdfOptions`, `ExportPdfData`, `ExportZipOptions`, `ExportZipData`          |
| **Merge tags**         | `MergeTag`, `MergeTagGroup`, `MergeTagsConfig`                                                                                                  |
| **Special links**      | `SpecialLink`, `SpecialLinkGroup`, `SpecialLinksConfig`                                                                                         |
| **Modules**            | `Module`, `ModuleData`, `ModuleMetadata`, `ModuleType`                                                                                          |
| **Popup**              | `PopupConfig`, `PopupValues`, `PopupPosition`, `PopupOverlay`                                                                                   |
| **Collaboration**      | `CollaborationFeaturesConfig`, `CommentAction`, `UserInfo`                                                                                      |
| **Custom tools**       | `DragbleToolConfig`, `DragbleWidgetConfig`, `CustomToolConfig`                                                                                  |
| **Asset storage**      | `ExternalStorageConfig`, `ExternalAsset`, `ExternalFolder`                                                                                      |
| **Events & callbacks** | `EditorEventName`, `DragbleCallbacks`                                                                                                           |
| **Validation**         | `AuditResult`, `AuditOptions`, `ValidatorFunction`                                                                                              |
| **MCP**                | `JoinMCPOptions`, `JoinMCPResult`, `StartMCPPairingOptions`, `StartMCPPairingResult`, `ConnectMCPOptions`, `ConnectMCPResult`, `DisconnectMCPResult`, `MCPConnectErrorCode`, `MCPStatusResult`, `MCPToolFiredEvent` |
| **SDK interface**      | `DragbleSDK` (full interface for all public methods)                                                                                            |

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

## MCP (Model Context Protocol)

Connect your backend or AI clients (OpenCode, Claude Code, Cursor, Windsurf) to a live Dragble editor session.

### Types

| Type                   | Description                                                                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `JoinMCPOptions`       | Options for `joinMCP()` — `id` (BYOI session ID, required), `editorMode`                                                                               |
| `JoinMCPResult`        | Result of `joinMCP()` — `sessionId`, `resumed`                                                                                                        |
| `ConnectMCPOptions`    | Backward-compatible alias options for `connectMCP()`                                                                                                  |
| `ConnectMCPResult`     | Backward-compatible alias result — `sessionId`, `resumed`                                                                                             |
| `StartMCPPairingOptions` | Options for `startMCPPairing()` — same as `joinMCP()`                                                                                                |
| `StartMCPPairingResult` | Result of `startMCPPairing()` — `sessionId`, `resumed`, `code`, `expiresAt`                                                                           |
| `DisconnectMCPResult`  | Result of `disconnectMCP()` — `destroyed` (true if PG record permanently deleted)                                                                     |
| `MCPConnectErrorCode`  | Error codes: `MCP_NOT_AVAILABLE_ON_PLAN`, `MCP_DISABLED_BY_SDK`, `INVALID_MCP_SESSION_ID`, `MCP_ALREADY_CONNECTED`, `USER_ALREADY_HAS_ACTIVE_SESSION` |
| `MCPStatusResult`      | Current pairing status — `{ paired: false }` or `{ paired: true, sessionId, mcpServerUrl }`                                                           |
| `MCPToolFiredEvent`    | Emitted when an AI client calls a tool — `kind` + `args`                                                                                              |
| `GetPairingCodeResult` | 8-digit pairing code + expiry timestamp                                                                                                               |
| `EndPairingResult`     | Whether an active pairing code was revoked                                                                                                            |

### SDK Methods

```typescript
// Backend-managed flow: join with a bring-your-own-id session
const result = await sdk.joinMCP({ id: "user-42-doc-99" });
// Send result.sessionId to your backend. Backend calls MCP with mcp_key.

// Compatibility alias
await sdk.connectMCP({ id: "user-42-doc-99" });

// Third-party client flow: join and mint a pairing code
const { sessionId, code, expiresAt } = await sdk.startMCPPairing({
  id: "user-42-doc-99",
});
// AI clients use mcp_client_key and pair_with_editor(code).

// Check pairing status
const status = await sdk.getMCPStatus();

// Get a new pairing code (rotates the previous one)
const { code, expiresAt } = await sdk.getPairingCode();

// Revoke the active pairing code (session stays alive)
await sdk.endPairing();

// Permanently disconnect and destroy the session (PG + R2 deleted)
const { destroyed } = await sdk.disconnectMCP();

// Listen for AI tool calls in real time
const unsubscribe = sdk.onAIToolFired((event) => {
  console.log(`AI called ${event.kind}`, event.args);
});
```

### Enabling MCP

MCP requires **two conditions**:

1. **Plan allows it** — Starter plan or higher (`core.mcp` in allowed features)
2. **SDK has not opted out** — MCP is on by default; set `features: { mcp: false }` to turn it off for an embed

```typescript
sdk.init({
  id: "editor-container",
  features: { mcp: false }, // optional opt-out
});
```

If the plan doesn't include MCP, MCP session calls reject with `MCP_NOT_AVAILABLE_ON_PLAN`.
If `features.mcp` is set to `false`, MCP session calls reject with `MCP_DISABLED_BY_SDK`.

### Server-Side Session Termination

SaaS backends can force-destroy a session via HTTP (e.g., when a user's subscription ends):

```bash
curl -X DELETE https://mcp.dragble.com/sessions/user-42-doc-99 \
  -H "X-API-Key: db_mcp_your_key_here"
```

This permanently deletes the session record from the database. The AI client loses connection and cannot reconnect.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

[MIT](./LICENSE)

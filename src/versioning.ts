/**
 * Editor version selector. Accepts channel names or exact semver strings.
 * The `string & {}` idiom preserves autocomplete for literals while accepting arbitrary semver.
 */
export type EditorVersion = 'stable' | 'latest' | (string & {});

/**
 * SDK version selector. Same shape as EditorVersion but used by wrappers
 * to pick which SDK build to load from sdk.dragble.com/<sdkVersion>/.
 */
export type SdkVersion = 'stable' | 'latest' | (string & {});

/**
 * Base shape for any Dragble config that accepts an editor-version selector.
 * Precedence: editorUrl wins over editorVersion (with console.warn).
 */
export interface DragbleEditorTarget {
  /** @default 'latest' */
  editorVersion?: EditorVersion;
  /** Full URL override. When set, editorVersion is ignored with a warning. */
  editorUrl?: string;
}

/**
 * Shape for SDK-loading configuration (used by wrappers).
 * Precedence: sdkUrl wins over sdkVersion (with console.warn).
 */
export interface DragbleSdkTarget {
  /** @default 'latest' */
  sdkVersion?: SdkVersion;
  /** Full URL override for the SDK script. When set, sdkVersion is ignored. */
  sdkUrl?: string;
}

/**
 * Full version props contract for framework wrappers (React/Vue/Angular).
 */
export interface DragbleWrapperVersionProps extends DragbleSdkTarget, DragbleEditorTarget {}

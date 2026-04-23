/**
 * dragble-types
 *
 * Public TypeScript type definitions for the Pexelize Editor SDK.
 * This is the single source of truth for all SDK types used by
 * dragble-react-editor, dragble-vue-editor, and dragble-angular-editor.
 *
 * Updated whenever the SDK public API changes.
 */

// ============================================================================
// CORE ENUMS & PRIMITIVES
// ============================================================================

// Editor modes
export type EditorMode = "email" | "web" | "popup";
export type ThemeMode = "light" | "dark" | "dragble-light" | "dragble-dark";
export type ViewMode = "desktop" | "tablet" | "mobile";

/**
 * Built-in locale codes supported by the Pexelize Editor (BCP 47 format).
 *
 * The editor ships with full translations for all 29 locales listed below.
 * The default locale is `"en-US"` (US English).
 *
 * Base language codes (e.g. `"en"`, `"fr"`, `"de"`) are also accepted —
 * they are automatically mapped to their default regional variant at runtime.
 *
 * @see https://docs.dragble.com/guides/localization#supported-languages
 */
export type BuiltInLocaleCode =
  // English
  | "en-US"
  | "en-CA"
  // Arabic (RTL)
  | "ar-AE"
  // Chinese
  | "zh-CN"
  | "zh-TW"
  // Czech
  | "cs-CZ"
  // Danish
  | "da-DK"
  // Dutch
  | "nl-NL"
  // Estonian
  | "et-EE"
  // Farsi / Persian (RTL)
  | "fa-IR"
  // Finnish
  | "fi-FI"
  // French
  | "fr-FR"
  | "fr-CA"
  // German
  | "de-DE"
  // Hungarian
  | "hu-HU"
  // Indonesian
  | "id-ID"
  // Italian
  | "it-IT"
  // Japanese
  | "ja-JP"
  // Korean
  | "ko-KR"
  // Norwegian
  | "no-NO"
  // Polish
  | "pl-PL"
  // Portuguese
  | "pt-BR"
  | "pt-PT"
  // Russian
  | "ru-RU"
  // Spanish
  | "es-ES"
  // Swedish
  | "sv-SE"
  // Turkish
  | "tr-TR"
  // Ukrainian
  | "uk-UA"
  // Vietnamese
  | "vi-VN";

/**
 * Locale code accepted by the editor.
 *
 * Can be a built-in locale code (e.g. `"fr-FR"`) or any custom string
 * (e.g. `"th"`) when paired with user-provided translations.
 */
export type LocaleCode = BuiltInLocaleCode | (string & {});

/**
 * Accent color for the editor theme (Radix UI color scale names).
 */
export type AccentColor =
  | "gray"
  | "gold"
  | "bronze"
  | "brown"
  | "yellow"
  | "amber"
  | "orange"
  | "tomato"
  | "red"
  | "ruby"
  | "crimson"
  | "pink"
  | "plum"
  | "purple"
  | "violet"
  | "iris"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "jade"
  | "green"
  | "grass"
  | "mint"
  | "sky";

/**
 * Text direction
 */
export type TextDirection = "ltr" | "rtl";

/**
 * Panel position options
 */
export type PanelPosition = "left" | "right";

/**
 * Action bar placement options.
 * Controls where the floating action bar appears relative to a selected row or content block.
 * @default 'bottom_right'
 */
export type ActionBarPlacement =
  | "top_left"
  | "top_right"
  | "bottom_left"
  | "bottom_right";

/**
 * Shortcut bar placement options.
 * Controls where the floating shortcut bar (preview, undo/redo, responsive design toggles) appears in the workspace.
 * @default 'top_left'
 */
export type ShortcutBarPlacement =
  | "top_left"
  | "top_right"
  | "bottom_left"
  | "bottom_right";

/**
 * Content type for the editor
 * - 'module': Single-row module editor (locked to 1 row for reusable content)
 */
export type EditorContentType = "module";

export * from "./versioning";

// ============================================================================
// POPUP TYPES
// ============================================================================

/** Popup campaign type. Only lightbox (centered modal overlay) is supported. */
export type PopupCampaignType = "lightbox";

export type PopupExportMode = "full" | "partial";

/** Popup animation options */
export type PopupAnimation = "none" | "fade";

/** Popup horizontal position */
export type PopupHorizontalPosition = "left" | "center" | "right";

/** Popup vertical position */
export type PopupVerticalPosition = "top" | "center" | "bottom";

/** Popup position configuration */
export interface PopupPosition {
  horizontal: PopupHorizontalPosition;
  vertical: PopupVerticalPosition;
}

/** Popup content horizontal alignment */
export type PopupContentAlign = "left" | "center" | "right";

/** Popup content vertical alignment */
export type PopupContentVerticalAlign = "top" | "middle" | "bottom";

/** Popup close button position — 4 corners */
export type PopupCloseButtonPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

/** Popup close button configuration */
export interface PopupCloseButton {
  enabled: boolean;
  position: PopupCloseButtonPosition;
  size: string;
  color: string;
  backgroundColor: string;
  borderRadius: string;
  offset: string;
}

/** Popup overlay configuration */
export interface PopupOverlay {
  enabled: boolean;
  color: string;
  closeOnClick: boolean;
}

/** Popup border style */
export type PopupBorderStyle = "none" | "solid" | "dashed" | "dotted";

/** Popup border configuration */
export interface PopupBorder {
  width: string;
  style: PopupBorderStyle;
  color: string;
}

/**
 * Full popup values.
 *
 * In the template JSON, popup values are stored as **flat keys in `body.values`**
 * (e.g. `popupWidth`, `popupPosition`, `popupOverlay_backgroundColor`, etc.),
 * NOT as a separate `body.popupValues` object.
 *
 * When returned via `exportHtml()` callbacks, this nested interface is provided
 * for convenience.
 *
 * NOTE: `backgroundColor` and `backgroundImage` are NOT part of popup values.
 * They are managed through the standard `body.values` (bodyValues) system,
 * the same as email/web mode. This ensures consistent handling across all
 * campaign types. Access them via `getDesign()` → `body.values.backgroundColor`
 * and `body.values.backgroundImage`.
 */
export interface PopupValues {
  campaignType: PopupCampaignType;
  position: PopupPosition;
  width: string;
  height: "auto" | string;
  overlay: PopupOverlay;
  closeButton: PopupCloseButton;
  animation: PopupAnimation;
  animationDuration: string;
  borderRadius: string;
  boxShadow: string;
  padding: string;
  border: PopupBorder;
  displayDelay: number;
  contentAlign: PopupContentAlign;
  contentVerticalAlign: PopupContentVerticalAlign;
}

/** Popup builder configuration (used when editorMode is 'popup') */
export interface PopupConfig {
  /** Default popup width (default: '480px') */
  defaultWidth?: string;
  /** Default popup height (default: 'auto') */
  defaultHeight?: string;
  /** Export mode: 'full' for complete HTML, 'partial' for embeddable fragment */
  exportMode?: PopupExportMode;
  /** Custom popup ID for CSS scoping */
  popupId?: string;
}

// ============================================================================
// DESIGN DATA TYPES
// ============================================================================

/** Font family definition used in design values */
export interface FontFamily {
  /** Display label */
  label: string;
  /** CSS font-family value */
  value: string;
  /** URL to load font */
  url?: string;
  /** Whether this is a default system font */
  defaultFont?: boolean;
  /** Available font weights */
  weights?: number[];
}

/** Button color configuration */
export interface ButtonColors {
  color?: string;
  backgroundColor?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
}

/** Size configuration for elements */
export interface SizeConfig {
  autoWidth?: boolean;
  width?: string;
  height?: string;
}

/** Action configuration for clickable elements */
export interface ActionConfig {
  name?: string;
  type?: string;
  values?: {
    href?: string;
    target?: string;
    [key: string]: unknown;
  };
  url?: string;
  target?: string;
  [key: string]: unknown;
}

/** Image source configuration */
export interface ImageSource {
  url: string;
  width?: number;
  height?: number;
  autoWidth?: boolean;
  maxWidth?: string;
}

/** Video configuration */
export interface VideoConfig {
  url?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

/** Menu item for navigation/menu tools */
export interface MenuItem {
  text?: string;
  href?: string;
  url?: string;
  target?: string;
  [key: string]: unknown;
}

/** Social icon definition */
export interface SocialIcon {
  name: string;
  url: string;
  icon?: string;
}

/** Social icons configuration */
export interface SocialIconsConfig {
  icons: SocialIcon[];
  iconType?: string;
  layout?: string;
}

/** Table cell definition */
export interface TableCell {
  text?: string;
  content?: string;
  [key: string]: unknown;
}

/** Table row definition */
export interface TableRow {
  cells: TableCell[];
}

/** Table data structure */
export interface TableData {
  headers: TableCell[];
  rows: TableRow[];
}

/** Background image configuration (full version) */
export interface BackgroundImage {
  enable?: boolean;
  url?: string;
  fullWidth?: boolean;
  repeat?: string;
  position?: string;
  customPosition?: string[];
  sizeMode?: "auto" | "cover" | "contain" | "custom";
  size?: string | BackgroundImageCustomSize;
  customSize?: BackgroundImageCustomSize;
  color?: string;
  customColor?: string;
}

/** Background image custom size */
export interface BackgroundImageCustomSize {
  width?: string;
  height?: string;
}

/** Element metadata */
export interface ElementMeta {
  htmlID?: string;
  htmlClassNames?: string;
  [key: string]: unknown;
}

/** Border style definition */
export interface BorderStyle {
  borderTopWidth?: string;
  borderTopStyle?: string;
  borderTopColor?: string;
  borderRightWidth?: string;
  borderRightStyle?: string;
  borderRightColor?: string;
  borderBottomWidth?: string;
  borderBottomStyle?: string;
  borderBottomColor?: string;
  borderLeftWidth?: string;
  borderLeftStyle?: string;
  borderLeftColor?: string;
}

/** Base content values shared by all content types */
export interface BaseContentValues {
  containerPadding?: string;
  selectable?: boolean;
  draggable?: boolean;
  duplicatable?: boolean;
  deletable?: boolean;
  hideable?: boolean;
  hideOnMobile?: boolean;
  hideDesktop?: boolean;
  hideMobile?: boolean;
  _meta?: ElementMeta;
  _override?: Record<string, unknown>;
  [key: string]: unknown;
}

/** All content type identifiers */
export type ContentType =
  | "text"
  | "paragraph"
  | "heading"
  | "button"
  | "image"
  | "divider"
  | "menu"
  | "html"
  | "social"
  | "video"
  | "table"
  | "timer"
  | "form"
  | "spacer"
  | string;

/** Base tool type identifiers */
export type BaseToolType =
  | "text"
  | "image"
  | "button"
  | "divider"
  | "heading"
  | "html"
  | "menu"
  | "social"
  | "video"
  | "timer"
  | "table"
  | string;

/** Widget type identifiers */
export type WidgetType =
  | "color_picker"
  | "text"
  | "dropdown"
  | "toggle"
  | "alignment"
  | "font_family"
  | "font_weight"
  | "font_size"
  | "image"
  | "rich_text"
  | "html"
  | string;

/**
 * Legacy tool configuration (Unlayer-compatible).
 * @deprecated Use PexelizeToolConfig instead.
 */
export interface NewToolConfig {
  name: string;
  label: string;
  icon?: string;
  properties?: Record<string, unknown>;
  renderer?: Record<string, unknown>;
  [key: string]: unknown;
}

/** Property element for custom tool property definitions */
export interface PropertyElement {
  label?: string;
  defaultValue?: unknown;
  widget?: string;
  [key: string]: unknown;
}

/** Property section for grouped property definitions */
export interface PropertySection {
  title: string;
  options?: Record<string, PropertyElement>;
  [key: string]: unknown;
}

/**
 * Legacy Unlayer-compatible custom tool config.
 * @deprecated Use PexelizeToolConfig instead.
 */
export interface CustomToolConfig {
  name: string;
  label: string;
  icon?: string;
  supportedDisplayModes?: string[];
  properties?: Record<string, PropertySection>;
  renderer?: {
    Viewer?: (props: Record<string, unknown>) => unknown;
    exporters?: Record<string, unknown>;
  };
  [key: string]: unknown;
}

/** Custom tool property definition (Unlayer-compatible) */
export interface CustomToolProperty {
  label?: string;
  defaultValue?: unknown;
  widget?: string;
  [key: string]: unknown;
}

// ============================================================================
// DESIGN JSON STRUCTURE
// ============================================================================

export interface DesignJson {
  body: {
    rows: RowData[];
    values: BodyValues;
  };
  counters?: Record<string, number>;
  schemaVersion?: number;
}

export interface BodyValues {
  backgroundColor?: string;
  backgroundImage?: BackgroundImage;
  contentWidth?: string;
  contentAlign?: "left" | "center";
  fontFamily?: FontFamily;
  textColor?: string;
  linkStyle?: LinkStyle;
  preheaderText?: string;
  title?: string;
  margin?: string;
  padding?: string;
  _meta?: ElementMeta;
  [key: string]: unknown;
}

export interface RowData {
  cells: number[];
  columns: ColumnData[];
  values: RowValues;
}

export interface RowValues {
  displayCondition?: string | RowDisplayCondition | null;
  columns?: boolean;
  backgroundColor?: string;
  columnsBackgroundColor?: string;
  backgroundImage?: BackgroundImage;
  padding?: string;
  border?: Record<string, string>;
  borderRadius?: string;
  columnGap?: string;
  hideDesktop?: boolean;
  hideMobile?: boolean;
  noStackMobile?: boolean;
  verticalAlign?: "start" | "center" | "end";
  stackOrder?: "ltr" | "rtl";
  selectable?: boolean;
  draggable?: boolean;
  duplicatable?: boolean;
  deletable?: boolean;
  _meta?: ElementMeta;
  [key: string]: unknown;
}

export interface ColumnData {
  contents: ContentData[];
  values: ColumnValues;
}

export interface ColumnValues {
  backgroundColor?: string;
  backgroundImage?: BackgroundImage;
  border?: Record<string, string>;
  borderRadius?: string;
  padding?: string;
  _meta?: ElementMeta;
  [key: string]: unknown;
}

export interface ContentData {
  id?: string;
  type?: ContentType;
  slug?: string;
  values?: BaseContentValues;
}

export interface LinkStyle {
  body?: boolean;
  inherit?: boolean;
  linkColor?: string;
  linkHoverColor?: string;
  linkUnderline?: boolean;
  linkHoverUnderline?: boolean;
}

// ============================================================================
// MODULE TYPES
// ============================================================================

/** Module type: standard (independent copies) or synced (shared updates) */
export type ModuleType = "standard" | "synced";

/** Module mode: email or web compatibility */
export type ModuleMode = "email" | "web";

/** Module metadata */
export interface ModuleMetadata {
  /** Module creation timestamp */
  createdAt?: string;
  /** Module last updated timestamp */
  updatedAt?: string;
  /** Module author */
  author?: string;
  /** Module description */
  description?: string;
  /** Module tags */
  tags?: string[];
  [key: string]: unknown;
}

/** Module column definition */
export interface ModuleColumn {
  contents: ModuleContent[];
  values: Record<string, unknown>;
}

/** Module content definition */
export interface ModuleContent {
  type: string;
  values: Record<string, unknown>;
}

export interface ModuleData {
  cells: number[];
  columns: ColumnData[];
  values: Record<string, unknown>;
}

export interface Module {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Category for grouping */
  category: string;
  /** Module mode - "email" or "web" (editor compatibility) */
  mode: ModuleMode;
  /** Module type - "standard" or "synced" (sync behavior) */
  type: ModuleType;
  /** Module thumbnail URL */
  thumbnail?: string | null;
  /** Module data (row structure) */
  data?: ModuleData | Record<string, unknown>;
  /** Module metadata */
  metadata?: ModuleMetadata;
}

// ============================================================================
// MERGE TAGS
// ============================================================================

export interface MergeTag {
  /** Display label shown in dropdown */
  label: string;
  /** Value to insert (e.g., '{{first_name}}') */
  value: string;
  /** Optional category for grouping */
  category?: string;
  /** Sample value for preview */
  sample?: string;
}

export interface MergeTagGroup {
  name: string;
  mergeTags: (MergeTag | MergeTagGroup)[];
}

/**
 * Merge tags configuration
 */
export interface MergeTagsConfig {
  /** Exclude built-in default merge tags, only show custom tags (default: false) */
  excludeDefaults?: boolean;
  /** Sort tags alphabetically */
  sort?: boolean;
  /** Custom merge tags */
  customMergeTags?: (MergeTag | MergeTagGroup)[];
}

// ============================================================================
// SPECIAL LINKS
// ============================================================================

export interface SpecialLink {
  name: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface SpecialLinkGroup {
  name: string;
  specialLinks: SpecialLink[];
}

/**
 * Special links configuration
 */
export interface SpecialLinksConfig {
  /** Exclude built-in default special links, only show custom links (default: false) */
  excludeDefaults?: boolean;
  /** Custom special links */
  customSpecialLinks?: (SpecialLink | SpecialLinkGroup)[];
}

// ============================================================================
// FONTS
// ============================================================================

/** Custom font definition */
export interface FontDefinition {
  /** Display label in dropdown */
  label: string;
  /** CSS font-family value */
  value: string;
  /** URL to load font (Google Fonts, etc.) */
  url?: string;
  /** Available font weights */
  weights?: number[];
  /** Whether this is a default system font */
  defaultFont?: boolean;
}

/** Fonts configuration */
export interface FontsConfig {
  /** Exclude built-in default fonts, only show custom fonts (default: false) */
  excludeDefaults?: boolean;
  /** Custom fonts to add */
  customFonts?: FontDefinition[];
}

// ============================================================================
// LANGUAGE
// ============================================================================

/** Language definition for multi-language support */
export interface Language {
  /** Language label (e.g., "English") */
  label: string;
  /** Language value/code (e.g., "en-US") */
  value: string;
  /** Is this language RTL? */
  rtl?: boolean;
  /** Is this the default language? */
  default?: boolean;
}

// ============================================================================
// APPEARANCE CONFIG
// ============================================================================

/** Panel configuration */
export interface PanelConfig {
  /** Panel position */
  dock?: PanelPosition;
  /** Whether panel is collapsible */
  collapsible?: boolean;
}

/** Panels configuration */
export interface PanelsConfig {
  tools?: PanelConfig;
  properties?: PanelConfig;
}

/** Custom loader configuration */
export interface LoaderConfig {
  /** Custom loader URL (GIF, PNG, SVG URL, or any animated image) */
  url?: string;
  /** Custom HTML for loader */
  html?: string;
  /** Custom CSS for loader */
  css?: string;
  /** Inline SVG string for loader */
  svg?: string;
}

/** Appearance features */
export interface AppearanceFeaturesConfig {
  /** Show preview button */
  preview?: boolean;
  /** Show undo/redo buttons */
  undoRedo?: boolean;
}

/** Main panel tabs visibility configuration */
export interface SidePanelTabsConfig {
  content?: { visible?: boolean };
  modules?: { visible?: boolean };
  styles?: { visible?: boolean };
}

/** Action bar configuration */
export interface ActionBarConfig {
  /**
   * Placement of the floating action bar that appears when a row or content is selected.
   * @default 'bottom_right'
   */
  placement?: ActionBarPlacement;
  /**
   * Compact mode — renders smaller buttons in the action bar.
   * @default false
   */
  compact?: boolean;
}

/**
 * Shortcut bar configuration.
 * Controls the floating shortcut bar (preview, undo/redo, responsive design toggles).
 */
export interface ShortcutBarConfig {
  /**
   * Placement of the shortcut bar in the workspace.
   * @default 'top_left'
   */
  placement?: ShortcutBarPlacement;
}

/** Custom tab configuration for modules panel */
export interface CustomTabConfig {
  /** Unique tab identifier */
  id: string;
  /** Tab display label */
  label: string;
  /** Tab content (component or HTML string) */
  content: unknown;
  /** Tab icon (icon name or SVG) */
  icon?: string;
  /** Tab order in the list */
  order?: number;
  /** Whether tab is visible */
  visible?: boolean;
}

// Modules tab config (matching SDK structure)
export interface ModulesTabConfig {
  /** Rows accordion configuration */
  rows?: {
    visible?: boolean;
    defaultExpanded?: boolean;
  };
  /** Saved modules accordion configuration */
  savedModules?: {
    visible?: boolean;
    defaultExpanded?: boolean;
    /** Title for the saved modules accordion (default: "Saved Modules") */
    title?: string;
  };
  /** Custom tabs configuration */
  customTabs?: CustomTabConfig[];
}

// Styles tab config
export interface StylesTabConfig {
  general?: { visible?: boolean; defaultExpanded?: boolean };
  fonts?: { visible?: boolean; defaultExpanded?: boolean };
  contentAlignment?: { visible?: boolean; defaultExpanded?: boolean };
  backgroundImage?: { visible?: boolean; defaultExpanded?: boolean };
  linkStyles?: { visible?: boolean; defaultExpanded?: boolean };
  preheader?: { visible?: boolean; defaultExpanded?: boolean };
}

// Appearance config
export interface AppearanceConfig {
  /** Editor theme */
  theme?: ThemeMode | object;
  /** Accent color for the editor theme (Radix UI color names) */
  accentColor?: AccentColor;
  /** Panel configuration (DEPRECATED - use sidePanel) */
  panels?: PanelsConfig;
  /** Custom loader */
  loader?: LoaderConfig;
  /** Feature visibility */
  features?: AppearanceFeaturesConfig;
  /** Custom CSS variables */
  customStyles?: Record<string, string>;
  /** Action bar configuration */
  actionBar?: ActionBarConfig;
  /** Shortcut bar configuration */
  shortcutBar?: ShortcutBarConfig;
  /** Side panel configuration */
  sidePanel?: {
    /** Main tab visibility */
    tabs?: SidePanelTabsConfig;
    /** Modules tab configuration */
    modulesTab?: ModulesTabConfig;
    /** Styles tab configuration */
    stylesTab?: StylesTabConfig;
    /** Panel position: 'left' or 'right' (default: 'right') */
    dock?: "left" | "right";
    /** Panel width in pixels (default: 380) */
    width?: number;
    /** Whether panel can be collapsed (default: false) */
    collapsible?: boolean;
    /**
     * Whether accordion sections start collapsed.
     * @default false
     */
    accordionsCollapsed?: boolean;
  };
}

// ============================================================================
// TOOLS CONFIG
// ============================================================================

export interface ToolPropertyConfig {
  /** Default value for the property */
  value?: unknown;
  /** Whether property is editable */
  editable?: boolean;
}

export interface ToolConfig {
  /** Enable/disable tool */
  enabled?: boolean;
  /** Position in tools panel */
  position?: number;
  /** Property overrides */
  properties?: Record<string, ToolPropertyConfig>;
}

/** Timer countdown configuration for tool property overrides */
export interface TimerCountdownConfig {
  /** End date/time in ISO format (e.g., "2026-01-05T15:24:01") */
  endTime?: string;
  /** IANA timezone (e.g., "America/Los_Angeles", "Europe/London") */
  timezone?: string;
  /** Locale for labels (e.g., "en", "es", "fr", "de", "zh", "ja", "ko") */
  locale?: string;
  /** Show days segment */
  showDays?: boolean;
  /** Show hours segment */
  showHours?: boolean;
  /** Show minutes segment */
  showMinutes?: boolean;
  /** Show seconds segment */
  showSeconds?: boolean;
  /** Layout direction */
  layout?: "horizontal" | "vertical";
  /** Show colon separators between segments */
  showSeparator?: boolean;
  /** Background color (hex e.g., "#FFFFFF" or "transparent") */
  backgroundColor?: string;
  /** Digit text color (hex) */
  digitColor?: string;
  /** Digit font size in pixels (16-80) */
  digitFontSize?: number;
  /** Digit font family (e.g., "Open Sans", "Arial", "Georgia") */
  digitFontFamily?: string;
  /** Label text color (hex) */
  labelColor?: string;
  /** Label font size in pixels (10-40) */
  labelFontSize?: number;
  /** Label font family */
  labelFontFamily?: string;
  /** Show text labels below digits (e.g., "Days", "Hours") */
  showLabels?: boolean;
  /** Gap between segments in pixels (10-100) */
  gap?: number;
}

/** Timer countdown property config */
export interface TimerCountdownPropertyConfig extends ToolPropertyConfig {
  value?: TimerCountdownConfig;
}

/** Timer tool configuration with typed countdown properties */
export interface TimerToolConfig extends ToolConfig {
  /** Property overrides with typed countdown config */
  properties?: Record<string, ToolPropertyConfig> & {
    countdown?: TimerCountdownPropertyConfig;
  };
}

export interface ToolsConfig {
  /** Text tool */
  text?: ToolConfig;
  /** Paragraph tool */
  paragraph?: ToolConfig;
  /** Heading tool */
  heading?: ToolConfig;
  /** Button tool */
  button?: ToolConfig;
  /** Image tool */
  image?: ToolConfig;
  /** Divider tool */
  divider?: ToolConfig;
  /** Menu/Navigation tool */
  menu?: ToolConfig;
  /** Custom HTML tool */
  html?: ToolConfig;
  /** Social media icons tool */
  social?: ToolConfig;
  /** Video embed tool */
  video?: ToolConfig;
  /** Table tool */
  table?: ToolConfig;
  /** Countdown timer tool */
  timer?: TimerToolConfig;
  /** Form tool */
  form?: ToolConfig;
  /** Spacer tool */
  spacer?: ToolConfig;
  /** Additional custom tools */
  [key: string]: ToolConfig | undefined;
}

// ============================================================================
// EDITOR BEHAVIOR CONFIG
// ============================================================================

/**
 * Editor behavior configuration.
 * Controls editor constraints, interactions, and workspace behavior.
 */
export interface EditorBehaviorConfig {
  /** Minimum number of rows allowed in body (default: 0) */
  minRows?: number;
  /** Maximum number of rows allowed in body (default: unlimited) */
  maxRows?: number | null;
  /** Content type: 'module' for single-row mode */
  contentType?: EditorContentType;
  /**
   * Auto-select element when dropped onto canvas from side panel
   * @default false
   */
  autoSelectOnDrop?: boolean;
  /** Show confirmation dialog before deleting elements (default: false) */
  confirmOnDelete?: boolean;
  /** Show/hide the Rows accordion in the Modules tab (default: true) */
  rows?: boolean;
  /** Editor title (shown in header if applicable) */
  title?: string;
}

// ============================================================================
// FEATURES CONFIG
// ============================================================================

/** Module features config */
export interface ModuleFeaturesConfig {
  /** Enable save row as module button */
  saveRowAsModule?: boolean;
}

/** Stock images config */
export interface StockImagesConfig {
  /** Enable stock images */
  enabled: boolean;
  /** Safe search filter */
  safeSearch?: boolean;
  /** Default search term */
  defaultSearchTerm?: string;
}

/** Export features config */
export interface ExportFeaturesConfig {
  /** Enable HTML export */
  html?: boolean;
  /** Enable JSON export */
  json?: boolean;
  /** Enable PDF export */
  pdf?: boolean;
  /** Enable image export */
  image?: boolean;
  /** Enable ZIP export */
  zip?: boolean;
}

/** Display conditions config */
export interface DisplayConditionsConfig {
  /** Enable/disable display conditions feature (default: false) */
  enabled?: boolean;
  /** Pre-defined conditions users can select from */
  conditions?: Array<{
    type: string;
    label: string;
    description?: string;
    before: string;
    after: string;
  }>;
  /** Permission settings */
  permissions?: {
    canSelect?: boolean;
    canAdd?: boolean;
    canEdit?: boolean;
    canRemove?: boolean;
  };
}

// Features config
export interface FeaturesConfig {
  /**
   * Enable AMP4Email output for email mode.
   * @default false
   */
  amp?: boolean;
  /** Enable preview functionality */
  preview?: boolean;
  /** Enable undo/redo */
  undoRedo?: boolean;
  /** Enable responsive design view toggles (desktop/mobile) */
  responsiveDesign?: boolean;
  /**
   * Enable/disable inline image editor.
   * @default undefined
   */
  imageEditor?: boolean;
  /** Enable audit trail */
  audit?: boolean;
  /** Stock images config */
  stockImages?: boolean | StockImagesConfig;
  /** Enable user uploads */
  userUploads?: boolean;
  /**
   * Show the File Manager modal in the editor.
   * @default true
   */
  fileManager?: boolean;
  /** Enable smart merge tags */
  smartMergeTags?: boolean;
  /**
   * Show special links in the text editor toolbar.
   * @default true
   */
  specialLinks?: boolean;
  /**
   * Show language selector dropdown in the editor side panel.
   * @default true
   */
  languageSelector?: boolean;
  /** Export options */
  export?: ExportFeaturesConfig;
  /**
   * Enable modules feature (save row as module, synced modules, etc.)
   * @default false
   */
  modules?: boolean | ModuleFeaturesConfig;
  /**
   * Enable locked header row injected from SDK.
   * @default false
   */
  header?: boolean;
  /**
   * Enable locked footer row injected from SDK.
   * @default false
   */
  footer?: boolean;
  /**
   * Show the preheader text input in the Styles panel (email builder).
   * @default true
   */
  preheaderText?: boolean;
  /**
   * Team collaboration features (commenting, reviewer role, etc.)
   * @default false
   */
  collaboration?: boolean | CollaborationFeaturesConfig;
  /**
   * Enable/disable dynamic image feature on the image tool.
   * When `false`, explicitly disables dynamic image even if the plan allows it.
   * When `undefined` or `true`, defers to the plan-level permission.
   * @default undefined
   */
  dynamicImage?: boolean;
}

// ============================================================================
// AI CONFIG
// ============================================================================

export type AIMode = "dragble" | "external" | "disabled";

// ── AI Image Generation Types ──

/** Parameters for AI image generation */
export interface AIImageGenerationParams {
  /** Text prompt describing the desired image */
  prompt: string;
  /** Negative prompt - what to avoid in the image */
  negativePrompt?: string;
  /** Image style/theme */
  style?:
    | "realism"
    | "minimalism"
    | "retro"
    | "lettering"
    | "fantasy"
    | "modern"
    | "photographic";
  /** Aspect ratio of the generated image */
  aspectRatio?: "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
  /** Number of images to generate (1-4) */
  count?: number;
}

/** Result from AI image generation */
export interface AIImageGenerationResult {
  /** Array of generated images */
  images: Array<{
    /** URL or base64 of generated image */
    url: string;
    /** Whether URL is base64 encoded */
    isBase64?: boolean;
    /** Generation ID for tracking */
    generationId?: string;
    /** Revised/enhanced prompt used by AI */
    revisedPrompt?: string;
  }>;
  /** Error message if generation failed */
  error?: string;
}

/** Callback for AI image generation */
export type OnAIImageGenerateCallback = (
  params: AIImageGenerationParams,
) => Promise<AIImageGenerationResult>;

/** Configuration for AI image generation feature */
export interface AIImageGenerationConfig {
  /** Whether this feature is enabled */
  enabled?: boolean;
  /** Callback for external AI image generation (text-to-image) */
  onGenerate?: OnAIImageGenerateCallback;
  /** Callback for external image search (stock images) */
  onSearch?: OnImageSearchCallback;
}

// ── AI Alt Text Types ──

/** Parameters for AI alt text generation */
export interface AIAltTextParams {
  /** URL of the image to analyze */
  imageUrl: string;
  /** Context where image is used (optional) */
  context?: string;
  /** Maximum character length for alt text */
  maxLength?: number;
}

/** Result from AI alt text generation */
export interface AIAltTextResult {
  /** Generated alt text */
  altText: string;
  /** Longer description for screen readers */
  description?: string;
  /** Error message if generation failed */
  error?: string;
}

/** Callback for AI alt text generation */
export type OnAIAltTextGenerateCallback = (
  params: AIAltTextParams,
) => Promise<AIAltTextResult>;

/** Configuration for AI alt text feature */
export interface AIAltTextConfig {
  /** Whether this feature is enabled */
  enabled?: boolean;
  /** Callback for external AI alt text generation */
  onGenerate?: OnAIAltTextGenerateCallback;
}

// ── Smart Heading Types ──

/** Parameters for smart heading generation */
export interface SmartHeadingParams {
  /** Topic or context for the heading */
  context: string;
  /** Tone of the headings */
  tone?: "professional" | "casual" | "urgent" | "playful" | "inspirational";
  /** Heading level */
  headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Industry context for terminology */
  industry?: string;
  /** Number of variations to generate */
  count?: number;
}

/** Result from smart heading generation */
export interface SmartHeadingResult {
  /** Array of heading variations */
  headings: string[];
  /** AI's recommended best option */
  selected?: string;
  /** Error message if generation failed */
  error?: string;
}

/** Callback for smart heading generation */
export type OnSmartHeadingGenerateCallback = (
  params: SmartHeadingParams,
) => Promise<SmartHeadingResult>;

/** Configuration for smart heading feature */
export interface SmartHeadingConfig {
  /** Whether this feature is enabled */
  enabled?: boolean;
  /** Callback for external smart heading generation */
  onGenerate?: OnSmartHeadingGenerateCallback;
}

// ── Smart Text Types ──

/** Parameters for smart text generation */
export interface SmartTextParams {
  /** Topic or subject for the text */
  topic: string;
  /** Purpose of the text */
  purpose?: "inform" | "persuade" | "engage" | "describe" | "explain";
  /** Tone of the text */
  tone?:
    | "professional"
    | "casual"
    | "urgent"
    | "playful"
    | "inspirational"
    | "friendly";
  /** Text length: short (1-2 sentences), medium (3-4), long (5-6) */
  length?: "short" | "medium" | "long";
  /** Industry context for terminology */
  industry?: string;
  /** Keywords to include if possible */
  keywords?: string[];
}

/** Result from smart text generation */
export interface SmartTextResult {
  /** Generated paragraph text */
  text: string;
  /** Alternative versions */
  alternatives?: string[];
  /** Error message if generation failed */
  error?: string;
}

/** Callback for smart text generation */
export type OnSmartTextGenerateCallback = (
  params: SmartTextParams,
) => Promise<SmartTextResult>;

/** Configuration for smart text feature */
export interface SmartTextConfig {
  /** Whether this feature is enabled */
  enabled?: boolean;
  /** Callback for external smart text generation */
  onGenerate?: OnSmartTextGenerateCallback;
}

// ── Smart Button Types ──

/** Parameters for smart button text generation */
export interface SmartButtonParams {
  /** What the button does (e.g., 'sign up', 'download', 'buy') */
  action: string;
  /** Additional context about the offer/product */
  context?: string;
  /** Urgency level */
  urgency?: "low" | "medium" | "high";
  /** Button text style */
  style?: "action" | "benefit" | "curiosity" | "value";
  /** Number of variations to generate */
  count?: number;
}

/** Result from smart button text generation */
export interface SmartButtonResult {
  /** Array of button text variations */
  buttons: string[];
  /** Recommended best option */
  selected?: string;
  /** Error message if generation failed */
  error?: string;
}

/** Callback for smart button text generation */
export type OnSmartButtonGenerateCallback = (
  params: SmartButtonParams,
) => Promise<SmartButtonResult>;

/** Configuration for smart button feature */
export interface SmartButtonConfig {
  /** Whether this feature is enabled */
  enabled?: boolean;
  /** Callback for external smart button generation */
  onGenerate?: OnSmartButtonGenerateCallback;
}

// ── Image Search Types ──

/** Parameters for image search */
export interface ImageSearchParams {
  /** Search query */
  query: string;
  /** Image orientation */
  orientation?: "landscape" | "portrait" | "square";
  /** Color filter */
  color?: string;
  /** Number of results per page */
  perPage?: number;
  /** Page number for pagination */
  page?: number;
  /** Image sources to search */
  sources?: ("unsplash" | "pixabay" | "pexels")[];
}

/** Single image result from search */
export interface ImageSearchResultItem {
  /** Image ID from source */
  id: string;
  /** Image source */
  source: string;
  /** Full-size URL */
  url: string;
  /** Thumbnail URL */
  thumbUrl: string;
  /** Image width in pixels */
  width: number;
  /** Image height in pixels */
  height: number;
  /** Alt text or description */
  alt: string;
  /** Photographer name */
  photographer?: string;
  /** Photographer profile URL */
  photographerUrl?: string;
  /** Direct download URL */
  downloadUrl?: string;
  /** License type */
  license?: string;
}

/** Result from image search */
export interface ImageSearchResult {
  /** Array of image results */
  images: ImageSearchResultItem[];
  /** Total number of results found */
  total: number;
  /** Original search query */
  query: string;
  /** Error message if search failed */
  error?: string;
}

/** Callback for image search */
export type OnImageSearchCallback = (
  params: ImageSearchParams,
) => Promise<ImageSearchResult>;

// ── Feature-level AI configuration ──

export interface AIFeaturesConfig {
  /** AI image generation configuration */
  imageGeneration?: AIImageGenerationConfig;
  /** AI alt text generation configuration */
  altText?: AIAltTextConfig;
  /** Smart heading generation configuration */
  smartHeading?: SmartHeadingConfig;
  /** Smart text generation configuration */
  smartText?: SmartTextConfig;
  /** Smart button text generation configuration */
  smartButton?: SmartButtonConfig;
}

/**
 * Main AI configuration for the SDK
 *
 * @example Disable all AI features
 * ```typescript
 * ai: { mode: 'disabled' }
 * ```
 *
 * @example Use Pexelize AI (default)
 * ```typescript
 * ai: { mode: 'dragble' }
 * ```
 *
 * @example External AI with custom callbacks
 * ```typescript
 * ai: {
 *   mode: 'external',
 *   features: {
 *     imageGeneration: {
 *       enabled: true,
 *       onGenerate: async (params) => { ... }
 *     },
 *     altText: {
 *       enabled: true,
 *       onGenerate: async (params) => { ... }
 *     }
 *   }
 * }
 * ```
 */
export interface AIConfig {
  /**
   * Global AI mode
   * - 'dragble': Use Pexelize AI backend for all features (default)
   * - 'external': Use customer-provided callbacks for all features
   * - 'disabled': Disable all AI features
   *
   * Individual features can override this mode via `features` config.
   */
  mode?: AIMode;
  /**
   * Feature-level configuration.
   * Allows fine-grained control over each AI feature.
   * Features with callbacks defined will use external mode regardless of global mode.
   */
  features?: AIFeaturesConfig;
}

// ============================================================================
// COLLABORATION TYPES
// ============================================================================

/**
 * Role assigned to a user in the collaboration context.
 */
export type CollaborationRole = "editor" | "reviewer";

/**
 * Types of comment events emitted through the onComment callback.
 */
export type CommentActionType =
  | "NEW_COMMENT"
  | "COMMENT_EDITED"
  | "COMMENT_DELETED"
  | "COMMENT_THREAD_RESOLVED"
  | "COMMENT_THREAD_REOPENED";

/**
 * Represents a user returned by the getMentions callback.
 */
export interface MentionUser {
  /** Unique handle identifying the user (e.g., "@jane") */
  userHandle: string;
  /** Display name of the user */
  username: string;
  /** Optional hex color for visual identification in the mentions list */
  userColor?: string;
}

/**
 * Represents a single comment stored in the design JSON.
 */
export interface DesignComment {
  /** The text content of the comment */
  content: string;
  /** null for root comments, UUID string for replies */
  parentCommentId: string | null;
  /** The ROW element ID this comment is attached to */
  elementId: string;
  /** Array of userHandle strings mentioned in this comment */
  mentions: string[];
  /** Array of child comment UUIDs (replies to this comment) */
  responses: string[];
  /** ISO 8601 timestamp of when the comment was created */
  timestamp: string;
  /** The user who authored this comment */
  author: {
    userHandle: string;
    username: string;
    userColor: string;
  };
  /** Whether the element this comment is attached to has been deleted */
  isElementDeleted: boolean;
  /** Whether this comment thread is resolved (only present on root comments) */
  isResolved?: boolean;
  /** Whether this comment was auto-generated by the system */
  isAutoGenerated?: boolean;
}

/**
 * Payload passed to the onComment callback when a comment event occurs.
 */
export interface CommentAction {
  /** The type of comment event that occurred */
  type: CommentActionType;
  /** The comment that triggered this action */
  comment: {
    id: string;
    content: string;
    elementId: string;
    parentCommentId: string | null;
    author: {
      userHandle: string;
      username: string;
      userColor: string;
    };
    timestamp: string;
  };
  /** Users mentioned in this comment action */
  mentions: Array<{ userHandle: string; username: string }>;
  /** Full map of all comments in the design, keyed by comment UUID */
  comments: Record<string, DesignComment>;
}

/**
 * Configuration for the commenting sub-feature within collaboration.
 */
export interface CollaborationCommentingConfig {
  /** Whether commenting is enabled (defaults to true when collaboration is enabled) */
  enabled?: boolean;
  /** Whether @mentions are enabled in comments (defaults to true) */
  mentions?: boolean;
  /**
   * Callback to fetch users matching a search query for @mentions.
   * @param search - The search string typed after "@"
   * @returns Promise resolving to array of matching users
   */
  getMentions?: (search: string) => Promise<MentionUser[]>;
}

/**
 * Main configuration interface for the team collaboration feature.
 */
export interface CollaborationFeaturesConfig {
  /** Whether collaboration features are enabled (defaults to false) */
  enabled?: boolean;
  /** The role of the current user (defaults to 'editor') */
  role?: CollaborationRole;
  /**
   * Commenting configuration.
   * - `true`: Enable commenting with default settings
   * - `false`: Disable commenting
   * - `CollaborationCommentingConfig`: Fine-grained commenting configuration
   */
  commenting?: boolean | CollaborationCommentingConfig;
  /**
   * Callback invoked when a comment event occurs in the editor.
   */
  onComment?: (action: CommentAction) => void;
}

/**
 * Represents the current user in the collaboration context.
 */
export interface CollaborationUser {
  /** Unique handle identifying the user (e.g., "@john") */
  userHandle: string;
  /** Display name of the user */
  username: string;
  /** Hex color assigned to the user for visual identification */
  userColor: string;
}

/**
 * Serialized collaboration config (without callbacks, for postMessage).
 */
export interface SerializedCollaborationConfig {
  enabled: boolean;
  role: CollaborationRole;
  commenting: {
    enabled: boolean;
    mentions: boolean;
    hasMentionsCallback: boolean;
  };
}

/**
 * User information for session identity.
 */
export interface UserInfo {
  /** Unique user ID */
  id?: string;
  /** User email */
  email?: string;
  /** Display name */
  name?: string;
  /**
   * User's avatar/highlight color for collaboration features.
   * @example '#3b82f6'
   */
  color?: string;
  /** Additional custom fields */
  [key: string]: unknown;
}

// ============================================================================
// EXPORT TYPES
// ============================================================================

/**
 * Options for the `exportHtml()` SDK method.
 */
export interface ExportHtmlOptions {
  /** Page title for the exported HTML (web/popup modes only) */
  title?: string;
  /** If true, request minified HTML (plan-gated) */
  minify?: boolean;
}

export interface ExportHtmlData {
  html: string;
  design: DesignJson;
  chunks?: { css: string; js: string; body: string };
  /** Popup export mode used. Only present in popup mode. */
  exportMode?: PopupExportMode;
  /** The popup ID used in HTML element IDs. Only present in popup mode. */
  popupId?: string;
  /** Popup configuration values from the template. Only present in popup mode. */
  popupValues?: PopupValues;
}

export interface ExportPlainTextData {
  design: DesignJson;
  text: string;
}

export interface ExportImageOptions {
  /** Image format — "png" or "jpg" */
  format?: "png" | "jpg";
  /** Viewport width in CSS pixels (100–2000) */
  width?: number;
  /** Viewport height. null = auto-height (used with fullPage=true) */
  height?: number | null;
  /** Capture full scrollable page vs viewport only (default true) */
  fullPage?: boolean;
  /** JPEG quality 1–100, ignored for PNG (default 90) */
  quality?: number;
  /** Retina scale factor 1–3 (default 2 for crisp output) */
  deviceScaleFactor?: number;
  /** If true, upload to storage and return URL; else return blob URL (default false) */
  saveToStorage?: boolean;
  /** Merge tag replacements applied before rendering */
  mergeTags?: Record<string, string>;
}

export interface ExportImageData {
  design: DesignJson;
  /** Hosted URL (when saveToStorage is true) */
  url?: string;
  /** Base64 data-URL (when saveToStorage is false / default) */
  imageData?: string;
}

export interface ExportPdfOptions {
  /** Page size preset */
  pageSize?: "full" | "letter" | "a4" | "a3";
  /** Page orientation. Ignored for "full" page size */
  orientation?: "portrait" | "landscape";
  /** Whether to include CSS background colors/images (default true) */
  printBackground?: boolean;
  /** Page margins in CSS units */
  margin?: { top?: string; right?: string; bottom?: string; left?: string };
  /** If true, upload to storage and return URL; else return blob URL (default false) */
  saveToStorage?: boolean;
  /** Merge tag replacements applied before rendering */
  mergeTags?: Record<string, string>;
}

export interface ExportPdfData {
  design: DesignJson;
  /** Hosted URL (when saveToStorage is true) */
  url?: string;
  /** Base64 data-URL (when saveToStorage is false / default) */
  pdfData?: string;
}

export interface ExportZipOptions {
  /** Folder name for images inside the ZIP archive (default "images") */
  imageFolder?: string;
}

export interface ExportZipData {
  design: DesignJson;
  /** Base64 data-URL of the ZIP archive */
  zipData?: string;
}

// Popup export types
export interface PopupHtmlExportOptions {
  /** Export mode: 'full' for standalone HTML, 'partial' for embeddable fragment */
  mode?: PopupExportMode;
  /** Custom popup ID for CSS scoping */
  popupId?: string;
}

/**
 * @deprecated Use `ExportHtmlData` instead — `exportHtml()` now handles popup mode automatically.
 */
export interface ExportPopupHtmlData {
  design: DesignJson;
  html: string;
  exportMode: PopupExportMode;
  popupId: string;
  popupValues: PopupValues;
}

// ============================================================================
// EXTERNAL STORAGE TYPES
// ============================================================================

/** External asset in the file manager */
export interface ExternalAsset {
  /** Unique asset identifier */
  id: string;
  /** Asset URL */
  url: string;
  /** Thumbnail URL (optional, falls back to url) */
  thumbUrl?: string;
  /** Asset name / filename */
  name?: string;
  /** File size in bytes */
  size?: number;
  /** MIME type */
  type?: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
  /** Parent folder ID */
  folderId?: string;
  /** Creation timestamp */
  createdAt?: string;
  /** Additional metadata */
  [key: string]: unknown;
}

/** External folder in the file manager */
export interface ExternalFolder {
  /** Unique folder identifier */
  id: string;
  /** Folder name */
  name: string;
  /** Parent folder ID (null for root) */
  parentId?: string | null;
  /** Number of assets in folder */
  assetCount?: number;
  /** Number of subfolders */
  folderCount?: number;
  /** Creation timestamp */
  createdAt?: string;
  /** Additional metadata */
  [key: string]: unknown;
}

/** Parameters for loading assets */
export interface LoadAssetsParams {
  /** Folder ID to load assets from (null for root) */
  folderId?: string | null;
  /** Search query string */
  query?: string;
  /** Page number for pagination */
  page?: number;
  /** Number of items per page */
  perPage?: number;
  /** Sort field */
  sortBy?: string;
  /** Sort direction */
  sortOrder?: "asc" | "desc";
}

/** Result from loading assets */
export interface LoadAssetsResult {
  /** Array of assets */
  assets: ExternalAsset[];
  /** Total number of assets (for pagination) */
  total: number;
  /** Whether there are more pages */
  hasMore?: boolean;
}

/** Result from loading folders */
export interface LoadFoldersResult {
  /** Array of folders */
  folders: ExternalFolder[];
}

/** Parameters for creating a folder */
export interface CreateFolderParams {
  /** Folder name */
  name: string;
  /** Parent folder ID (null for root) */
  parentId?: string | null;
}

/** Result from creating a folder */
export interface CreateFolderResult {
  /** The created folder */
  folder: ExternalFolder;
}

/** File info for presigned URL upload */
export interface FileInfo {
  /** File name */
  name: string;
  /** MIME type */
  type: string;
  /** File size in bytes */
  size: number;
}

/** Result from presigned upload URL generation */
export interface PresignedUploadResult {
  /** The presigned upload URL */
  url: string;
  /** HTTP method to use (default: PUT) */
  method?: string;
  /** Additional headers to send */
  headers?: Record<string, string>;
  /** Form fields (for multipart/form-data) */
  fields?: Record<string, string>;
}

/** Uploaded file info returned after successful upload */
export interface UploadedFileInfo {
  /** URL of the uploaded file */
  url: string;
  /** File name */
  name?: string;
  /** File size in bytes */
  size?: number;
  /** MIME type */
  type?: string;
  /** Image width in pixels */
  width?: number;
  /** Image height in pixels */
  height?: number;
}

/** Callback to get a presigned upload URL */
export type GetPresignUrlCallback = (
  file: FileInfo,
  folderId?: string | null,
) => Promise<PresignedUploadResult>;

/** Callback for image/file upload */
export type OnUploadCallback = (
  file: File,
  folderId?: string | null,
) => Promise<UploadedFileInfo>;

/** Callback for loading assets from external storage */
export type OnLoadAssetsCallback = (
  params: LoadAssetsParams,
) => Promise<LoadAssetsResult>;

/** Callback for deleting an asset from external storage */
export type OnDeleteAssetCallback = (
  assetId: string,
) => Promise<{ success: boolean; error?: string }>;

/** Callback for loading folders from external storage */
export type OnLoadFoldersCallback = (
  parentId?: string | null,
) => Promise<LoadFoldersResult>;

/** Callback for creating a folder in external storage */
export type OnCreateFolderCallback = (
  params: CreateFolderParams,
) => Promise<CreateFolderResult>;

/** Callback for deleting a folder from external storage */
export type OnDeleteFolderCallback = (
  folderId: string,
) => Promise<{ success: boolean; error?: string }>;

/**
 * Configuration for external asset storage.
 * Used when `assetStorage.mode` is "external".
 */
export interface ExternalStorageConfig {
  /** Storage mode */
  mode: "external";
  /** Callback to get a presigned upload URL */
  getPresignUrl?: GetPresignUrlCallback;
  /** Callback for uploading a file */
  onUpload?: OnUploadCallback;
  /** Callback for loading assets */
  onLoadAssets?: OnLoadAssetsCallback;
  /** Callback for deleting an asset */
  onDeleteAsset?: OnDeleteAssetCallback;
  /** Callback for loading folders */
  onLoadFolders?: OnLoadFoldersCallback;
  /** Callback for creating a folder */
  onCreateFolder?: OnCreateFolderCallback;
  /** Callback for deleting a folder */
  onDeleteFolder?: OnDeleteFolderCallback;
}

/** Image upload result returned from upload callbacks */
export interface ImageUploadResult {
  /** URL of the uploaded image */
  url?: string;
  /** Error message if upload failed */
  error?: string;
}

// ============================================================================
// VALIDATION TYPES
// ============================================================================

/** Validator function signature */
export type ValidatorFunction = (
  info: Record<string, unknown>,
) => ValidationError[] | Promise<ValidationError[]>;

/** Validation result */
export interface ValidationResult {
  /** Whether validation passed */
  valid: boolean;
  /** Validation errors */
  errors: ValidationError[];
}

/** Detailed validation result with additional info */
export interface DetailedValidationResult extends ValidationResult {
  /** Warnings (non-blocking) */
  warnings?: ValidationError[];
  /** Info messages */
  info?: ValidationError[];
}

/** Options for template validation */
export interface ValidateTemplateOptions {
  /** Design JSON to validate */
  design?: DesignJson;
  /** Include HTML in validation context */
  includeHtml?: boolean;
}

/** Options for tool validation */
export interface ValidateToolOptions {
  /** Tool type to validate */
  toolType?: string;
  /** Tool values to validate */
  values?: Record<string, unknown>;
}

/** Validation error */
export interface ValidationError {
  /** Error identifier */
  id?: string;
  /** Error severity */
  severity?: AuditSeverity;
  /** Error title */
  title?: string;
  /** Error description */
  description?: string;
  /** Error icon */
  icon?: string | object;
  /** Whether error is dismissable */
  dismissable?: boolean;
  /** Tool location info */
  tool?: { type: string; name?: string; slug?: string };
  /** Element location info */
  location?: { collection: string; id: string | number };
}

// ============================================================================
// EDITOR STATE
// ============================================================================

/** Current editor state */
export interface EditorState {
  /** Whether the editor is ready */
  ready: boolean;
  /** Whether the editor is loading */
  loading: boolean;
  /** Current editor mode */
  editorMode: EditorMode;
  /** Current design mode */
  designMode: "edit" | "live";
  /** Current view mode (desktop/tablet/mobile) */
  viewMode: ViewMode;
  /** Whether the design has unsaved changes */
  dirty: boolean;
  /** Whether undo is available */
  canUndo: boolean;
  /** Whether redo is available */
  canRedo: boolean;
}

// ============================================================================
// EVENT DATA TYPES
// ============================================================================

/** Data emitted by the design:updated event */
export interface DesignUpdatedEvent {
  /** Updated design JSON */
  design: DesignJson;
  /** Type of change that triggered the update */
  type?: string;
}

/** Data emitted by the content:modified event */
export interface ContentModifiedEvent {
  /** Content element ID */
  contentId: string;
  /** Content type */
  type: string;
  /** Changed property values */
  values?: Record<string, unknown>;
}

/** Data emitted by the element:selected event */
export interface ElementSelectedEvent {
  /** Element ID */
  id: string;
  /** Element type (row, column, content) */
  type: string;
  /** Element values */
  values?: Record<string, unknown>;
}

/** Data emitted by the design:loaded event */
export interface DesignLoadedEvent {
  /** Loaded design JSON */
  design: DesignJson;
}

// ============================================================================
// DISPLAY CONDITION TYPES
// ============================================================================

/** Display condition definition */
export interface DisplayConditionDefinition {
  /** Condition type identifier */
  type: string;
  /** Display label */
  label: string;
  /** Description */
  description?: string;
  /** HTML/template before the conditional content */
  before: string;
  /** HTML/template after the conditional content */
  after: string;
}

/** Display conditions permission settings */
export interface DisplayConditionsPermissions {
  /** Whether users can select from predefined conditions */
  canSelect?: boolean;
  /** Whether users can add new conditions */
  canAdd?: boolean;
  /** Whether users can edit existing conditions */
  canEdit?: boolean;
  /** Whether users can remove conditions */
  canRemove?: boolean;
}

/** Display condition applied to a row */
export interface RowDisplayCondition {
  /** Condition ID */
  id?: string;
  /** Condition name */
  name?: string;
  /** Condition type */
  type?: string;
  /** Condition label */
  label?: string;
  /** Condition description */
  description?: string;
  /** HTML before conditional content */
  before?: string;
  /** HTML after conditional content */
  after?: string;
  /** Whether this is a custom condition */
  isCustom?: boolean;
  /** Source condition ID this was derived from */
  sourceConditionId?: string;
}

/**
 * Legacy display condition.
 * @deprecated Use DisplayConditionDefinition instead.
 */
export interface DisplayCondition {
  type: string;
  label: string;
  description?: string;
  before: string;
  after: string;
}

// ============================================================================
// MULTI-LANGUAGE CONFIG
// ============================================================================

/** Multi-language configuration */
export interface MultiLanguageConfig {
  /** Available languages */
  languages: Language[];
  /** Default language code */
  defaultLanguage?: string;
  /** Whether to show the language selector */
  showSelector?: boolean;
}

// ============================================================================
// BLANK DESIGN & BODY VALUES OPTIONS
// ============================================================================

/** Options for loading a blank design */
export interface BlankDesignOptions {
  /** Preserve undo/redo history */
  preserveHistory?: boolean;
  /** Default body values to apply */
  bodyValues?: Record<string, unknown>;
}

/** Options for setting body values */
export interface SetBodyValuesOptions {
  /** Whether to trigger a design change event */
  triggerChange?: boolean;
}

// ============================================================================
// CALLBACK TYPE UNION
// ============================================================================

/** Union of all callback type names */
export type CallbackType =
  | "onReady"
  | "onLoad"
  | "onChange"
  | "onError"
  | "linkClick"
  | "onModuleSave"
  | "onPreview"
  | "onHeaderRowClick"
  | "onFooterRowClick"
  | "onLockedRowClick"
  | "onContentDialog";

// ============================================================================
// CALLBACK TYPES
// ============================================================================

/** Link click callback data */
export interface LinkClickData {
  url?: string;
  target?: string;
}

/** Editor error data */
export interface EditorError {
  /** Error code */
  code?: string;
  /** Human-readable error message */
  message: string;
  /** Additional error details */
  details?: unknown;
}

/** Design data passed to onLoad/onChange callbacks */
export interface DesignData {
  /** Current design JSON */
  design: DesignJson;
  /** Current HTML */
  html: string;
}

/** @deprecated Use PexelizeCallbacks.onContentDialog instead */
export type ImageUploadCallback = (
  file: File,
  done: (result: { url?: string; error?: string }) => void,
) => void;

// Module save callback types
export interface ModuleSaveData {
  /** Module name (entered by user) */
  name: string;
  /** Module category (entered by user) */
  category: string;
  /** Module type - "standard" or "synced" (selected by user) */
  type: "standard" | "synced";
  /** Module mode - "email" or "web" (determined by editor mode) */
  mode: "email" | "web";
  /** The nested row JSON data with columns and contents */
  data: unknown;
  /** Pre-rendered HTML content */
  html: string;
  /** Schema version of the design */
  schemaVersion: number;
}

export interface ModuleSaveResult {
  /** Whether the save was successful */
  success: boolean;
  /** Error message if save failed */
  error?: string;
  /** The saved module ID (if applicable) */
  moduleId?: string;
}

/**
 * Module save callback function.
 * Must return a Promise — the editor waits for the result.
 */
export type ModuleSaveCallback = (
  data: ModuleSaveData,
) => Promise<ModuleSaveResult>;

/**
 * Information passed to the `onContentDialog` callback.
 */
export interface ContentDialogInfo {
  /** Custom tool type (e.g., "custom#productPicker") */
  toolType: string;
  /** What triggered the dialog: "insert" (dropped) or "edit" (re-opened) */
  action: "insert" | "edit";
  /** Current property values (populated for "edit" action) */
  currentValues?: Record<string, unknown>;
  /** The content element ID in the design */
  contentId: string;
}

/**
 * Result returned from the `onContentDialog` callback.
 */
export interface ContentDialogResult {
  /** New property values to merge into the tool content */
  values?: Record<string, unknown>;
  /** Whether the user cancelled the dialog */
  cancelled?: boolean;
}

/**
 * Built-in callbacks for the SDK.
 */
export interface PexelizeCallbacks {
  /** Called once when the editor is fully loaded and ready */
  onReady?: () => void;
  /** Called when a design is loaded into the editor */
  onLoad?: (data: DesignData) => void | Promise<void>;
  /** Called when the design changes */
  onChange?: (data: DesignData) => void | Promise<void>;
  /** Called when an error occurs in the editor */
  onError?: (error: EditorError) => void | Promise<void>;
  /** Called when a link is clicked in the editor canvas */
  linkClick?: (data: LinkClickData) => void | Promise<void>;
  /** Called when user saves a row as a module (blocking — editor waits) */
  onModuleSave?: (data: ModuleSaveData) => Promise<ModuleSaveResult>;
  /** Called when the user opens preview. Must return the (possibly transformed) HTML. */
  onPreview?: (html: string) => Promise<string>;
  /** Called when the user clicks on the locked header row */
  onHeaderRowClick?: (data: { rowId: string }) => void;
  /** Called when the user clicks on the locked footer row */
  onFooterRowClick?: (data: { rowId: string }) => void;
  /** Called when the user clicks on any other locked row */
  onLockedRowClick?: (data: { rowId: string }) => void;
  /** Called when a custom tool with openOnDrop requests a content dialog (blocking) */
  onContentDialog?: (info: ContentDialogInfo) => Promise<ContentDialogResult>;
}

// ============================================================================
// EDITOR OPTIONS (nested under PexelizeConfig.options)
// ============================================================================

/**
 * Full editor options — all configuration lives under `options` in PexelizeConfig.
 */
export interface EditorOptions {
  /** User information for session and collaboration */
  user?: UserInfo;
  /**
   * UI locale code (BCP 47 format). Selects the built-in translation for the editor interface.
   * Supports 29 built-in languages. Base codes (e.g. `"en"`, `"fr"`) are also accepted.
   * @default "en-US"
   * @example locale: 'fr-FR'
   */
  locale?: LocaleCode;
  /**
   * Custom translation overrides keyed by locale code.
   * Each locale maps translation keys to translated strings,
   * allowing partial or full override of the editor's built-in UI strings.
   *
   * @example
   * ```ts
   * translations: {
   *   'en-US': { 'toolbar.save': 'Save Draft' },
   *   'fr-FR': { 'toolbar.save': 'Enregistrer le brouillon' },
   * }
   * ```
   */
  translations?: Record<string, Record<string, string>>;
  /** Text direction (ltr, rtl) */
  textDirection?: TextDirection;
  /** Template language */
  language?: Language;
  /** Editor iframe height (default: "100%") */
  height?: string | number;
  /** Minimum editor iframe height (default: "500px") */
  minHeight?: string | number;
  /** Merge tags for personalization */
  mergeTags?: MergeTagsConfig;
  /** Special link categories */
  specialLinks?: SpecialLinksConfig;
  /** Custom modules (enhanced reusable content) */
  modules?: Module[];
  /** Display conditions configuration */
  displayConditions?: DisplayConditionsConfig;
  /** Visual customization */
  appearance?: AppearanceConfig;
  /** Tools enable/disable/configuration */
  tools?: ToolsConfig;
  /** Custom tools to register (Pexelize-style, recommended) */
  customTools?: PexelizeToolConfig[];
  /** Fonts configuration */
  fonts?: FontsConfig;
  /** HMAC identity verification */
  identity?: {
    /** User ID for HMAC verification */
    userId?: string;
    /** HMAC signature */
    signature?: string;
    [key: string]: unknown;
  };
  /** Default body values for new designs */
  bodyValues?: {
    backgroundColor?: string;
    backgroundImage?: BackgroundImage;
    contentWidth?: string;
    contentAlign?: "left" | "center";
    fontFamily?: FontFamily;
    textColor?: string;
    linkStyle?: LinkStyle;
    preheaderText?: string;
    [key: string]: unknown;
  };
  /** Header row JSON to inject as a locked, non-editable row at the top */
  header?: unknown;
  /** Footer row JSON to inject as a locked, non-editable row at the bottom */
  footer?: unknown;
  /** Minimum number of rows allowed in the design */
  minRow?: number;
  /** Maximum number of rows allowed in the design */
  maxRow?: number;
  /** Editor behavior settings */
  editor?: EditorBehaviorConfig;
  /** Feature toggles */
  features?: FeaturesConfig;
  /** Asset storage configuration */
  assetStorage?: { mode: "dragble" } | ExternalStorageConfig;
  /** AI features configuration */
  ai?: AIConfig;
}

// ============================================================================
// MAIN SDK CONFIGURATION
// ============================================================================

// Editor event names
export type EditorEventName =
  | "editor:ready"
  | "design:loaded"
  | "design:updated"
  | "design:saved"
  | "content:modified"
  | "content:added"
  | "content:deleted"
  | "row:selected"
  | "row:unselected"
  | "column:selected"
  | "column:unselected"
  | "content:selected"
  | "content:unselected"
  | "preview:shown"
  | "preview:hidden"
  | "image:uploaded"
  | "image:error"
  | "export:html"
  | "export:plainText"
  | "export:image"
  | "save"
  | "save:success"
  | "save:error"
  | "template:requested"
  | "element:selected"
  | "element:deselected"
  | "export"
  | "displayCondition:applied"
  | "displayCondition:removed"
  | "displayCondition:updated";

/**
 * Main SDK initialization configuration.
 *
 * Top-level keys: `containerId`, `editorKey`, `editorMode`,
 * `designMode`, `design`, `popup`, `callbacks`, `options`.
 *
 * All editor configuration (appearance, tools, features, AI, storage, etc.)
 * lives inside the `options` object.
 */
export interface PexelizeConfig {
  // ---- Required ----
  /** Container element ID (required) */
  containerId: string;
  /** Editor key for authentication (required) */
  editorKey: string;

  // ---- Top-level boot params ----
  /** Editor mode (email, web, popup) */
  editorMode?: EditorMode;
  /**
   * Design mode for template permissions.
   * - 'edit': Admin mode — shows "Row Actions" section in properties panel
   * - 'live': End-user mode — enforces row permissions
   * @default 'live'
   */
  designMode?: "edit" | "live";
  /**
   * Initial design to load into the editor.
   * Pass null to explicitly load a blank design.
   */
  design?: DesignJson | null;
  /** Popup builder configuration (only relevant when editorMode is 'popup') */
  popup?: PopupConfig;

  // ---- Callbacks ----
  /** Editor event callbacks */
  callbacks?: PexelizeCallbacks;

  // ---- All editor configuration ----
  /** All editor configuration: appearance, tools, features, AI, storage, etc. */
  options?: EditorOptions;

  // ---- Internal ----
  /** Editor source URL (for enterprise self-hosted editors) */
  editorUrl?: string;
  /** Editor version to use */
  version?: string;
  /** Environment mode */
  environment?: "production" | "development" | "staging";
}

/** Identity for HMAC verification (security). */
export interface IdentityInfo {
  id: string;
  signature: string;
}

// ============================================================================
// CUSTOM TOOL TYPES
// ============================================================================

/**
 * Property definition in the Pexelize-style config.
 */
export interface PexelizePropertyDef {
  /** Display label. If omitted, auto-generated from the key name. */
  label?: string;
  /** Widget type: generic names ("color_picker", "text") or internal types */
  editor: string;
  /** Default value. Extracted into defaultStyles automatically. */
  default?: unknown;
  /** Hide this property on mobile */
  hideOnMobile?: boolean;
  /** Help text shown below the property */
  message?: string;
  /** Editor-specific data (e.g., dropdown options) */
  data?: Record<string, unknown>;
}

/**
 * A property group with a title and optional position.
 */
export interface PexelizePropertyGroup {
  /** Section title displayed in the panel */
  title: string;
  /** Sort position (lower = higher in panel) */
  position?: number;
  /** Properties in this group */
  properties: Record<string, PexelizePropertyDef>;
}

/**
 * Properties can be flat (auto-grouped under "Settings") or explicitly grouped.
 */
export type PexelizeProperties =
  | Record<string, PexelizePropertyDef>
  | Record<string, PexelizePropertyGroup>;

/**
 * Display modes the tool supports.
 */
export type CustomToolDisplayMode = "email" | "web" | "popup";

/**
 * Head injection config for custom tools.
 */
export interface CustomToolHeadConfig {
  /** CSS string or URL to inject into <head> */
  css?: string;
  /** JS string or URL to inject into <head> */
  js?: string;
}

/**
 * Declarative property visibility condition.
 */
export interface PropertyCondition {
  /** Property key to evaluate */
  property: string;
  /** Condition operators */
  equals?: unknown;
  notEquals?: unknown;
  in?: unknown[];
  notIn?: unknown[];
  truthy?: boolean;
  falsy?: boolean;
}

/**
 * Compound condition combining multiple conditions.
 */
export interface CompoundCondition {
  all?: Array<PropertyCondition | CompoundCondition>;
  any?: Array<PropertyCondition | CompoundCondition>;
  not?: PropertyCondition | CompoundCondition;
}

/**
 * Rule for when a property should be shown/hidden.
 */
export interface PropertyStateRule {
  /** Declarative or functional condition */
  show:
    | PropertyCondition
    | CompoundCondition
    | ((values: Record<string, unknown>) => boolean);
}

/**
 * Property states config: maps property keys to visibility rules.
 */
export type PropertyStatesConfig = Record<string, PropertyStateRule>;

/**
 * Cross-property value transformer.
 */
export type TransformerConfig =
  | ((
      values: Record<string, unknown>,
      changedProperty: string,
    ) => Record<string, unknown> | null)
  | Record<string, Record<string, Record<string, unknown>>>;

/**
 * Property editor layout options for custom property editors.
 */
export interface PropertyEditorLayout {
  /** Whether the editor spans full width (no label column) */
  fullWidth?: boolean;
  /** Whether to hide the label */
  hideLabel?: boolean;
  /** Custom height in pixels */
  height?: number;
}

/**
 * Pexelize-style custom tool configuration.
 */
export interface PexelizeToolConfig {
  /** Tool name (camelCase). Becomes the tool ID. */
  name: string;
  /** Display label shown in the side panel */
  label: string;
  /** SVG icon string */
  icon?: string;
  /** Tool category for panel organization */
  category?: "text" | "media" | "interactive" | "advanced" | "layout";
  /** Description shown as tooltip */
  description?: string;
  /** Sort order in the panel */
  order?: number;

  // --- Rendering ---
  /** HTML template string (declarative mode). PRIMARY rendering method. */
  template?: string;
  /** Email-specific template override */
  emailTemplate?: string;
  /** Renderer function (Full JS mode) */
  renderer?: (values: Record<string, unknown>) => string;
  /** Email-specific renderer function */
  emailRenderer?: (values: Record<string, unknown>) => string;

  // --- Properties ---
  /** Property definitions (flat or grouped) */
  properties?: PexelizeProperties;

  // --- Advanced ---
  /** Base tool type to inherit from (default: "html") */
  baseToolType?: string;
  /** Whether to include base tool's existing properties */
  includeBaseProperties?: boolean;
  /** Supported display modes */
  supportedDisplayModes?: CustomToolDisplayMode[];
  /** Maximum instances allowed (0 = unlimited) */
  usageLimit?: number;
  /** Head injection (CSS/JS) */
  head?: CustomToolHeadConfig;
  /** Dynamic property visibility rules */
  propertyStates?: PropertyStatesConfig;
  /** Cross-property value transformer */
  transformer?: TransformerConfig;
  /** Content audit validator */
  validator?: ((info: Record<string, unknown>) => unknown[]) | string;
  /** Auto-open content dialog on drop */
  openOnDrop?: boolean;
  /** Data passed from SDK tools config */
  data?: Record<string, unknown>;
  /**
   * Lifecycle script executed after the tool's HTML is rendered on the canvas.
   */
  script?: (
    container: HTMLElement,
    values: Record<string, unknown>,
  ) => void | (() => void);
  /**
   * URL to a JavaScript file that exports the tool configuration.
   */
  url?: string;
}

// ============================================================================
// CUSTOM WIDGET TYPES
// ============================================================================

/**
 * Context provided to custom widget render/mount/update functions.
 */
export interface WidgetContext {
  /** All property values for the current tool instance */
  values: Record<string, unknown>;
  /** Application data passed via init config */
  data: Record<string, unknown>;
  /** Editor theme information */
  theme: { accentColor: string; mode: "light" | "dark" };
  /** The tool name this widget belongs to */
  toolName: string;
}

/**
 * Callback to update the property value from within a custom widget.
 */
export type UpdateValueFn = (newValue: unknown) => void;

/**
 * Configuration for a custom property editor widget.
 */
export interface PexelizeWidgetConfig {
  /** Unique widget name. Used in property definitions as `editor: "name"`. */
  name: string;

  // --- Mode A: Render function ---
  render?: (
    value: unknown,
    updateValue: UpdateValueFn,
    context: WidgetContext,
  ) => string;
  mount?: (
    node: HTMLElement,
    value: unknown,
    updateValue: UpdateValueFn,
    context: WidgetContext,
  ) => void;
  update?: (node: HTMLElement, value: unknown, context: WidgetContext) => void;
  unmount?: (node: HTMLElement) => void;

  // --- Mode B: URL/iframe ---
  /** URL of the widget page to load in a sandboxed iframe. */
  url?: string;
  /** Fixed height for iframe widgets (in pixels). @default 200 */
  height?: number;

  // --- Layout ---
  /** Layout positioning in the properties panel. @default "inline" */
  layout?: "inline" | "bottom" | "full-width";
}

// ============================================================================
// AUDIT TYPES
// ============================================================================

export type AuditSeverity = "ERROR" | "WARNING" | "INFO";

export interface AuditRule {
  id: string;
  icon?: string | object;
  title: string;
  description: string;
  severity: AuditSeverity;
  dismissable?: boolean;
  labelPath?: string | string[];
  location?: { collection: string; id: string | number };
  tool?: { type: string; name?: string; slug?: string };
}

export interface AuditResult {
  status: "PASS" | "FAIL";
  errors: AuditRule[];
}

export interface AuditOptions {
  /** When true, the current HTML export is included for custom validators */
  includeHtml?: boolean;
}

export type AuditCallback = (result: AuditResult) => void;

// ============================================================================
// SDK INSTANCE INTERFACE
// ============================================================================

export interface DragbleSDK {
  init(config: PexelizeConfig): void;
  destroy(): void;
  isReady(): boolean;

  // Design methods
  loadDesign(design: DesignJson, options?: { preserveHistory?: boolean }): void;
  loadDesignAsync(
    design: DesignJson,
    options?: { preserveHistory?: boolean },
  ): Promise<void>;
  loadBlank(options?: BlankDesignOptions): void;
  saveDesign(callback: (design: DesignJson) => void): void;
  getDesign(): Promise<{ html: string; json: DesignJson }>;

  // Export methods (async-only)
  exportHtml(options?: ExportHtmlOptions): Promise<string>;
  exportJson(): Promise<DesignJson>;
  exportPlainText(): Promise<string>;
  exportImage(options?: ExportImageOptions): Promise<ExportImageData>;
  exportPdf(options?: ExportPdfOptions): Promise<ExportPdfData>;
  exportZip(options?: ExportZipOptions): Promise<ExportZipData>;

  // Popup values
  getPopupValues(): Promise<PopupValues | null>;

  // Merge tags
  setMergeTags(config: MergeTagsConfig): void;
  getMergeTags(): Promise<(MergeTag | MergeTagGroup)[]>;

  // Special links
  setSpecialLinks(config: SpecialLinksConfig): void;
  getSpecialLinks(): Promise<(SpecialLink | SpecialLinkGroup)[]>;

  // Fonts
  setFonts(config: FontsConfig): void;
  getFonts(): Promise<FontsConfig>;

  // Body values
  setBodyValues(values: Record<string, unknown>): void;
  getBodyValues(): Promise<Record<string, unknown>>;

  // Runtime options update
  setOptions(options: Partial<EditorOptions>): void;

  // Configuration
  setAppearance(config: AppearanceConfig): void;
  setToolsConfig(toolsConfig: ToolsConfig): void;
  setEditorMode(mode: EditorMode): void;
  setEditorConfig(config: EditorBehaviorConfig): void;
  getEditorConfig(): Promise<EditorBehaviorConfig>;
  setLocale(locale: LocaleCode, translations?: Record<string, string>): void;
  setTextDirection(direction: TextDirection): void;
  getTextDirection(): Promise<TextDirection>;
  setCustomCSS(css: string[]): void;
  setCustomJS(js: string[]): void;

  // Language
  setLanguage(language: Language): void;
  getLanguage(): Promise<Language | null>;

  // Branding
  setBrandingColors(config: {
    colors?:
      | string[]
      | Array<{
          id: string;
          label?: string;
          colors: string[];
          default?: boolean;
        }>;
    defaultColors?: boolean;
  }): void;

  // Modules
  setModules(modules: Module[]): void;
  setModulesLoading(loading: boolean): void;
  getModules(): Promise<Module[]>;

  // Tabs
  updateTabs(tabs: Record<string, { visible?: boolean }>): void;

  // Display conditions
  setDisplayConditions(config: DisplayConditionsConfig): void;

  // Editor actions
  undo(): void;
  redo(): void;
  canUndo(): Promise<boolean>;
  canRedo(): Promise<boolean>;
  showPreview(device?: ViewMode): void;
  hidePreview(): void;
  save(): void;

  // Custom tools
  registerTool(config: PexelizeToolConfig | unknown): Promise<void>;
  unregisterTool(toolId: string): Promise<void>;
  getTools(): Promise<
    Array<{ id: string; label: string; baseToolType: string }>
  >;

  // Custom widgets
  createWidget(config: PexelizeWidgetConfig | unknown): Promise<void>;
  removeWidget(widgetName: string): Promise<void>;

  // Custom columns
  registerColumns(cells: number[]): void;

  // Collaboration
  showComment(commentId: string): void;
  openCommentPanel(rowId: string): void;

  // Audit
  audit(callback: AuditCallback): void;
  audit(options: AuditOptions, callback: AuditCallback): void;
  audit(options?: AuditOptions): Promise<AuditResult>;

  // Asset management
  uploadImage(
    file: File,
    options?: {
      folderId?: string;
      altText?: string;
      onProgress?: (progress: {
        percent: number;
        loaded: number;
        total: number;
        state: string;
        error?: string;
      }) => void;
    },
  ): Promise<{ success: boolean; url?: string; error?: string }>;
  listAssets(options?: Record<string, unknown>): Promise<{
    assets: Array<Record<string, unknown>>;
    total: number;
  }>;
  deleteAsset(assetId: string): Promise<{ success: boolean; error?: string }>;
  listAssetFolders(parentId?: string): Promise<Array<Record<string, unknown>>>;
  createAssetFolder(
    name: string,
    parentId?: string,
  ): Promise<Record<string, unknown>>;
  getStorageInfo(): Promise<Record<string, unknown>>;

  // Events
  addEventListener<T = unknown>(
    event: EditorEventName,
    callback: (data: T) => void,
  ): () => void;
  removeEventListener<T = unknown>(
    event: EditorEventName,
    callback: (data: T) => void,
  ): void;
}

// ============================================================================
// DRAGBLE ALIASES (public-facing names)
// ============================================================================

export type DragbleConfig = PexelizeConfig;
export type DragbleCallbacks = PexelizeCallbacks;
export type DragbleToolConfig = PexelizeToolConfig;
export type DragbleWidgetConfig = PexelizeWidgetConfig;

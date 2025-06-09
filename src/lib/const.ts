import { generatePluginId } from "./plugin";

export const TARGET = {
  CONTEXT_MENU: generatePluginId("context-menu"),
  METADATA: generatePluginId("metadata"),
  MODAL: generatePluginId("modal"),
  POPOVER: generatePluginId("popover"),
  HP: generatePluginId("hp"),
} as const;

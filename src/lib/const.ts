import { generatePluginId } from "./plugin";

export const TARGET = {
  CONTEXT_MENU: generatePluginId("context-menu"),
  HP_METADATA: generatePluginId("hp-metadata"),
  MODAL: generatePluginId("modal"),
  POPOVER: generatePluginId("popover"),
} as const;

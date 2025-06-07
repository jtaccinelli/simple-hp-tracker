import OBR, { type Item } from "@owlbear-rodeo/sdk";
import { isMetadata } from "./predicates";

export function generatePluginId(path: string) {
  return `rodeo.jtaccinelli.hp-tracker/${path}`;
}

export const PLUGIN_ID = {
  CONTEXT_MENU: generatePluginId("context-menu"),
  METADATA: generatePluginId("metadata"),
  MODAL: generatePluginId("modal"),
  POPOVER: generatePluginId("popover"),
} as const;

export function getMetadataFromItem(item: Item) {
  const metadata = item.metadata[PLUGIN_ID.METADATA];
  return isMetadata(metadata) ? metadata : undefined;
}

export function initialisePoints(ids: string[]) {
  OBR.scene.items.updateItems(ids, (items) => {
    const shouldInitialise = items.every((item) => {
      return !getMetadataFromItem(item);
    });

    for (const item of items) {
      if (shouldInitialise) {
        item.metadata[PLUGIN_ID.METADATA] = {
          isHit: false,
          pointsCurrent: 10,
          pointsTotal: 10,
        };
      } else {
        delete item.metadata[PLUGIN_ID.METADATA];
      }
    }
  });
}

export function updatePointsCurrent(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getMetadataFromItem(item);
      if (!metadata) continue;
      metadata.isHit = true;
      metadata.pointsCurrent = Math.max(
        Math.min(value, metadata.pointsTotal),
        0
      );
    }
  });
}

export function addPointsCurrent(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getMetadataFromItem(item);
      if (!metadata) continue;
      metadata.isHit = true;
      metadata.pointsCurrent += value;
    }
  });
}

export function subtractPointsCurrent(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getMetadataFromItem(item);
      if (!metadata) continue;
      metadata.isHit = true;
      metadata.pointsCurrent -= value;
    }
  });
}

export function updatePointsTotal(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getMetadataFromItem(item);
      if (!metadata) continue;

      if (!metadata.isHit) metadata.pointsCurrent = Math.max(0, value);
      metadata.pointsTotal = Math.max(0, value);
    }
  });
}

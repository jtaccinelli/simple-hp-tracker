import OBR, { type Item } from "@owlbear-rodeo/sdk";
import { isMetadata } from "./predicates";
import { config } from "~/config";
import { TARGET } from "~/lib/const";

export function generatePluginId(path: string) {
  const id = config.id;
  return `${id}/${path}`;
}

export function getMetadataFromItem(item: Item) {
  const metadata = item.metadata[TARGET.HP];
  return isMetadata(metadata) ? metadata : undefined;
}

export function initialisePoints(ids: string[]) {
  OBR.scene.items.updateItems(ids, (items) => {
    const shouldInitialise = items.every((item) => {
      return !getMetadataFromItem(item);
    });

    for (const item of items) {
      if (shouldInitialise) {
        item.metadata[TARGET.HP] = {
          isHit: false,
          pointsCurrent: 10,
          pointsTotal: 10,
        };
      } else {
        delete item.metadata[TARGET.HP];
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

import OBR, { type Item } from "@owlbear-rodeo/sdk";
import { TARGET } from "./const";
import { isHpMetadata } from "./predicates";

export function getHpMetadataFromItem(item: Item) {
  const metadata = item.metadata[TARGET.HP_METADATA];
  return isHpMetadata(metadata) ? metadata : undefined;
}

export function initialiseHp(ids: string[]) {
  OBR.scene.items.updateItems(ids, (items) => {
    const shouldInitialise = items.every((item) => {
      return !getHpMetadataFromItem(item);
    });

    for (const item of items) {
      if (shouldInitialise) {
        item.metadata[TARGET.HP_METADATA] = {
          isHit: false,
          pointsCurrent: 10,
          pointsTotal: 10,
        };
      } else {
        delete item.metadata[TARGET.HP_METADATA];
      }
    }
  });
}

export function updateHpCurrent(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getHpMetadataFromItem(item);
      if (!metadata) continue;
      metadata.isHit = true;
      metadata.pointsCurrent = Math.max(
        Math.min(value, metadata.pointsTotal),
        0
      );
    }
  });
}

export function addHpCurrent(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getHpMetadataFromItem(item);
      if (!metadata) continue;
      metadata.isHit = true;
      const newValue = metadata.pointsCurrent + value;
      metadata.pointsCurrent = Math.min(metadata.pointsTotal, newValue);
    }
  });
}

export function subtractHpCurrent(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getHpMetadataFromItem(item);
      if (!metadata) continue;
      metadata.isHit = true;
      const newValue = metadata.pointsCurrent - value;
      metadata.pointsCurrent = Math.max(0, newValue);
    }
  });
}

export function updateHpTotal(ids: string[], value: number) {
  OBR.scene.items.updateItems(ids, (items) => {
    for (const item of items) {
      const metadata = getHpMetadataFromItem(item);
      if (!metadata) continue;

      if (!metadata.isHit) metadata.pointsCurrent = Math.max(0, value);
      metadata.pointsTotal = Math.max(0, value);
    }
  });
}

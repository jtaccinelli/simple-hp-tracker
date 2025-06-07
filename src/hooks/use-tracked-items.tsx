import OBR, { isImage, type Item } from "@owlbear-rodeo/sdk";
import { useCallback, useEffect, useState } from "react";

import { isMetadata } from "~/lib/predicates";
import { PLUGIN_ID } from "~/lib/plugin";

export type TrackedItem = {
  id: string;
  name: string;
  pointsCurrent: number;
  pointsTotal: number;
  isVisible: boolean;
  isDowned: boolean;
  isBloodied: boolean;
};

export function useTrackedItems() {
  const [items, setItems] = useState<TrackedItem[]>([]);

  const handleUpdateItems = useCallback((items: Item[]) => {
    setItems(() => {
      return items.reduce((array, item) => {
        if (!isImage(item)) return array;
        const metadata = item.metadata[PLUGIN_ID.METADATA];
        if (!isMetadata(metadata)) return array;

        const isBloodied = metadata.pointsCurrent / metadata.pointsTotal < 0.5;
        const isDowned = metadata.pointsCurrent == 0;

        array.push({
          id: item.id,
          name: item.text.plainText || item.name,
          pointsCurrent: metadata.pointsCurrent,
          pointsTotal: metadata.pointsTotal,
          isVisible: item.visible,
          isBloodied: isBloodied,
          isDowned: isDowned,
        });

        return array;
      }, [] as TrackedItem[]);
    });
  }, []);

  useEffect(() => {
    OBR.scene.items.getItems().then(handleUpdateItems);
    return OBR.scene.items.onChange(handleUpdateItems);
  }, []);

  return items;
}

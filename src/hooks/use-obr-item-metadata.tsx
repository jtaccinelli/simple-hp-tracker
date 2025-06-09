import OBR, { isImage, type Item } from "@owlbear-rodeo/sdk";
import { useCallback, useEffect, useState } from "react";

type MapFunction<Metadata, MappedItem extends any> = (
  item: Item,
  metadata: Metadata
) => MappedItem;

export function useOBRItemMetadata<Metadata, MappedItem = any>(
  id: string,
  map: MapFunction<Metadata, MappedItem>
) {
  const [mappedItems, setMappedItems] = useState<MappedItem[]>();

  const handleMapItems = useCallback((items: Item[]) => {
    setMappedItems(() => {
      return items.reduce((array, item) => {
        if (!isImage(item)) return array;

        const metadata = item.metadata[id] as Metadata | undefined;
        if (!metadata) return array;

        const mappedItem = map(item, metadata);
        array.push(mappedItem);
        return array;
      }, [] as MappedItem[]);
    });
  }, []);

  useEffect(() => {
    OBR.scene.items.getItems().then(handleMapItems);
    return OBR.scene.items.onChange(handleMapItems);
  }, []);

  return mappedItems;
}

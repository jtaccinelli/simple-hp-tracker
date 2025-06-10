import { TARGET } from "~/lib/const";
import type { HpMetadata } from "~/lib/predicates";

import { useOBRItemMetadata } from "~/hooks/use-obr-item-metadata";

export type MappedHpItem = {
  id: string;
  name: string;
  pointsCurrent: number;
  pointsTotal: number;
  isVisible: boolean;
  isBloodied: boolean;
  isDowned: boolean;
};

export function useHpItems() {
  return useOBRItemMetadata<HpMetadata, MappedHpItem>(
    TARGET.HP_METADATA,
    (item, metadata) => {
      const isBloodied = metadata.pointsCurrent / metadata.pointsTotal < 0.5;
      const isDowned = metadata.pointsCurrent == 0;

      return {
        id: item.id,
        // @ts-expect-error
        name: item.text.plainText || item.name,
        pointsCurrent: metadata.pointsCurrent,
        pointsTotal: metadata.pointsTotal,
        isVisible: item.visible,
        isBloodied: isBloodied,
        isDowned: isDowned,
      };
    }
  );
}

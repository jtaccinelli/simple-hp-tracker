export function isPlainObject(item: unknown): item is Record<any, unknown> {
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
}

export type HpMetadata = {
  isHit: boolean;
  pointsCurrent: number;
  pointsTotal: number;
};

export function isHpMetadata(metadata: unknown): metadata is HpMetadata {
  return (
    isPlainObject(metadata) &&
    typeof metadata.isHit === "boolean" &&
    typeof metadata.pointsCurrent === "number" &&
    typeof metadata.pointsTotal === "number"
  );
}

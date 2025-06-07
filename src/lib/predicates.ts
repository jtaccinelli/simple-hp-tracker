export function isPlainObject(item: unknown): item is Record<any, unknown> {
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
}

type Metadata = {
  isHit: boolean;
  pointsCurrent: number;
  pointsTotal: number;
};

export function isMetadata(metadata: unknown): metadata is Metadata {
  return (
    isPlainObject(metadata) &&
    typeof metadata.isHit === "boolean" &&
    typeof metadata.pointsCurrent === "number" &&
    typeof metadata.pointsTotal === "number"
  );
}

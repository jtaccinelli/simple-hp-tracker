import { Chip } from "@mui/material";
import type { TrackedItem } from "~/hooks/use-tracked-items";

type Props = {
  item: TrackedItem;
};

export function Status({ item }: Props) {
  if (item.isDowned) {
    return <Chip color="default" label="Down" size="small" />;
  }

  if (item.isBloodied) {
    return <Chip color="error" label="Bloodied" size="small" />;
  }

  return (
    <Chip color="primary" label="Active" variant="outlined" size="small" />
  );
}

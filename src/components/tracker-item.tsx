import { useEffect, useState, type ChangeEvent } from "react";
import {
  Checkbox,
  Chip,
  Input,
  ListItem,
  ListItemText,
  Stack,
} from "@mui/material";

import type { TrackedItem } from "~/hooks/use-tracked-items";
import { updatePointsCurrent, updatePointsTotal } from "~/lib/plugin";

type Props = {
  item: TrackedItem;
  isPlayerView: boolean;
  onSelect: (id: string) => void;
  isSelected: boolean;
};
export function TrackerItem({
  item,
  isPlayerView,
  isSelected,
  onSelect,
}: Props) {
  const [pointsTotal, setPointsTotal] = useState(item.pointsTotal);
  const [pointsCurrent, setPointsCurrent] = useState(item.pointsCurrent);

  function handleCurrentUpdate(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const value = inputValue.length > 0 ? parseInt(inputValue) : 0;
    const cappedValue = Math.min(value, pointsTotal);

    setPointsCurrent(cappedValue);
    updatePointsCurrent([item.id], cappedValue);
  }

  function handleTotalUpdate(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const value = inputValue.length > 0 ? parseInt(inputValue) : 0;

    setPointsTotal(value);
    updatePointsTotal([item.id], value);
  }

  useEffect(() => {
    setPointsCurrent(item.pointsCurrent);
    setPointsTotal(item.pointsTotal);
  }, [item]);

  function handleSelect() {
    if (isPlayerView) return;
    onSelect(item.id);
  }

  return (
    <ListItem
      divider
      onClick={handleSelect}
      secondaryAction={
        isPlayerView ? (
          item.isDowned ? (
            <Chip color="default" label="Down" />
          ) : item.isBloodied ? (
            <Chip color="error" label="Bloodied" />
          ) : (
            <Chip color="primary" label="Active" variant="outlined" />
          )
        ) : (
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "center", justifyContent: "end" }}
          >
            <Input
              value={pointsCurrent}
              onChange={handleCurrentUpdate}
              sx={{ width: 32 }}
              inputProps={{
                sx: { appearance: "none", margin: 0, textAlign: "center" },
              }}
              disableUnderline
            />
            <p>/</p>
            <Input
              value={pointsTotal}
              onChange={handleTotalUpdate}
              sx={{ width: 32 }}
              inputProps={{
                sx: { appearance: "none", margin: 0, textAlign: "center" },
              }}
              disableUnderline
            />
          </Stack>
        )
      }
    >
      {isPlayerView ? null : (
        <Checkbox
          size="small"
          checked={isSelected}
          disableRipple
          edge="start"
        />
      )}
      <ListItemText
        sx={{
          color: item.isDowned
            ? "text.disabled"
            : item.isBloodied
              ? "error.light"
              : "text.primary",
          textDecoration: item.isDowned ? "line-through" : "",
        }}
        primary={item.name}
      />
    </ListItem>
  );
}

import { useEffect, useState, type ChangeEvent } from "react";
import {
  Input,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";

import { updateHpCurrent, updateHpTotal } from "~/lib/hp";

import type { MappedHpItem } from "~/hooks/use-hp-items";

import { Status } from "./status";

type Props = {
  item: MappedHpItem;
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
    updateHpCurrent([item.id], cappedValue);
  }

  function handleTotalUpdate(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    const value = inputValue.length > 0 ? parseInt(inputValue) : 0;

    setPointsTotal(value);
    updateHpTotal([item.id], value);
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
      disablePadding
      divider
      secondaryAction={
        isPlayerView ? (
          <Status item={item} />
        ) : (
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            justifyContent="end"
          >
            <Input
              value={pointsCurrent}
              onChange={handleCurrentUpdate}
              sx={{ width: 32 }}
              inputProps={{ sx: { textAlign: "center" } }}
              disableUnderline
            />
            <p>/</p>
            <Input
              value={pointsTotal}
              onChange={handleTotalUpdate}
              sx={{ width: 32 }}
              inputProps={{ sx: { textAlign: "center" } }}
              disableUnderline
            />
          </Stack>
        )
      }
    >
      <ListItemButton onClick={handleSelect} selected={isSelected}>
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
      </ListItemButton>
    </ListItem>
  );
}

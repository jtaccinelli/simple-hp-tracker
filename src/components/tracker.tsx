import { useEffect, useState } from "react";
import OBR from "@owlbear-rodeo/sdk";
import { Box, List, Stack } from "@mui/material";

import { useOBRContextMenu } from "~/hooks/use-obr-context-menu";
import { useTrackedItems } from "~/hooks/use-tracked-items";
import { useOBRPlayerRole } from "~/hooks/use-obr-player-role";

import { Header } from "./header";
import { TrackerItem } from "./tracker-item";
import { Actions } from "./actions";

export function Tracker() {
  const items = useTrackedItems();
  const role = useOBRPlayerRole();

  useOBRContextMenu();

  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  useEffect(() => {
    const height = Math.max(52 * items.length + 64, 128);
    OBR.action.setHeight(height);
  }, [items]);

  function handleSelectItem(id: string) {
    setSelectedItemIds((prev) => {
      const set = new Set(prev);
      if (set.has(id)) set.delete(id);
      else set.add(id);
      return [...set];
    });
  }

  return (
    <Stack height="100vh">
      <Header
        subtitle={items.length ? "" : "Select a character to start tracking HP"}
        action={
          role === "PLAYER" ? null : (
            <Actions ids={selectedItemIds} disabled={!selectedItemIds.length} />
          )
        }
      />
      <Box sx={{ minHeight: "64px", overflowY: "auto" }}>
        <List>
          {items.map((item) => (
            <TrackerItem
              key={item.id}
              item={item}
              isPlayerView={role === "PLAYER"}
              onSelect={handleSelectItem}
              isSelected={selectedItemIds.includes(item.id)}
            />
          ))}
        </List>
      </Box>
    </Stack>
  );
}

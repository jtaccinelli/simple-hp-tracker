import { useEffect } from "react";
import OBR from "@owlbear-rodeo/sdk";
import { Box, List, Stack } from "@mui/material";

import { useOBRContextMenu } from "~/hooks/use-obr-context-menu";
import { useHpItems } from "~/hooks/use-hp-items";
import { useOBRPlayerRole } from "~/hooks/use-obr-player-role";

import { Header } from "./header";
import { TrackerItem } from "./tracker-item";
import { Actions } from "./actions";
import { useOBRSelectedItems } from "~/hooks/use-obr-selected-items";

export function Tracker() {
  const [selectedItemIds, updateSelectedItems] = useOBRSelectedItems();
  const items = useHpItems();
  const role = useOBRPlayerRole();

  useOBRContextMenu();

  useEffect(() => {
    const itemCount = items?.length ?? 1;
    const height = Math.max(52 * itemCount + 64, 128);
    OBR.action.setHeight(height);
  }, [items]);

  if (!items) {
    return <Header subtitle="Select a character to start tracking HP" />;
  }

  return (
    <Stack height="100vh">
      <Header
        action={
          role === "PLAYER" ? null : (
            <Actions
              ids={selectedItemIds}
              disabled={!selectedItemIds?.length}
            />
          )
        }
      />
      <Box sx={{ minHeight: "64px", overflowY: "auto" }}>
        <List>
          {items?.map((item) => (
            <TrackerItem
              key={item.id}
              item={item}
              isPlayerView={role === "PLAYER"}
              onSelect={updateSelectedItems.toggle}
              isSelected={!!selectedItemIds?.includes(item.id)}
            />
          ))}
        </List>
      </Box>
    </Stack>
  );
}

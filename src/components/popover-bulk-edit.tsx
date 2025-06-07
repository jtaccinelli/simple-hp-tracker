import { useSearchParams } from "wouter";
import { useMemo } from "react";
import OBR from "@owlbear-rodeo/sdk";
import { List, ListItemIcon, MenuItem, Typography } from "@mui/material";

import FlashOnIcon from "@mui/icons-material/FlashOn";
import SpeedIcon from "@mui/icons-material/Speed";
import HealingIcon from "@mui/icons-material/Healing";

import { PLUGIN_ID } from "~/lib/plugin";

export function PopoverBulkEdit() {
  const [params] = useSearchParams();

  const ids = useMemo(() => {
    const ids = params.get("ids");
    return ids ? ids.split(",") : [];
  }, [params]);

  function parseIds(ids: string[]) {
    const params = new URLSearchParams();
    params.set("ids", ids.join(","));
    return params.toString();
  }

  function handleHeal() {
    OBR.modal.open({
      id: PLUGIN_ID.MODAL,
      url: `/modal/heal?${parseIds(ids)}`,
      height: 200,
      width: 300,
    });
  }

  function handleDamage() {
    OBR.modal.open({
      id: PLUGIN_ID.MODAL,
      url: `/modal/damage?${parseIds(ids)}`,
      height: 200,
      width: 300,
    });
  }

  function handleSetMax() {
    OBR.modal.open({
      id: PLUGIN_ID.MODAL,
      url: `/modal/set-max?${parseIds(ids)}`,
      height: 200,
      width: 300,
    });
  }

  return (
    <List>
      <MenuItem onClick={handleDamage} dense>
        <ListItemIcon>
          <FlashOnIcon />
        </ListItemIcon>
        <Typography variant="body1">Damage</Typography>
      </MenuItem>
      <MenuItem onClick={handleHeal} dense>
        <ListItemIcon>
          <HealingIcon />
        </ListItemIcon>
        <Typography variant="body1">Heal</Typography>
      </MenuItem>
      <MenuItem onClick={handleSetMax} dense>
        <ListItemIcon>
          <SpeedIcon />
        </ListItemIcon>
        <Typography variant="body1">Set Max</Typography>
      </MenuItem>
    </List>
  );
}

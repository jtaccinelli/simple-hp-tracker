import { IconButton, Stack, Tooltip } from "@mui/material";

import FlashOnIcon from "@mui/icons-material/FlashOn";
import SpeedIcon from "@mui/icons-material/Speed";
import HealingIcon from "@mui/icons-material/Healing";

import { useOBRModal } from "~/hooks/use-obr-modal";

type Props = {
  ids?: string[];
  disabled?: boolean;
};

export function Actions({ ids, disabled }: Props) {
  function parseIds(ids: string[] = []) {
    const params = new URLSearchParams();
    params.set("ids", ids.join(","));
    return params.toString();
  }

  const damageModal = useOBRModal({
    url: `/modal/damage?${parseIds(ids)}`,
    height: 197,
    width: 250,
  });

  const healModal = useOBRModal({
    url: `/modal/heal?${parseIds(ids)}`,
    height: 197,
    width: 250,
  });

  const setMaxModal = useOBRModal({
    url: `/modal/set-max?${parseIds(ids)}`,
    height: 197,
    width: 250,
  });

  return (
    <Stack direction="row" gap={1} alignItems="center" height="full">
      <Tooltip title="Damage">
        <IconButton size="small" onClick={damageModal.open} disabled={disabled}>
          <FlashOnIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Heal">
        <IconButton size="small" onClick={healModal.open} disabled={disabled}>
          <HealingIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Set Max HP">
        <IconButton size="small" onClick={setMaxModal.open} disabled={disabled}>
          <SpeedIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

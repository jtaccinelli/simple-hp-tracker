import { IconButton, Stack, Tooltip } from "@mui/material";

import FlashOnIcon from "@mui/icons-material/FlashOn";
import SpeedIcon from "@mui/icons-material/Speed";
import HealingIcon from "@mui/icons-material/Healing";

import { useOBRModal } from "~/hooks/use-obr-modal";

type Props = {
  disabled?: boolean;
};

export function Actions({ disabled }: Props) {
  const damageModal = useOBRModal({
    url: `/modal/damage`,
    height: 197,
    width: 250,
  });

  const healModal = useOBRModal({
    url: `/modal/heal`,
    height: 197,
    width: 250,
  });

  const setMaxModal = useOBRModal({
    url: `/modal/set-max`,
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

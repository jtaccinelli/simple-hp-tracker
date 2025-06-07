import OBR from "@owlbear-rodeo/sdk";
import { Button } from "@mui/material";

import { PLUGIN_ID } from "~/lib/plugin";

type Props = {
  ids: string[];
  disabled?: boolean;
};

export function BulkEdit({ ids, disabled }: Props) {
  function parseIds(ids: string[]) {
    const params = new URLSearchParams();
    params.set("ids", ids.join(","));
    return params.toString();
  }

  function handleOpen() {
    OBR.popover.open({
      id: PLUGIN_ID.POPOVER,
      url: `/popover/bulk-edit?${parseIds(ids)}`,
      height: 120,
      width: 180,
      anchorPosition: {
        top: 320,
        left: 360,
      },
      anchorReference: "POSITION",
    });
  }

  return (
    <Button id="hp-tracker--bulk-edit" onClick={handleOpen} disabled={disabled}>
      Adjust
    </Button>
  );
}

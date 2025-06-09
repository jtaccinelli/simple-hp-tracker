import OBR from "@owlbear-rodeo/sdk";
import { useCallback } from "react";
import { TARGET } from "~/lib/const";

type Popover = Omit<Parameters<typeof OBR.popover.open>[0], "id">;

export function useOBRPopover(popover: Popover) {
  const open = useCallback(() => {
    OBR.popover.open({
      id: TARGET.POPOVER,
      ...popover,
    });
  }, []);

  const close = useCallback(() => {
    OBR.popover.close(TARGET.POPOVER);
  }, []);

  return { open, close };
}

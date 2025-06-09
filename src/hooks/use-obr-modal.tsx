import OBR from "@owlbear-rodeo/sdk";
import { useCallback } from "react";
import { TARGET } from "~/lib/const";

type Modal = Omit<Parameters<typeof OBR.modal.open>[0], "id">;

export function useOBRModal(modal: Modal) {
  const open = useCallback(() => {
    OBR.modal.open({
      id: TARGET.MODAL,
      ...modal,
    });
  }, []);

  const close = useCallback(() => {
    OBR.modal.close(TARGET.MODAL);
  }, []);

  return { open, close };
}

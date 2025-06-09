import OBR, { type Player } from "@owlbear-rodeo/sdk";
import { useCallback, useEffect, useState } from "react";

export function useOBRSelectedItems() {
  const [ids, setIds] = useState<string[]>();

  function handleSelectionChange(player: Player) {
    setIds(player.selection);
  }

  useEffect(() => {
    OBR.player.getSelection().then(setIds);
    return OBR.player.onChange(handleSelectionChange);
  }, []);

  const selectId = useCallback((id: string) => {
    const set = new Set(ids);
    set.add(id);
    OBR.player.select([...set]);
  }, []);

  const deselectId = useCallback((id: string) => {
    OBR.player.deselect([id]);
  }, []);

  const toggleId = useCallback((id: string) => {
    if (ids?.includes(id)) deselectId(id);
    else selectId(id);
  }, []);

  const actions = {
    select: selectId,
    deselect: deselectId,
    toggle: toggleId,
  } as const;

  return [ids, actions] as const;
}

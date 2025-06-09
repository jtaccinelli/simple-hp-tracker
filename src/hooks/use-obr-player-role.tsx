import type { Player } from "@owlbear-rodeo/sdk";
import OBR from "@owlbear-rodeo/sdk";
import { useCallback, useEffect, useState } from "react";

export function useOBRPlayerRole() {
  const [role, setRole] = useState<Player["role"]>("PLAYER");

  const updatePlayerRole = useCallback((player: Player) => {
    setRole(player.role);
  }, []);

  useEffect(() => {
    OBR.player.getRole().then(setRole);
    return OBR.player.onChange(updatePlayerRole);
  }, []);

  return role;
}

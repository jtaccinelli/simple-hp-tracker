import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useState } from "react";

export function useSceneReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    OBR.scene.isReady().then(setReady);
    return OBR.scene.onReadyChange(setReady);
  }, []);

  return ready;
}

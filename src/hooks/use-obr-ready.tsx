import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useState } from "react";

export function useOBRReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (OBR.isAvailable) {
      OBR.onReady(() => setReady(true));
    }
  }, []);

  return ready;
}

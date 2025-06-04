import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useState } from "react";

export function useOwlbearReady() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if(OBR.isAvailable) {
            OBR.onReady(() => setReady(true))
        }
    }, [])

    return ready;
}
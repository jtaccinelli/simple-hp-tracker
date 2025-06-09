import { useEffect } from "react";
import OBR from "@owlbear-rodeo/sdk";

import { TARGET } from "~/lib/const";
import { initialiseHp } from "~/lib/hp";

export function useOBRContextMenu() {
  useEffect(() => {
    OBR.contextMenu.create({
      id: TARGET.CONTEXT_MENU,
      icons: [
        {
          icon: "/add.svg",
          label: "Track HP",
          filter: {
            every: [
              { key: "layer", value: "CHARACTER", coordinator: "||" },
              { key: "layer", value: "MOUNT" },
              { key: "type", value: "IMAGE" },
              { key: ["metadata", TARGET.HP], value: undefined },
            ],
            permissions: ["UPDATE"],
          },
        },
        {
          icon: "/remove.svg",
          label: "Clear HP",
          filter: {
            every: [
              { key: "layer", value: "CHARACTER", coordinator: "||" },
              { key: "layer", value: "MOUNT" },
              { key: "type", value: "IMAGE" },
            ],
            permissions: ["UPDATE"],
          },
        },
      ],
      onClick(context) {
        initialiseHp(context.items.map((item) => item.id));
      },
    });
  }, []);
}

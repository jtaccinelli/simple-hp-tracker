import { useEffect } from "react";
import OBR from "@owlbear-rodeo/sdk";

import { initialisePoints, PLUGIN_ID } from "~/lib/plugin";

export function useContextMenu() {
  useEffect(() => {
    OBR.contextMenu.create({
      id: PLUGIN_ID.CONTEXT_MENU,
      icons: [
        {
          icon: "/add.svg",
          label: "Track HP",
          filter: {
            every: [
              { key: "layer", value: "CHARACTER", coordinator: "||" },
              { key: "layer", value: "MOUNT" },
              { key: "type", value: "IMAGE" },
              { key: ["metadata", PLUGIN_ID.METADATA], value: undefined },
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
        initialisePoints(context.items.map((item) => item.id));
      },
    });
  }, []);
}

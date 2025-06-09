import { config } from "~/config";

export function generatePluginId(path: string) {
  const id = config.id;
  return `${id}/${path}`;
}

import { updatePointsTotal } from "~/lib/plugin";
import { ModalBase } from "./modal-base";

export function ModalSetMax() {
  return <ModalBase onAction={updatePointsTotal} title="Set Max HP" />;
}

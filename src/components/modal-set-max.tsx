import { updatePointsTotal } from "~/lib/plugin";
import { ModalUpdate } from "./modal-update";

export function ModalSetMax() {
  return (
    <ModalUpdate
      onAction={updatePointsTotal}
      title="Set Max HP"
      cta="Set Max HP"
    />
  );
}

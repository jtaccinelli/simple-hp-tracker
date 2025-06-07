import { addPointsCurrent } from "~/lib/plugin";
import { ModalUpdate } from "./modal-update";

export function ModalHeal() {
  return <ModalUpdate onAction={addPointsCurrent} title="Heal" cta="Heal" />;
}

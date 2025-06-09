import { addPointsCurrent } from "~/lib/plugin";
import { ModalBase } from "./modal-base";

export function ModalHeal() {
  return <ModalBase onAction={addPointsCurrent} title="Heal" />;
}

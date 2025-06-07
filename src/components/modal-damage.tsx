import { subtractPointsCurrent } from "~/lib/plugin";
import { ModalUpdate } from "./modal-update";

export function ModalDamage() {
  return (
    <ModalUpdate onAction={subtractPointsCurrent} title="Damage" cta="Damage" />
  );
}

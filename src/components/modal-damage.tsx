import { subtractPointsCurrent } from "~/lib/plugin";
import { ModalBase } from "./modal-base";

export function ModalDamage() {
  return <ModalBase onAction={subtractPointsCurrent} title="Damage" />;
}

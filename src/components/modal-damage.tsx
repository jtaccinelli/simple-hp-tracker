import { subtractHpCurrent } from "~/lib/hp";

import { ModalBase } from "./modal-base";

export function ModalDamage() {
  return <ModalBase onAction={subtractHpCurrent} title="Damage" />;
}

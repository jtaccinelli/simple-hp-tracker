import { addHpCurrent } from "~/lib/hp";

import { ModalBase } from "./modal-base";

export function ModalHeal() {
  return <ModalBase onAction={addHpCurrent} title="Heal" />;
}

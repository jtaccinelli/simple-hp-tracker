import { updateHpTotal } from "~/lib/hp";

import { ModalBase } from "./modal-base";

export function ModalSetMax() {
  return <ModalBase onAction={updateHpTotal} title="Set Max HP" />;
}

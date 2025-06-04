import { type ReactNode } from "react";

import { useOwlbearReady } from "~/hooks/use-owlbear-ready";

type Props = {
  children: ReactNode;
};

export function OwlbearGate({ children }: Props) {
  const ready = useOwlbearReady();
  return ready ? children : null;
}

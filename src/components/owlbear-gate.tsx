import { type ReactNode } from "react";

import { useOBRReady } from "~/hooks/use-obr-ready";

type Props = {
  children: ReactNode;
};

export function OwlbearGate({ children }: Props) {
  const ready = useOBRReady();
  return ready ? children : null;
}

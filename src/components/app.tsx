import { Switch, Route } from "wouter";

import { useSceneReady } from "~/hooks/use-scene-ready";

import { Header } from "./header";

import { ModalDamage } from "./modal-damage";
import { ModalHeal } from "./modal-heal";
import { ModalSetMax } from "./modal-set-max";

import { PopoverBulkEdit } from "./popover-bulk-edit";

import { Tracker } from "./tracker";

export function App() {
  const isSceneReady = useSceneReady();

  if (!isSceneReady) {
    return <Header subtitle="Open a scene to use the initiative tracker" />;
  }

  return (
    <Switch>
      {/* Modals */}
      <Route path="/modal/damage">
        <ModalDamage />
      </Route>
      <Route path="/modal/heal">
        <ModalHeal />
      </Route>
      <Route path="/modal/set-max">
        <ModalSetMax />
      </Route>
      {/* Popovers */}
      <Route path="/popover/bulk-edit">
        <PopoverBulkEdit />
      </Route>
      {/* Main App */}
      <Route>
        <Tracker />
      </Route>
    </Switch>
  );
}

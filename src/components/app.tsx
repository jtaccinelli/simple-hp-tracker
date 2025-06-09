import { Switch, Route } from "wouter";

import { useOBRSceneReady } from "~/hooks/use-obr-scene-ready";

import { Header } from "./header";

import { ModalDamage } from "./modal-damage";
import { ModalHeal } from "./modal-heal";
import { ModalSetMax } from "./modal-set-max";

import { Tracker } from "./tracker";

export function App() {
  const isSceneReady = useOBRSceneReady();

  if (!isSceneReady) {
    return <Header subtitle="Open a scene to use the HP tracker" />;
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
      {/* Main App */}
      <Route>
        <Tracker />
      </Route>
    </Switch>
  );
}

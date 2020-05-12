import React from "react";
import Counter from "./Counter";

export default {
  title: "Nuestro Contador",
  component: Counter,
};

export const EscenarioStandard = () => <Counter />;
export const EscenarioPeligro = () => <Counter peligro={true} />;

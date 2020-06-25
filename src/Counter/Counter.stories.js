import React from "react";
import Counter from "./Counter";

export default {
  title: "Our counter",
  component: Counter,
};

export const Standard = () => <Counter />;
export const Danger = () => <Counter danger={true} />;

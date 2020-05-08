import "../App.scss"
import React from "react";
import { action } from "@storybook/addon-actions";

import HooplaButton from "./HooplaButton";

export default {
  component: HooplaButton,
  title: "Nuestro Boton",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <HooplaButton onClick={action("HooplaButton Clicked")}>
    Apretame!
  </HooplaButton>
);

export const Primary = () => (
  <HooplaButton onClick={action("HooplaButton Clicked")} primary={true}>
    Apretame!
  </HooplaButton>
);

export const Secondary = () => (
  <HooplaButton onClick={action("HooplaButton Clicked")} secondary={true}>
    Apretame!
  </HooplaButton>
);

import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

export default {
  component: Button,
  title: "Nuestro Boton",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Button onClick={action("Button Clicked")}>Apretame!</Button>
);

export const Primary = () => (
  <Button onClick={action("Button Clicked")} primary={true}>
    Apretame!
  </Button>
);

export const Secondary = () => (
  <Button onClick={action("Button Clicked")} secondary={true}>
    Apretame!
  </Button>
);

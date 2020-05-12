import React from "react";
import "../App.scss";
import { HooplaButton } from "./HooplaButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "Nuestro hoopla boton",
  component: HooplaButton,
};

export const Default = () => (
  <HooplaButton onClick={action("Me clickearon")}>Default button</HooplaButton>
);

export const Latino = () => (
  <HooplaButton onClick={action("Me clickearon")}>Mañana</HooplaButton>
);

export const ConLink = () => {
  return (
    <HooplaButton>
      <a href="http://google.com">Link</a>
    </HooplaButton>
  );
};

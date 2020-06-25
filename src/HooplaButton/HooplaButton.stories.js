import React from "react";
import "../App.scss";
import { HooplaButton } from "./HooplaButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "Our hoopla boton",
  component: HooplaButton,
};

export const Standard = () => (
  <HooplaButton onClick={action("I've got clicked!")}>
    Default button
  </HooplaButton>
);

export const Latino = () => (
  <HooplaButton onClick={action("I've got clicked!")}>Mañana</HooplaButton>
);

export const WithLink = () => {
  return (
    <HooplaButton>
      <a href="http://google.com">Link</a>
    </HooplaButton>
  );
};

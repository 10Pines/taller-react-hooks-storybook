import React from "react";
import { Button } from "react-bootstrap";

export const HooplaButton = ({ children, onClick }) => {
  console.log("RENDER BUTTON");
  return <Button onClick={onClick}>{children}</Button>;
};

import React from "react";
import { Button } from "react-bootstrap";

export default ({ onClick, children, ...rest }) => (
  <Button onClick={onClick} {...rest}>{children}</Button>
);

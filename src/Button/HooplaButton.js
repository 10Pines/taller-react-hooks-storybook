import React from "react";
import { Button } from "react-bootstrap";

export default ({ onClick, primary, secondary, children, ...rest }) => {
  const variant = primary ? "primary" : secondary ? "secondary" : "dark";
  debugger
  return (
    <Button onClick={onClick} variant={variant} {...rest}>
      {children}
    </Button>
  );
};

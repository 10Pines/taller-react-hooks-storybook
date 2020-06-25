import React from "react";
import { Button } from "react-bootstrap";
import styles from "./HooplaButton.module.css";

export const HooplaButton = ({ children, onClick }) => {
  return (
    <Button className={styles.linkText} onClick={onClick}>
      {children}
    </Button>
  );
};

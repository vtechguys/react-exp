import React from "react";
import { useAccordian } from "./hooks";
import "./Accordian.css";
import { Box } from "../design/Box";

export function BaseAccordian(props) {
  const { openIndexes, handleItemClick } = useAccordian(props);
  return (
    <React.Fragment>
      {props.children({ openIndexes, handleItemClick })}
    </React.Fragment>
  );
}

export function AccordianButton({ isOpen, onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`accordianButton  accordianButton--${
        isOpen ? "open" : "close"
      }  ${className}`}
    >
      {children}
    </button>
  );
}

export function AccordianContent({ isOpen, className = "", children }) {
  return (
    <div
      className={`accordianContent accordianContent--${
        isOpen ? "open" : "close"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function AccordianItem({
  direction = "horizontal",
  className = "",
  children
}) {
  return (
    <Box
      className={`accordianItem ${
        direction === "horizontal"
          ? "accordianItem--row"
          : "accordianItem--column"
      }  ${className}`}
    >
      {children}
    </Box>
  );
}

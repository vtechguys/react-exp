import React from "react";
import { makeStyles } from "../vanilla.styles";
import { useAccordian } from "./hooks";

export function BaseAccordian(props) {
  const { openIndexes, handleItemClick } = useAccordian(props);
  return (
    <React.Fragment>
      {props.children({ openIndexes, handleItemClick })}
    </React.Fragment>
  );
}

export function AccordianButton({ onClick, children, className = "" }) {
  return (
    <button onClick={onClick} className={`flex-grow-1 ${className}`}>
      {children}
    </button>
  );
}

export function AccordianContent({ className = "", children }) {
  return <div className={`flex-grow-1 ${className}`}>{children}</div>;
}

export function AccordianItem({
  direction = "horizontal",
  className = "",
  children
}) {
  const flexDirection = direction === "horizontal" ? "row" : "column";
  return (
    <div className={`flex-grow-1 flex-${flexDirection} ${className}`}>
      {children}
    </div>
  );
}

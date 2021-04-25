import React from "react";
export function Box({
  dataComponentName,
  dataTestId,
  component = "div",
  ...restProps
}) {
  if (process.env.NODE_ENV !== "production") {
    const qaProps = {};
    if (dataComponentName) {
      qaProps["data-component-name"] = dataComponentName;
    }
    if (dataTestId) {
      qaProps["data-test-id"] = dataTestId;
    }
    return React.createElement(component, { ...restProps, ...qaProps });
  }
  return React.createElement(component, { ...restProps });
}

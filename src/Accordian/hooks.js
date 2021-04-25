import React from "react";
import { stateReducer } from "./reducer";
import { actionTypes } from "./actiontypes";
export function useAccordian({
  openIndexes: optionOpenIndexes = [0],
  stateReducer: optionStateReducer = stateReducer
} = {}) {
  const [state, setState] = React.useState({
    openIndexes: optionOpenIndexes ? optionOpenIndexes : [0]
  });
  const { openIndexes } = state;

  const handleItemClick = (itemIndex) => {
    const nextActionType = openIndexes.includes(itemIndex)
      ? actionTypes.close
      : actionTypes.open;
    const nextState = optionStateReducer
      ? optionStateReducer(state, nextActionType, itemIndex)
      : stateReducer(state, nextActionType, itemIndex);
    console.log(nextState);
    setState(nextState);
  };

  return {
    openIndexes,
    handleItemClick
  };
}

import { actionTypes } from "./actiontypes";
export function stateReducer(state, nextActionType, itemIndex) {
  return {
    ...state,
    openIndexes:
      nextActionType === actionTypes.open
        ? [...state.openIndexes, itemIndex]
        : state.openIndexes.filter((c) => c !== itemIndex)
  };
}

export function singleReducer(state, action, itemIndex) {
  if (action === actionTypes.open) {
    return {
      ...state,
      openIndexes: [itemIndex]
    };
  }
  return null;
}

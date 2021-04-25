import { actionTypes } from "./actiontypes";
export function stateReducer(state, { type, payload: itemIndex }) {
  return {
    ...state,
    openIndexes:
      type === actionTypes.open
        ? [...state.openIndexes, itemIndex]
        : state.openIndexes.filter((c) => c !== itemIndex)
  };
}

export function singleReducer(state, { type, payload: itemIndex }) {
  if (type === actionTypes.open) {
    return {
      ...state,
      openIndexes: [itemIndex]
    };
  }
  return null;
}

export function combineReducer(...reducers) {
  return function stateReducer(...args) {
    return reducers.reduce(
      (acc, reducer) => ({ ...acc, ...reducer(...args) }),
      {}
    );
  };
}

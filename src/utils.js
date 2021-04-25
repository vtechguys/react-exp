export function combineReducer(...reducers) {
  return function stateReducer(...args) {
    return reducers.reduce(
      (acc, reducer) => ({ ...acc, ...reducer(...args) }),
      {}
    );
  };
}
export function mergeFns(...fns) {
  return function mergedFn(...args) {
    return fns.forEach((fn) => fn(...args));
  };
}

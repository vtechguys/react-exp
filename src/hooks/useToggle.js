import { useReducer } from "react";
import { mergeFns } from "../utils";

export const actionTypes = {
  toggle: "hooks/toggle_hook/toggle",
  switchOn: "hooks/toggle_hook/switch_on",
  switchOff: "hooks/toggle_hook/switch_off"
};

export function toggleReducer(state, { type }) {
  switch (type) {
    case actionTypes.switchOn: {
      return true;
    }
    case actionTypes.switchOff: {
      return false;
    }
    case actionTypes.toggle: {
      return !state;
    }
    default: {
      if (process.env.NODE_ENV !== "production") {
        throw new Error(
          `[toggleReducer] action of type [${type}] is not defined`
        );
      }
      return state;
    }
  }
}

export function useTogggle({ initIsOn = false, reducer = toggleReducer } = {}) {
  const [isOn, dispatch] = useReducer(reducer, initIsOn);
  const switchOn = () => dispatch({ type: actionTypes.switchOn });
  const switchOff = () => dispatch({ type: actionTypes.switchOff });
  const toggle = () => dispatch({ type: actionTypes.toggle });

  const getToggleProps = (props) => {
    return {
      ...props,
      onChange: mergeFns(toggle, props?.onChange),
      "aria-pressed": isOn,
      "aria-checked": isOn
    };
  };

  return {
    isOn,
    switchOn,
    switchOff,
    toggle,
    getToggleProps
  };
}

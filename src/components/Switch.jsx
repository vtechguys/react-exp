import "./Switch.css";
import { Box } from "../design/Box";

export function Switch({ on, onChange, ...props }) {
  return (
    <Box component="label" className="switch" dataComponentName="Switch">
      <Box
        component="input"
        dataTestId="switchInput"
        type="checkbox"
        checked={on}
        onChange={onChange}
        {...props}
      />
      <span className="slider round"></span>
    </Box>
  );
}

import "./Switch.css";

export function Switch({ on, onChange, ...props }) {
  return (
    <label className="switch">
      <input type="checkbox" checked={on} onChange={onChange} {...props} />
      <span className="slider round"></span>
    </label>
  );
}

import { useMediaQuery } from "../hooks/useMediaQuery";
import { makeStyles } from "../vanilla.styles";
import { breakpointMobile } from "../design/breakpoints";
// Header is layout component
// It layouts a bunch of JSX cmponents
// It decides layout of each component based on diffenrent screen
// different conditions but it itslef doesnot decide any looks of any component it renders
// also those may just maintain there own ui, state, etc...
const useStylesHeader = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 20px",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    fontSize: 14
  }
});
export function Header({ Logo = null, Nav = null }) {
  // Just a fun way to use media query in component
  // to do screen based conditional rendering
  const isMobile = useMediaQuery(breakpointMobile);
  const classes = useStylesHeader();
  return (
    <div className={classes.header}>
      <div>{Logo}</div>
      {/* exclusively decides layout of nav omponent*/}
      {/* The all sexy useMediaQuery() */}
      {isMobile ? null : <div>{Nav}</div>}
    </div>
  );
}

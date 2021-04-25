import { useMediaQuery } from "../hooks/useMediaQuery";
import { makeStyles } from "../vanilla.styles";
import { breakpoints } from "../design/breakpoints";
import { Box } from "../design/Box";
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
  const isMobile = useMediaQuery(breakpoints.xs);
  const classes = useStylesHeader();
  return (
    <Box className={classes.header} dataComponentName="Header">
      <Box>{Logo}</Box>
      {/* exclusively decides layout of nav omponent*/}
      {/* The all sexy useMediaQuery() */}
      {isMobile ? null : <Box>{Nav}</Box>}
    </Box>
  );
}

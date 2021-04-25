import { Box } from "../design/Box";
import { makeStyles } from "../vanilla.styles";

const useStylesLogo = makeStyles({
  logo: {
    flexGrow: 1,
    fontSize: 14
  }
});

export function Logo() {
  const classes = useStylesLogo();
  return <div className={classes.logo}>Logo</div>;
}
const useStylesNav = makeStyles({
  navRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1
  },
  navList: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    margin: 0,
    padding: 0
  },
  navListItem: {
    margin: 5
  },
  navListItemLink: {
    color: "#fff",
    fontSize: 14
  }
});

const unAuthNav = ["Login"];
const authNav = ["Profile", "Settings"];

export function Nav({ isAuthenticated }) {
  const classes = useStylesNav();

  const navs = !isAuthenticated ? unAuthNav : authNav;

  return (
    <Box className={classes.navRoot} dataComponentName="Nav">
      <ul className={classes.navList}>
        {navs.map((nav) => (
          <li className={classes.navListItem}>
            <a href="/" className={classes.navListItemLink}>
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </Box>
  );
}

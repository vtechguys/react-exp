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
export function Nav({ isAuthenticated }) {
  const classes = useStylesNav();
  if (!isAuthenticated) {
    return (
      <div className={classes.navRoot}>
        <ul className={classes.navList}>
          <li className={classes.navListItem}>
            <a href="/" className={classes.navListItemLink}>
              Login
            </a>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className={classes.navRoot}>
      <ul className={classes.navList}>
        <li className={classes.navListItem}>
          <a href="/" className={classes.navListItemLink}>
            Profile
          </a>
        </li>
        <li className={classes.navListItem}>
          <a href="/" className={classes.navListItemLink}>
            Setttings
          </a>
        </li>
      </ul>
    </div>
  );
}

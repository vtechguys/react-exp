import { AccordianImpl } from "./components/AccordianImp";
import { AccordianNative } from "./components/AccordianNative";
import { Header } from "./components/Header";
import { Logo, Nav } from "./components/LogoNav";
import { makeStyles } from "./vanilla.styles";
import "./style.css";
/**
 * This code sandbox introduces:
 *  1. Layout component
 *  2. State reducer pattern
 *  3. Cost of Css in JS
 */
// accordian list items
const items = [
  { title: "Title1", text: "Content1" },
  { title: "Title2", text: "Content2" },
  { title: "Title3", text: "Content3" },
  { title: "Title4", text: "Content4" }
];

const useAppStyles = makeStyles({
  appRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  showcaseArea: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
  },
  accordianShowcase: {
    padding: 10
  }
});
export default function App() {
  const classes = useAppStyles();
  return (
    <div className={classes.appRoot}>
      <Header Logo={<Logo />} Nav={<Nav isAuthenticated={true} />} />
      <div className="flex-column flex-grow-1 justify-center align-items-center">
        <div className="flex-column flex-grow-1 align-items-center">
          <h1>Layout component & state reducer pattern</h1>
          <div className={classes.showcaseArea}>
            <div className={classes.accordianShowcase}>
              <h2>Renderer way</h2>
              <AccordianNative items={items} />
            </div>
            <div className={classes.accordianShowcase}>
              <h2>Hooks way</h2>
              <AccordianImpl items={items} />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex-column flex-grow-1 justify-center align-items-center">
        <h1>Just some thoughts</h1>
        <p>
          CSS in Js are evalauted at run time and for each render.
          <br />
          It is way more costly then plain old css...
          <br />
          the thing you trade off is view encapsulation...
          <br />
          but hey! you shouldn't need that in first place if you have
          <br />
          a good css architecture and if you have <br />
          a design system on top of then it's a all in all success. <br />
          <strong>(Jindgi safal h BC!!)</strong>
        </p>
        <img src="/twitter-css-in-js.png" alt="Rayan on css-in-js" />
      </div>
    </div>
  );
}

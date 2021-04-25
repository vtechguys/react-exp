import { AccordianImpl } from "./components/AccordianImp";
import { AccordianNative } from "./components/AccordianNative";
import { Header } from "./components/Header";
import { Logo, Nav } from "./components/LogoNav";
import { makeStyles } from "./vanilla.styles";
import "./style.css";
import {
  toggleReducer,
  useTogggle,
  actionTypes as toggleActionTypes
} from "./hooks/useToggle";
import { Switch } from "./components/Switch";
import { useState } from "react";
/**
 * This code sandbox introduces:
 *  1. Layout component/ composition
 *  2. State reducer pattern
 *  3. Cost of Css in JS
 */
// accordian list items
const items = [
  {
    title: "Composition",
    text:
      "React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components."
  },
  {
    title: "State reducer",
    text:
      "A pattern for you to use in custom hooks to enhance the power and flexibility of your hooks."
  },
  {
    title: "CSS in JS",
    text: `CSS-in-JS libraries provide you with a straightforward and secure methodology to style component-based applications. Besides JavaScript frameworks, you can also use them together with Web Components. They can also come in handy if you want to create a complex UX for a monolithic front-end, such as state-based functionality. On the other hand, CSS-in-JS is probably not for you if you are a beginner developer, want to create websites without a dynamic front-end, or appreciate simplicity and code readability. You might reasonably find that your go-to tools such as Sass or PostCSS are perfect for your goals and that you don’t want to pick up a new technology just for the sake of novelty.`
  }
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
      {/* 
        composition: react is famous for composition ablity of components, 
        folloing is an example of composition ,
        read more: https://reactjs.org/docs/composition-vs-inheritance.html
      */}
      <Header Logo={<Logo />} Nav={<Nav isAuthenticated={true} />} />
      <div className="flex-column flex-grow-1 justify-center align-items-center">
        <div className="flex-column flex-grow-1 align-items-center">
          <h1>Layout component & state reducer pattern</h1>
          <div className="flex-row flex-grow-1 justify-sbw">
            <div className={classes.accordianShowcase}>
              <h2>Render way</h2>
              {/* Taking composition to next level */}
              <AccordianNative items={items} />
            </div>
            <div className={classes.accordianShowcase}>
              <h2>Hooks way</h2>
              <AccordianImpl items={items} />
            </div>
          </div>
        </div>
        <div className="flex-column flex-grow-1 align-item-center justify-center">
          <h2>Switch button with state reducer pattern</h2>
          <p>
            Switch has special usecase if clicked more then 5 times then disable
          </p>
          <SwitchStateReducerPattern />
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
          <br />
          Vanilla extract{" "}
          <a
            href="https://github.com/seek-oss/vanilla-extract"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          could be a game changer &nbsp;
          <strong> (Jindgi safal hojayegi BC!!)</strong>
        </p>

        <img src="/twitter-css-in-js.png" alt="Rayan on css-in-js" />
      </div>
    </div>
  );
}

function SwitchStateReducerPattern() {
  // Toggle hook supports toggling of switch button
  // our use case if the button is clicked for more then
  // 5 times disbale clicking of button
  const [count, setCount] = useState(0);
  // getToggleProps: another sexy pattern called 'props getter pattern'
  const { isOn, getToggleProps } = useTogggle({
    // reducer: another sexy pattern called 'state reducer pattern'
    reducer(state, action) {
      const nextState = toggleReducer(state, action);
      if (count >= 4 && action.type === toggleActionTypes.toggle) {
        return state;
      }
      setCount((c) => c + 1);
      return nextState;
    }
  });
  return (
    <Switch
      on={isOn}
      {...getToggleProps({
        onChange: () => {
          trackApi.swtichTriggered();
        }
      })}
    />
  );
}

const trackApi = {
  swtichTriggered: () => console.log("sending api call")
};

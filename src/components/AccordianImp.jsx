import {
  singleReducer,
  stateReducer,
  AccordianButton,
  AccordianContent,
  AccordianItem,
  useAccordian
} from "../Accordian";
import { makeStyles } from "../vanilla.styles";
import { combineReducer } from "../utils";

const useStylesAccordianTwo = makeStyles({
  accordianContainer: {
    width: 300
  },
  accordianBtn: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#f2e2a1",
    borderStyle: "solid"
  },
  accordianContent: {
    padding: 10,
    fontSize: 12
  }
});

export function AccordianImpl({ items }) {
  const classes = useStylesAccordianTwo();
  const { openIndexes, handleItemClick } = useAccordian({
    stateReducer: combineReducer(stateReducer, singleReducer),
    openIndexes: [0]
  });
  return (
    <div className={classes.accordianContainer}>
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i);
        return (
          <AccordianItem direction="vertical" key={item.title}>
            <AccordianButton
              onClick={() => handleItemClick(i)}
              className={classes.accordianBtn}
            >
              {item.title}
            </AccordianButton>
            {isOpen ? (
              <AccordianContent className={classes.accordianContent}>
                {item.text}
              </AccordianContent>
            ) : null}
          </AccordianItem>
        );
      })}
    </div>
  );
}

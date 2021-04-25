import {
  BaseAccordian,
  singleReducer,
  stateReducer,
  AccordianButton,
  AccordianContent,
  AccordianItem
} from "../Accordian";
import { makeStyles } from "../vanilla.styles";
import { combineReducer } from "../utils";

const useStylesAccordianNative = makeStyles({
  accordianContainer: {
    width: 300
  },
  accordianBtn: {
    padding: 10,
    borderWidth: 2,
    borderColor: "green",
    borderStyle: "solid",
    backgroundColor: "#f6c21e",
    flexGrow: 1
  },
  accordianContent: {
    padding: 10,
    fontSize: 12,
    flexGrow: 1
  }
});

export function AccordianNative({ items }) {
  const classes = useStylesAccordianNative({ direction: "vertical" });
  return (
    <BaseAccordian stateReducer={combineReducer(stateReducer, singleReducer)}>
      {({ openIndexes, handleItemClick }) => (
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
      )}
    </BaseAccordian>
  );
}

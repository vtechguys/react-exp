import {
  BaseAccordian,
  singleReducer,
  stateReducer,
  AccordianButton,
  AccordianContent,
  AccordianItem
} from "../Accordian";
import { combineReducer } from "../utils";

export function AccordianNative({ items }) {
  return (
    <BaseAccordian stateReducer={combineReducer(stateReducer, singleReducer)}>
      {({ openIndexes, handleItemClick }) => (
        <div style={{ width: 300 }}>
          {items.map((item, i) => {
            const isOpen = openIndexes.includes(i);
            console.log(isOpen);
            return (
              <AccordianItem direction="horizontal" key={item.title}>
                <AccordianButton
                  isOpen={isOpen}
                  onClick={() => handleItemClick(i)}
                >
                  {item.title}
                </AccordianButton>
                <AccordianContent isOpen={isOpen}>{item.text}</AccordianContent>
              </AccordianItem>
            );
          })}
        </div>
      )}
    </BaseAccordian>
  );
}

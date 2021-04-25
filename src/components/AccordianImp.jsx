import {
  singleReducer,
  stateReducer,
  AccordianButton,
  AccordianContent,
  AccordianItem,
  useAccordian
} from "../Accordian";
import { combineReducer } from "../utils";

export function AccordianImpl({ items }) {
  const { openIndexes, handleItemClick } = useAccordian({
    stateReducer: combineReducer(stateReducer, singleReducer),
    openIndexes: [0]
  });
  return (
    <div style={{ width: 300 }}>
      {items.map((item, i) => {
        const isOpen = openIndexes.includes(i);
        return (
          <AccordianItem direction="horizontal" key={item.title}>
            <AccordianButton isOpen={isOpen} onClick={() => handleItemClick(i)}>
              {item.title}
            </AccordianButton>
            <AccordianContent isOpen={isOpen}>{item.text}</AccordianContent>
          </AccordianItem>
        );
      })}
    </div>
  );
}

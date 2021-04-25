import {
  singleReducer,
  stateReducer,
  AccordianButton,
  AccordianContent,
  AccordianItem,
  useAccordian
} from "../Accordian";
import { Box } from "../design/Box";
import { combineReducer } from "../utils";

export function AccordianImpl({ items }) {
  const { openIndexes, handleItemClick } = useAccordian({
    stateReducer: combineReducer(stateReducer, singleReducer),
    openIndexes: [0]
  });
  return (
    <Box style={{ width: 300 }} dataComponentName="AccordianImpl">
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
    </Box>
  );
}

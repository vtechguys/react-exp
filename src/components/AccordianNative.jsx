import {
  BaseAccordian,
  singleReducer,
  stateReducer,
  AccordianButton,
  AccordianContent,
  AccordianItem
} from "../Accordian";
import { Box } from "../design/Box";
import { combineReducer } from "../utils";

export function AccordianNative({ items }) {
  return (
    <Box dataComponentName="AccordianNative">
      <BaseAccordian stateReducer={combineReducer(stateReducer, singleReducer)}>
        {({ openIndexes, handleItemClick }) => (
          <Box style={{ width: 300 }}>
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
                  <AccordianContent isOpen={isOpen}>
                    {item.text}
                  </AccordianContent>
                </AccordianItem>
              );
            })}
          </Box>
        )}
      </BaseAccordian>
    </Box>
  );
}

// utils
const genRandomId = () => Math.random().toString(36).substr(2, 8);
const replaceSpaces = (str) => str.replace(/\s\s+/g, " ");
const camelToPascalCase = (str = "") =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const css_properties = {
  pixel: [
    "width",
    "height",
    "minWidth",
    "minHeight",
    "fontSize",
    "borderWidth",
    "borderTopLeftWidth",
    "borderTopRightWidth",
    "borderBottomLeftWidth",
    "borderBottomRightWidth",
    "padding",
    "paddingTop",
    "paddingLeft",
    "paddingRight",
    "paddingBottom",
    "margin",
    "marginTop",
    "marginLeft",
    "marginRight",
    "marginBottom"
  ]
};

// This is probably most navie implementation
const resolveStyleValue = (styleProp, value, props) => {
  if (typeof value === "function") {
    return value(props);
  }
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number" && css_properties.pixel.includes(styleProp)) {
    return `${value}px`;
  }
  return value;
};

const searialize = (styles, props) => {
  // [className, UniqClassName]
  const classNameToUniqClassNameArray = Object.entries(
    styles
  ).map(([className]) => [className, `${className}_${genRandomId()}`]);
  // { className: UniqClassName }
  const classToUniqClass = Object.fromEntries(classNameToUniqClassNameArray);

  const styleTextcontent = classNameToUniqClassNameArray
    .map(
      ([className, uniqClassName]) =>
        `.${uniqClassName} {
            ${Object.entries(styles[className])
              .map(
                ([styleName, styleValue]) =>
                  `${camelToPascalCase(styleName)}: ${resolveStyleValue(
                    styleName,
                    styleValue,
                    props
                  )}`
              )
              .join("; ")}
        }
      `
    )
    .join("\n");
  return {
    classToUniqClass,
    styleTextcontent
  };
};
// main export
export const makeStyles = (styles) => {
  const styleId = genRandomId();
  // re-gen if present in mapStyles
  return function useStyles(props) {
    const { classToUniqClass, styleTextcontent } = searialize(styles, props);
    // This is Navie implmentation
    // may be wrong to put all dom mutations here?
    const prev = document.getElementById(styleId);
    if (prev) document.head.removeChild(prev);
    const styleTag = document.createElement("style");
    styleTag.innerHTML = replaceSpaces(styleTextcontent);
    styleTag.setAttribute("id", styleId);
    document.head.appendChild(styleTag);
    return classToUniqClass;
  };
};

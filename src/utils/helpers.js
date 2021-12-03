import pick from "lodash.pick";
import kebabCase from "lodash.kebabcase";

export const getClasses = (classes, props, whitelist) =>
  [
    classes.split(" ").filter(Boolean).join(" "),
    props.className
      ? props.className.split(" ").filter(Boolean).join(" ")
      : null,
    ...Object.keys(pick(props, whitelist)).map((k) =>
      props[k] ? `kui-${kebabCase(k)}` : false
    )
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

export const SIZES = {
  // 1/2s
  0.5: "kui-size-50",

  // 3rds
  0.33: "kui-size-33",
  0.66: "kui-size-66",

  // 4ths
  0.25: "kui-size-25",
  0.75: "kui-size-75",

  // 5ths
  0.2: "kui-size-20",
  0.4: "kui-size-40",
  0.6: "kui-size-60",
  0.8: "kui-size-80",

  // 6ths
  0.166: "kui-size-166",
  0.833: "kui-size-833",

  // 8ths
  0.125: "kui-size-125",
  0.375: "kui-size-375",
  0.625: "kui-size-625",
  0.875: "kui-size-875",

  // 10ths
  0.1: "kui-size-10",
  0.3: "kui-size-30",
  0.7: "kui-size-70",
  0.9: "kui-size-90"
};
export const getSize = (size) => {
  if (size > 1) size = size / 100;
  return SIZES[String(size)] || "kui-size-100";
};

const HTML_PROPS = ["disabled", "id", "name", "role", "style", "type"];
export const kuiProps = (props, className, toggles) => {
  const _props = {};
  _props.className = getClasses(className, props, toggles);
  if (props["testId"]) _props["data-test-id"] = props["testId"]; // support for testId && data-test-id
  Object.keys(props).forEach((prop) => {
    if (prop.startsWith("data-") || prop.startsWith("aria-"))
      _props[prop] = props[prop];
  });
  HTML_PROPS.forEach((prop) => {
    if (props[prop]) _props[prop] = props[prop];
  });
  return _props;
};

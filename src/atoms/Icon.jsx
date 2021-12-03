import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import kebabCase from "lodash.kebabcase";
import { getClasses, kuiProps } from "../utils/helpers";

const KUI_ICON = "kui-icon";
const KUI_COLOR_X = "kui-color-";
const KUI_SIZE_X = "kui-box-size-";

/**
These icons can be imported from the `dist/icons` directory. ```import CheckmarkIcon from '@node-packages/kanan_ui/dist/icons/CheckmarkIcon';```
**/
export const Icon = forwardRef(
  ({ children, color = "stoneBlack2", onClick, size = 24, ...props }, ref) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      ref={ref}
      {...kuiProps(
        props,
        [
          KUI_ICON,
          [KUI_COLOR_X, kebabCase(color)].join(""),
          [KUI_SIZE_X, size].join("")
        ].join(" ")
      )}
    >
      {children}
    </svg>
  )
);

Icon.propTypes = {
  /**
    Icons can be assigned a color.
    */
  color: PropTypes.oneOf([
    "marineBlue",
    "stoneBlack",
    "stoneBlack1",
    "stoneBlack2",
    "stoneBlack4",
    "negative",
    "negativeM2",
    "amberGoldM3",
    "white"
  ]),
  /**
    Icons can be two sizes.
    */
  size: PropTypes.oneOf([12, 16, 20, 24, 32, 48, 60]),
  /**
    Most of the time you should use the IconButton, but occasionally you just want an Icon that is clickable.
    */
  onClick: PropTypes.func
};

export const Line = (props) => (
  <line
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    {...props}
  />
);

export const Rect = (props) => (
  <rect
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    {...props}
  />
);

export const Path = (props) => (
  <path
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    {...props}
  />
);

export const Circle = (props) => (
  <circle
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
    {...props}
  />
);

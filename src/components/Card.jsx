import { forwardRef } from "react";
import { getClasses, getSize, kuiProps } from "../utils/helpers";

export const Card = forwardRef((props, ref) => (
  <div
    ref={ref}
    {...kuiProps(props, `kui-card-container ${getSize(props.size)}`)}
  >
    {props.children}
  </div>
));

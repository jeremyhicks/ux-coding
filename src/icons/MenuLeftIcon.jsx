import React, { forwardRef } from "react";
import { Icon, Line } from "../atoms/Icon";

const MenuLeftIcon = forwardRef((props, ref) => (
  <Icon {...props} ref={ref}>
    <Line x1="3" y1="6" x2="21" y2="6" />
    <Line x1="3" y1="12" x2="11" y2="12" />
    <Line x1="3" y1="18" x2="15" y2="18" />
  </Icon>
));

export default MenuLeftIcon;

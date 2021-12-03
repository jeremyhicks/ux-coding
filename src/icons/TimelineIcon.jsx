import React, { forwardRef } from "react";
import { Icon, Path } from "../atoms/Icon";

const TimelineIcon = forwardRef((props, ref) => (
  <Icon {...props} ref={ref}>
    <Path d="M12 23C19 23 23 17 23 12C23 7 19 1 12 1" />
    <Path d="M12 23C5 23 1 17 1 12C1 7 5 1 12 1" strokeDasharray="4 4" />
    <Path d="M12 5.5V12L15 14" />
  </Icon>
));

export default TimelineIcon;

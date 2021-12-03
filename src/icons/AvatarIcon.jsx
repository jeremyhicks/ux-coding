import React, { forwardRef } from "react";
import { Icon, Path, Circle } from "../atoms/Icon";

const AvatarIcon = forwardRef((props, ref) => (
  <Icon {...props} ref={ref}>
    <Circle cx="12" cy="7" r="5" />
    <Path d="M2 22V19.9355C2 16.8547 5.33651 14.9304 8.00317 16.4733L8.49446 16.7575C10.6631 18.0122 13.3369 18.0122 15.5055 16.7575L15.9968 16.4733C18.6635 14.9304 22 16.8547 22 19.9355V22" />
  </Icon>
));

export default AvatarIcon;

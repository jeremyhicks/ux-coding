import "./styles/styles.scss";

import { Card } from "./components/Card";
import { Icon } from "./atoms/Icon";

import MenuLeftIcon from "./icons/MenuLeftIcon";
import TimelineIcon from "./icons/TimelineIcon";
import AvatarIcon from "./icons/AvatarIcon";

export default function App() {
  return (
    <div className="app">
      <Card>
        <button>Update Status</button>
        <Icon>
          <MenuLeftIcon />
        </Icon>
        <Icon>
          <TimelineIcon />
        </Icon>
        <div>Eligibility Review</div>
        <Icon>
          <AvatarIcon />
        </Icon>
        <button>New Loan</button>
      </Card>
    </div>
  );
}

import "./styles/styles.scss";

import { Card } from "./components/Card";

import MenuLeftIcon from "./icons/MenuLeftIcon";
import TimelineIcon from "./icons/TimelineIcon";
import AvatarIcon from "./icons/AvatarIcon";

// create header component that accepts Left and Right components
// style to match the App Bar image

export default function App() {
  return (
    <div className="app">
      <Card>
        <button>Update Status</button>
        <MenuLeftIcon />
        <TimelineIcon />
        <div>Eligibility Review</div>
        <AvatarIcon />
        <button>New Loan</button>
      </Card>
    </div>
  );
}

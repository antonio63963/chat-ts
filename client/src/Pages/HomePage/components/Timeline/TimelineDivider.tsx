import cn from "classnames";

import "./TimelineDivider.css";

interface ITimelineDivider {
  text: string;
}

const TimelineDivider = ({ text }: ITimelineDivider) => {
  return (
    <div className={cn("timelineDivider")}>
      <div className={cn("timelineDivider__border", "borderBottom")}></div>
      <span className={cn("timelineDivider__text")}>{text}</span>
      <div className={cn("timelineDivider__border", "borderBottom")}></div>
    </div>
  );
};

export default TimelineDivider;

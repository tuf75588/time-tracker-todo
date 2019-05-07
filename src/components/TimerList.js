import React from "react";
import { AppConsumer } from "../contexts";
import EditableTimer from "./EditableTimer";

function TimerList(props) {
  return (
    <AppConsumer>
      {({ timers }) =>
        timers.map((timer) => (
          <div id='timers'>
            <EditableTimer />
          </div>
        ))
      }
    </AppConsumer>
  );
}
export default TimerList;

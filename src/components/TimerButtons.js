import React from "react";
import { AppConsumer } from "../contexts";

function TimerButtons() {
  return (
    <AppConsumer>
      {({ editFormOpen, isRunning }) => {
        if (!isRunning) {
          return (
            <div className='ui bottom attached green basic button'>Start</div>
          );
        }
        return <div className='ui bottom attached red basic button'>Stop</div>;
      }}
    </AppConsumer>
  );
}
export default TimerButtons;

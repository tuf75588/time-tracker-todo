import React, { useState } from "react";
import { AppConsumer } from "../contexts";

function ToggleTimerButton(props) {
  return (
    <AppConsumer>
      {({ isOpenToggle, isOpen }) => {
        return (
          <div className='ui basic content center aligned segment'>
            <button className='ui basic button icon' onClick={isOpenToggle}>
              <i className='plus icon' />
            </button>
            <pre>{String(isOpen)}</pre>
          </div>
        );
      }}
    </AppConsumer>
  );
}
export default ToggleTimerButton;

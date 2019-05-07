import React from "react";
import TimerButtons from "./TimerButtons";

function Timer() {
  return (
    <div className='ui centered card'>
      <div className='content'>
        <div className='header'>Something</div>
        <div className='meta'>Something</div>
        <div className='center aligned description'>
          <h2>something</h2>
        </div>
        <div className='extra content'>
          <span className='right floated edit icon'>
            <i className='edit icon' />
          </span>
          <span className='right floated trash icon'>
            <i className='trash icon' />
          </span>
        </div>
      </div>
      <TimerButtons />
    </div>
  );
}
export default Timer;

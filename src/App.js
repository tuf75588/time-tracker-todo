import React from "react";

import TimerDashboard from "./components/TimerDashboard";
class App extends React.Component {
  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <TimerDashboard />
        </div>
      </div>
    );
  }
}
export default App;

import React from "react";
import ToggleTimerButton from "./ToggleTimerButton";
import uuidv4 from "uuidv4";
import TimerList from "./TimerList";
import { AppProvider } from "../contexts";

class TimerDashboard extends React.Component {
  state = {
    isOpen: false,
    isOpenToggle: () => {
      this.setState((prevState) => ({
        isOpen: prevState.isOpen === false ? true : false
      }));
    },
    title: "",
    editFormOpen: false,
    timers: [
      {
        title: "World Domination",
        runningSince: Date.now(),
        id: uuidv4(),
        elapsed: 5456099
      },
      {
        title: "Learn React",
        runningSince: Date.now(),
        id: uuidv4(),
        elapsed: 5456099
      },
      {
        title: "Become a streamer",
        runningSince: Date.now(),
        id: uuidv4(),
        elapsed: 5456099
      },
      {
        title: "Fill Prescriptions",
        runningSince: Date.now(),
        id: uuidv4(),
        elapsed: 5456099
      }
    ],
    isRunning: false
  };
  render() {
    return (
      <AppProvider value={this.state}>
        <TimerList />
        <ToggleTimerButton />
      </AppProvider>
    );
  }
}

export default TimerDashboard;

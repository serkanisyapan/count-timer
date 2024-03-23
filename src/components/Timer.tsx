import { useState } from "react";
import { Input } from "./ui/input";
import { DatePicker } from "./DatePicker";

export function Timer() {
  const [timerName, setTimerName] = useState("Timer Event Name");

  function resetTimerNameOnFocus() {
    if (timerName === "Timer Event Name") setTimerName("");
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Event Name"
        onChange={(event) => setTimerName(event.target.value)}
        onFocus={() => resetTimerNameOnFocus()}
        value={timerName}
      ></Input>
      <h1 className="text-white text-xl">{timerName}</h1>
      <DatePicker />
    </div>
  );
}

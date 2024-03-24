import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { DatePicker } from "./DatePicker";
import { EventTimeSelector } from "./EvenTimeSelector";

export function Timer() {
  const [timerName, setTimerName] = useState("Timer Event Name");

  function resetTimerNameOnFocus() {
    if (timerName === "Timer Event Name") setTimerName("");
  }

  return (
    <div className="max-w-s flex flex-col gap-5 px-10 mt-7">
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="event_name">Event Name</Label>
        <Input
          type="text"
          id="event_name"
          placeholder="Event Name"
          onChange={(event) => setTimerName(event.target.value)}
          onFocus={() => resetTimerNameOnFocus()}
          value={timerName}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="date_picker">Event Date</Label>
        <DatePicker />
      </div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="event_time">Event Time</Label>
        <EventTimeSelector />
      </div>
    </div>
  );
}

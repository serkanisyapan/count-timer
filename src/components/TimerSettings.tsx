import { type ChangeEvent } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { DatePicker } from "./DatePicker";
import { EventTimeSelector } from "./EvenTimeSelector";
import { TimezoneSelect } from "./TimezoneSelect";

interface TimerSettingsProps {
  timerName: string;
  handleTimerName: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TimerSettings(props: TimerSettingsProps) {
  const { timerName, handleTimerName } = props;
  return (
    <div className="max-w-s flex flex-col gap-5 px-10 mt-7 justify-self-start">
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="event_name">Event Name</Label>
        <Input
          type="text"
          id="event_name"
          placeholder="Event Name"
          onChange={(event) => handleTimerName(event)}
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
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="event_time_zone">Time Zone</Label>
        <TimezoneSelect />
      </div>
    </div>
  );
}

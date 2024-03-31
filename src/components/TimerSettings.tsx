import { useState, type ChangeEvent, useSyncExternalStore } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { DatePicker } from "./DatePicker";
import { EventTimeSelector } from "./EventTimeSelector";
import { TimezoneSelect } from "./TimezoneSelect";
import { Checkbox } from "./ui/checkbox";

interface TimerSettingsProps {
  timerName: string;
  handleTimerName: (event: ChangeEvent<HTMLInputElement>) => void;
}
interface EventTime {
  hours: string;
  mins: string;
}

export function TimerSettings(props: TimerSettingsProps) {
  const { timerName, handleTimerName } = props;
  const [is24hoursTime, setIs24hoursTime] = useState(false);
  const [eventTime, setEventTime] = useState<EventTime>({
    hours: "",
    mins: "",
  });

  function handleEventTime(time: string, value: string) {
    setEventTime((et) => {
      return { ...et, [time]: value };
    });
  }

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
        <div className="flex items-center gap-5">
          <Label htmlFor="event_time">Event Time</Label>
          <div className="flex items-center space-x-1">
            <Checkbox
              id="hours_type"
              onClick={() => setIs24hoursTime(!is24hoursTime)}
              checked={is24hoursTime}
            />
            <Label htmlFor="hours_type" className="text-sm">
              24 hrs clock
            </Label>
          </div>
        </div>
        <EventTimeSelector
          handleEventTime={handleEventTime}
          is24hoursTime={is24hoursTime}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor="event_time_zone">Time Zone</Label>
        <TimezoneSelect />
      </div>
    </div>
  );
}

import { useState, type ChangeEvent } from "react";
import { TimerSettings } from "./TimerSettings";
import { CountTime } from "./CountTime";

export function Timer() {
  const [timerName, setTimerName] = useState("");

  function handleTimerName(event: ChangeEvent<HTMLInputElement>) {
    setTimerName(event.target.value);
  }

  return (
    <div className="relative">
      <div>
        <TimerSettings
          timerName={timerName}
          handleTimerName={handleTimerName}
        />
      </div>
      <div className="absolute left-[35%] top-0 flex flex-col items-center gap-10">
        <div>
          {timerName.length > 0 ? (
            <h2 className="text-3xl overflow-hidden text-ellipsis max-h-[70px] text-red-400 max-w-sm text-center">
              {timerName}
            </h2>
          ) : (
            <h2 className="text-3xl text-red-400">Event Name</h2>
          )}
        </div>
        <CountTime />
      </div>
    </div>
  );
}

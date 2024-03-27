import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import type { ITimezone } from "react-timezone-select";

const labelStyle = "original";
const timezones = {
  ...allTimezones,
  "Europe/Berlin": "Frankfurt",
};

export function TimezoneSelect() {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones,
  });

  return (
    <Select
      onValueChange={(value) => setSelectedTimezone(value)}
      defaultValue={parseTimezone(selectedTimezone).value}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Timezone" />
      </SelectTrigger>
      <SelectContent>
        {options.map((timeZone) => (
          <SelectItem key={timeZone.label} value={`${timeZone.value}`}>
            {timeZone.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

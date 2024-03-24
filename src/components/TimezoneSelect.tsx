import { useTimezoneSelect, allTimezones } from "react-timezone-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const labelStyle = "original";
const timezones = {
  ...allTimezones,
  "Europe/Berlin": "Frankfurt",
};

export function TimezoneSelect() {
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones,
  });

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a Timezone" />
      </SelectTrigger>
      <SelectContent>
        {options.map((timeZone) => (
          <SelectItem value={`${timeZone.value}`}>{timeZone.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

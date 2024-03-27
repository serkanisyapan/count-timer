import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const twelveHoursClock = [
  "12 am",
  "1 am",
  "2 am",
  "3 am",
  "4 am",
  "5 am",
  "6 am",
  "7 am",
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
  "7 pm",
  "8 pm",
  "9 pm",
  "10 pm",
  "11 pm",
];
const twentyFourHoursClock = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];
function createMinsArray() {
  let minsArray = [];
  for (let i = 0; i < 60; i++) {
    if (i < 10) minsArray.push(`0${i}`);
    if (i >= 10) minsArray.push(`${i}`);
  }
  return minsArray;
}

export function EventTimeSelector(props: { is24hoursTime: boolean }) {
  const eventHours = props.is24hoursTime
    ? twentyFourHoursClock
    : twelveHoursClock;

  return (
    <div className="flex flex-row gap-2">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="hrs" />
        </SelectTrigger>
        <SelectContent>
          {eventHours.map((clock) => (
            <SelectItem key={clock} value={`${clock}`}>
              {clock}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="mins" />
        </SelectTrigger>
        <SelectContent>
          {createMinsArray().map((mins) => (
            <SelectItem key={mins} value={`${mins}`}>
              {mins} min
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

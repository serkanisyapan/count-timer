function TimeUnit(props: { time: string; unit: string }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex justify-center flex-col items-center gap-5">
        <h2 className="text-8xl">{props.time}</h2>
        <p>{props.unit}</p>
      </div>
      <div className={props.unit === "secs" ? "hidden" : ""}>
        <span className="text-4xl">:</span>
      </div>
    </div>
  );
}
export function CountTime() {
  return (
    <div className="flex flex-row gap-5 a">
      <TimeUnit time="00" unit="days" />
      <TimeUnit time="00" unit="hours" />
      <TimeUnit time="00" unit="mins" />
      <TimeUnit time="00" unit="secs" />
    </div>
  );
}

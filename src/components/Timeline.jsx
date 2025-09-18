import { Lane } from "./Lane";

export function Timeline({ lanes }) {
  return (
    <div className="flex flex-col gap-2">
      {lanes.map((lane, index) => (
        <Lane lane={lane} index={index} key={index} />
      ))}
    </div>
  );
}

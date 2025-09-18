import clsx from "clsx";
import { TimelineItem } from "./TimelineItem";

export function Lane({ lane, index }) {
  return (
    <div
      className={clsx(
        index % 2 === 0 ? "bg-gray-50" : "bg-gray-200",
        "flex items-center min-h-10 p-1 rounded-xl border border-gray-300 relative"
      )}
    >
      {lane.map((item) => (
        <TimelineItem item={item} key={item.id} />
      ))}
    </div>
  );
}

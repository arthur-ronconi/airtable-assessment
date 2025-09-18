import dayjs from "dayjs";
import timelineItems from "../timelineItems";
import clsx from "clsx";

export function TimelineItem({ item }) {
  const { start, end, name, id } = item;

  const timeline_start = dayjs(timelineItems[0].start);
  const timeline_end = dayjs(timelineItems[timelineItems.length - 1].end);
  const timeline_duration = timeline_end.diff(timeline_start, "days");

  const item_start = dayjs(start);
  const item_end = dayjs(end);

  function getItemPosition() {
    const percent =
      (item_start.diff(timeline_start, "days") / timeline_duration) * 100;
    if (id == timelineItems[timelineItems.length - 1].id) {
      return { right: `4px` };
    } else {
      return { left: `calc(${percent}% + 4px)` };
    }
  }
  const position = getItemPosition();

  function getItemWidth() {
    const diff = item_end.diff(item_start, "days");
    let revised_diff = diff;
    if (diff <= 1) {
      revised_diff = 5;
    }
    const percent = (revised_diff / timeline_duration) * 100;
    return { width: `${percent}%` };
  }
  const width = getItemWidth();

  return (
    <div
      className={clsx(
        "flex flex-col gap-4 py-1 px-2 bg-blue-400 border border-gray-300 rounded-lg text-white text-sm font-semibold hover:brightness-110 cursor-pointer absolute hover:z-10  whitespace-nowrap truncate hover:min-w-min hover:top-1 group"
      )}
      style={{ ...position, ...width }}
    >
      <span>{name}</span>
      <div className="hidden group-hover:flex flex-col text-xs gap-2">
        <p>Start: {start}</p>
        <p>End: {end}</p>
      </div>
    </div>
  );
}

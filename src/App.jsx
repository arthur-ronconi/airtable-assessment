import timelineItems from "./timelineItems";
import assignLanes from "./assignLanes";
import { Timeline } from "./components/Timeline";
import dayjs from "dayjs";

export function App() {
  const lanes = assignLanes(timelineItems);

  const start = dayjs(timelineItems[0].start).format("MM/DD/YYYY");
  const end = dayjs(timelineItems[timelineItems.length - 1].end).format(
    "MM/DD/YYYY"
  );

  return (
    <>
      <div className="container mx-auto pt-16 flex flex-col gap-4 divide-y-2 divide-blue-500">
        <div className="flex items-baseline justify-between">
          <h1 className="text-3xl font-bold pb-2">Airtable Timeline</h1>
          <span className="text-sm font-semibold text-gray-500">
            {start} - {end}
          </span>
        </div>
        <Timeline lanes={lanes} />
      </div>
    </>
  );
}

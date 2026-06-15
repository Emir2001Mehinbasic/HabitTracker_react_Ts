import { Button } from "./button";
import { startOfWeek, endOfWeek, eachDayOfInterval, format } from "date-fns";

export type HabitItemProps = {
  habit: {
    id: number;
    name: string;
  };
};

export const HabitItem = ({ habit }: HabitItemProps) => {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  return (
    <div className="rounded-xl bg-zinc-800 p-4 ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-yellow-400">2</span>
        </div>
        <Button>Delete</Button>
      </div>
      <div className="flex gap-1.5">
        {visibleDates.map((date) => (
          <Button key={date.toISOString()}>
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
